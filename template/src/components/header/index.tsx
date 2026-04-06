import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { all_routes } from "../../routes/all_routes";
import {
  avator1,
  logoSvg,
  logoSmallPng,
  logoWhitePng,
} from "../../utils/imagepath";
const Header = () => {
  const route = all_routes;
  const [toggle, SetToggle] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isElementVisible = (element: any) => {
    return element.offsetWidth > 0 || element.offsetHeight > 0;
  };

  useEffect(() => {
    interface MouseoverEvent extends MouseEvent {
      stopPropagation(): void;
      preventDefault(): void;
    }

    const handleMouseover = (e: MouseoverEvent) => {
      e.stopPropagation();

      const body = document.body as HTMLBodyElement;
      const toggleBtn: HTMLElement | null =
        document.getElementById("toggle_btn");

      if (
        body.classList.contains("mini-sidebar") &&
        isElementVisible(toggleBtn)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("mouseover", handleMouseover);

    return () => {
      document.removeEventListener("mouseover", handleMouseover);
    };
  }, []);
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
    SetToggle((current) => !current);
  };
  const location = useLocation();

  const sidebarOverlay = () => {
    document?.querySelector(".main-wrapper")?.classList?.toggle("slide-nav");
    document?.querySelector(".sidebar-overlay")?.classList?.toggle("opened");
    document?.querySelector("html")?.classList?.toggle("menu-opened");
  };
  useEffect(() => {
    document.querySelector(".main-wrapper")?.classList.remove("slide-nav");
    document.querySelector(".sidebar-overlay")?.classList.remove("opened");
    document.querySelector("html")?.classList.remove("menu-opened");
  }, [location.pathname]);

  let pathname = location.pathname;

  const exclusionArray = [
    "/reactjs/template/dream-pos/index-three",
    "/reactjs/template/dream-pos/index-one",
  ];
  if (exclusionArray.indexOf(window.location.pathname) >= 0) {
    return "";
  }

  interface FullscreenDocument extends Document {
    mozFullScreenElement?: Element | null;
    webkitFullscreenElement?: Element | null;
    msFullscreenElement?: Element | null;
    msRequestFullscreen?: () => Promise<void>;
    mozCancelFullScreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
  }

  interface FullscreenElement extends HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    webkitRequestFullscreen?: (allowKeyboardInput?: any) => Promise<void>;
  }

  const toggleFullscreen = (elem?: FullscreenElement) => {
    const doc = document as FullscreenDocument;
    elem = elem || (document.documentElement as FullscreenElement);
    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(1);
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
  };
  interface RootState {
    themeSetting: {
      expandMenus: { expandMenus: boolean };
      dataLayout: string;
    };
  }

  const { expandMenus } = useSelector(
    (state: RootState) => state.themeSetting.expandMenus
  );
  const dataLayout = useSelector(
    (state: RootState) => state.themeSetting.dataLayout
  );

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  return (
    <>
      <div className="header">
        {/* Logo */}
        <div className="main-header d-flex align-items-center justify-content-between w-100">
          <div
            className={`header-left
             ${toggle ? "" : "active"}
             ${
               expandMenus || dataLayout === "layout-hovered"
                 ? "expand-menu"
                 : ""
             }
             `}
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
            <Link to="/dashboard" className="logo logo-normal">
              <img src={logoSvg} alt="img" />
            </Link>
            <Link to="/dashboard" className="logo logo-white">
              <img src={logoWhitePng} alt="img" />
            </Link>
            <Link to="/dashboard" className="logo-small">
              <img src={logoSmallPng} alt="img" />
            </Link>
            <Link
              id="toggle_btn"
              to="#"
              style={{
                display:
                  pathname.includes("tasks") || pathname.includes("pos")
                    ? "none"
                    : pathname.includes("compose")
                    ? "none"
                    : "",
              }}
              onClick={handlesidebar}
            >
              <i className="feather icon-chevrons-left feather-16" />
            </Link>
          </div>
          {/* /Logo */}
          <Link
            id="mobile_btn"
            className="mobile_btn"
            to="#"
            onClick={sidebarOverlay}
          >
            <span className="bar-icon">
              <span />
              <span />
              <span />
            </span>
          </Link>
          {/* Header Menu */}
          <ul className="nav user-menu ms-auto me-3">
            {/* Search */}

            {/* /Search */}

            {/* Select Store */}

            {/* /Select Store */}

            <li className="nav-item dropdown link-nav">
              <Link
                to="#"
                className="btn btn-primary btn-md d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-circle-plus me-1" />
                Add New
              </Link>
              <div className="dropdown-menu dropdown-xl dropdown-menu-center">
                <div className="row g-2">
                  <div className="col-md-2">
                    <Link to={route.categorylist} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-brand-codepen" />
                      </span>
                      <p>Category</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.addproduct} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-square-plus" />
                      </span>
                      <p>Product</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.categorylist} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-shopping-bag" />
                      </span>
                      <p>Purchase</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.onlineorder} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-shopping-cart" />
                      </span>
                      <p>Sale</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.expenselist} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-file-text" />
                      </span>
                      <p>Expense</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.quotationlist} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-device-floppy" />
                      </span>
                      <p>Quotation</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.salesreturn} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-copy" />
                      </span>
                      <p>Return</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.users} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-user" />
                      </span>
                      <p>User</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.customer} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-users" />
                      </span>
                      <p>Customer</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.salesreport} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-shield" />
                      </span>
                      <p>Biller</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.suppliers} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-user-check" />
                      </span>
                      <p>Supplier</p>
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <Link to={route.stocktransfer} className="link-item">
                      <span className="link-icon">
                        <i className="ti ti-truck" />
                      </span>
                      <p>Transfer</p>
                    </Link>
                  </div>
                </div>
              </div>
            </li>


            <li className="nav-item nav-item-box">
              <Link
                to="#"
                id="btnFullscreen"
                onClick={() => toggleFullscreen()}
                className={isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
              >
                {/* <i data-feather="maximize" /> */}
                <i className="ti ti-maximize"></i>
              </Link>
            </li>


            <li className="nav-item dropdown has-arrow main-drop profile-nav">
              <Link
                to="#"
                className="nav-link userset"
                data-bs-toggle="dropdown"
              >
                <span className="user-info p-0">
                  <span className="user-letter">
                    <img src={avator1} alt="Img" className="img-fluid" />
                  </span>
                </span>
              </Link>
              <div className="dropdown-menu menu-drop-user">
                <div className="profileset d-flex align-items-center">
                  <span className="user-img me-2">
                    <img src={avator1} alt="Img" />
                  </span>
                  <div>
                    <h6 className="fw-medium">John Smilga</h6>
                    <p>Admin</p>
                  </div>
                </div>
                <Link className="dropdown-item" to={route.profile}>
                  <i className="ti ti-user-circle me-2" />
                  MyProfile
                </Link>
                <Link className="dropdown-item" to={route.salesreport}>
                  <i className="ti ti-file-text me-2" />
                  Reports
                </Link>
                <Link className="dropdown-item" to={route.generalsettings}>
                  <i className="ti ti-settings-2 me-2" />
                  Settings
                </Link>
                <hr className="my-2" />
                <Link className="dropdown-item logout pb-0" to={route.signin}>
                  <i className="ti ti-logout me-2" />
                  Logout
                </Link>
              </div>
            </li>
          </ul>
          {/* /Header Menu */}
          {/* Mobile Menu */}
          <div className="dropdown mobile-user-menu">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link className="dropdown-item" to="profile">
                My Profile
              </Link>
              <Link className="dropdown-item" to="generalsettings">
                Settings
              </Link>
              <Link className="dropdown-item" to="signin">
                Logout
              </Link>
            </div>
          </div>
          {/* /Mobile Menu */}
        </div>
      </div>
    </>
  );
};

export default Header;
