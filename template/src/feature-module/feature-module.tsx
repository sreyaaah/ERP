import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation, matchPath } from "react-router";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import ThemeSettings from "../components/layouts/themeSettings";
import { authRoutes, posPages, unAuthRoutes } from "../routes/path";
import { useEffect, useState, useRef } from "react";
import TwoColumnSidebar from "../components/layouts/two-column";
import HorizontalSidebar from "../components/layouts/horizontalSidebar";
import PosHeader from "./pos/posHeader";
import { setDataTheme } from "../core/redux/themeSettingSlice";

const FeatureModule = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { toggleHeader } = useSelector((state: any) => state.sidebar);

  const [showLoader, setShowLoader] = useState(true);
  const data = useSelector((state: any) => state.rootReducer.toggle_header);
  const dataWidth = useSelector((state: any) => state.themeSetting.dataWidth);
  const dataLayout = useSelector((state: any) => state.themeSetting.dataLayout);
  const dataTheme = useSelector((state: any) => state.themeSetting.dataTheme);
  const dataSidebarAll = useSelector(
    (state: any) => state.themeSetting.dataSidebarAll
  );
  const dataColorAll = useSelector(
    (state: any) => state.themeSetting.dataColorAll
  );
  const dataTopBarColorAll = useSelector(
    (state: any) => state.themeSetting.dataTopBarColorAll
  );
  const dataTopbarAll = useSelector(
    (state: any) => state.themeSetting.dataTopbarAll
  );

  // Store the previous theme to restore it when leaving auth routes
  const previousThemeRef = useRef<string | null>(null);

  useEffect(() => {
    // Show the loader when navigating to a new route
    setShowLoader(true);

    // Hide the loader after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    window.scrollTo(0, 0);
    return () => {
      clearTimeout(timeoutId); // Clear the timeout when component unmounts
    };
  }, [location.pathname]);

  // Handle dark theme removal on auth routes
  useEffect(() => {
    const isUnAuthRoute = unAuthRoutes.some((route) =>
      matchPath(
        { path: typeof route === "string" ? route : route.path, end: true },
        location.pathname
      )
    );

    if (isUnAuthRoute) {
      // On auth route - always set theme to light
      // Save the current theme to restore later (only if not already saved and not light)
      if (dataTheme !== "light" && previousThemeRef.current === null) {
        previousThemeRef.current = dataTheme;
      }
      // Always set theme to light for auth pages
      if (dataTheme !== "light") {
        dispatch(setDataTheme("light"));
        document.documentElement.setAttribute("data-theme", "light");
      }
    } else {
      // Not on auth route - restore previous theme if we had one saved
      if (previousThemeRef.current !== null) {
        const themeToRestore = previousThemeRef.current;
        previousThemeRef.current = null;
        // Only restore if it's different from current theme
        if (dataTheme !== themeToRestore) {
          dispatch(setDataTheme(themeToRestore));
          document.documentElement.setAttribute("data-theme", themeToRestore);
        }
      }
    }
  }, [location.pathname, dataTheme, dispatch]);
  const Preloader = () => {
    return (
      <div id="global-loader">
        <div className="whirly-loader"> </div>
      </div>
    );
  };

  const isUnAuthRoute = unAuthRoutes.some((route) =>
    matchPath(
      { path: typeof route === "string" ? route : route.path, end: true },
      location.pathname
    )
  );
  const isPosPage = posPages.some((route) =>
    matchPath(
      { path: typeof route === "string" ? route : route.path, end: true },
      location.pathname
    )
  );
  const isAuthRoute = authRoutes.some((route) =>
    matchPath(
      { path: typeof route === "string" ? route : route.path, end: true },
      location.pathname
    )
  );

  if (isUnAuthRoute) {
    return (
      <div >
        <Outlet />
      </div>
    );
  }

  if (isPosPage) {
    return (
      <div className={`main-wrapper ${toggleHeader ? "header-collapse" : ""}`}>
        <PosHeader />
        <ThemeSettings />
        <Outlet />
      </div>
    );
  }

  if (isAuthRoute) {
    return (
      <div className={`main-wrapper ${toggleHeader ? "header-collapse" : ""}`}>
        <>
          <style>
            {`
         :root {
           --sidebar--rgb-picr: ${dataSidebarAll};
           --topbar-rgb:${dataTopbarAll};
           --topbar--rgb-picr:${dataTopbarAll};
           --topbarcolor--rgb-picr:${dataTopBarColorAll};
           --primary-rgb-picr:${dataColorAll};
         }
       `}
          </style>

          <div
            className={`
          ${
            dataLayout === "horizontal" ||
            dataLayout === "horizontal-single" ||
            dataLayout === "horizontal-overlay" ||
            dataLayout === "horizontal-box"
              ? "menu-horizontal"
              : ""
          }
         ${dataWidth === "box" ? "layout-box-mode" : ""} 
       
         
         `}
          >
            <>
              <>
                {showLoader && <Preloader />}
                <div
                  className={`main-wrapper ${data ? "header-collapse" : ""}`}
                >
                  {/* <Loader /> */}
                  <Header />
                  <Sidebar />
                  <TwoColumnSidebar />
                  <HorizontalSidebar />
                  <Outlet />
                  {location.pathname.includes("layout") ? (
                    <></>
                  ) : (
                    <ThemeSettings />
                  )}
                </div>
              </>
            </>
          </div>
        </>
      </div>
    );
  }

  return <Outlet />;
};

export default FeatureModule;
