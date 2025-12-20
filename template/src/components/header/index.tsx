import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { all_routes } from "../../routes/all_routes";
import {
  arabicFlag,
  avatar01,
  avatar1,
  avatar10,
  avatar_02,
  avatar_03,
  avatar_13,
  avatar_17,
  avator1,
  commandSvg,
  englishFlag,
  logoSvg,
  logoSmallPng,
  logoWhitePng,
  store_01,
  store_02,
  store_03,
  store_04,
  usFlag,
} from "../../utils/imagepath";
const Header = () => {
  const route = all_routes;
  const [toggle, SetToggle] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [flagImage, _setFlagImage] = useState(usFlag);
  // const { t, i18n } = useTranslation();
  const changeLanguage = (_lng: any) => {
    // Debugging statement
    // i18n.changeLanguage(lng);
    // setFlagImage(
    //   lng === "en"
    //     ? 'assets/img/flags/us-flag.svg'
    //     : lng === "fr"
    //       ? 'assets/img/flags/fr.png'
    //       : lng === "es"
    //         ? 'assets/img/flags/es.png'
    //         : 'assets/img/flags/de.png'
    // );
  };
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
        <div className="main-header">
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
          <ul className="nav user-menu">
            {/* Search */}
            <li className="nav-item nav-searchinputs">
              <div className="top-nav-search">
                <Link to="#" className="responsive-search">
                  <i className="feather icon-search" />
                </Link>
                <form action="#" className="dropdown">
                  <div
                    className="searchinputs input-group dropdown-toggle"
                    id="dropdownMenuClickable"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <input type="text" placeholder="Search" />
                    <div className="search-addon">
                      <span>
                        <i className="ti ti-search" />
                      </span>
                    </div>
                    <span className="input-group-text">
                      <kbd className="d-flex align-items-center">
                        <img src={commandSvg} alt="img" className="me-1" />K
                      </kbd>
                    </span>
                  </div>

                  <div
                    className="dropdown-menu search-dropdown"
                    aria-labelledby="dropdownMenuClickable"
                  >
                    <div className="search-info">
                      <h6>
                        <span>
                          <i className="feather icon-search feather-16" />
                        </span>
                        Recent Searches
                      </h6>
                      <ul className="search-tags">
                        <li>
                          <Link to="#">Products</Link>
                        </li>
                        <li>
                          <Link to="#">Sales</Link>
                        </li>
                        <li>
                          <Link to="#">Applications</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="search-info">
                      <h6>
                        <span>
                          <i className="feather-16 feather icon-help-circle" />
                        </span>
                        Help
                      </h6>
                      <p>
                        How to Change Product Volume from 0 to 200 on Inventory
                        management
                      </p>
                      <p>Change Product Name</p>
                    </div>
                    <div className="search-info">
                      <h6>
                        <span>
                          <i className="feather icon-user feather-16" />
                        </span>
                        Customers
                      </h6>
                      <ul className="customers">
                        <li>
                          <Link to="#">
                            Aron Varu
                            <img src={avatar1} alt="" className="img-fluid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Jonita
                            <img src={avatar01} alt="" className="img-fluid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Aaron
                            <img src={avatar10} alt="" className="img-fluid" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* /Search */}

            {/* Select Store */}
            <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
              <Link
                to="#"
                className="dropdown-toggle nav-link select-store"
                data-bs-toggle="dropdown"
              >
                <span className="user-info">
                  <span className="user-letter">
                    <img
                      src={store_01}
                      alt="Store Logo"
                      className="img-fluid"
                    />
                  </span>
                  <span className="user-detail">
                    <span className="user-name">Freshmart</span>
                  </span>
                </span>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link to="#" className="dropdown-item">
                  <img src={store_01} alt="Store Logo" className="img-fluid" />
                  Freshmart
                </Link>
                <Link to="#" className="dropdown-item">
                  <img src={store_02} alt="Store Logo" className="img-fluid" />
                  Grocery Apex
                </Link>
                <Link to="#" className="dropdown-item">
                  <img src={store_03} alt="Store Logo" className="img-fluid" />
                  Grocery Bevy
                </Link>
                <Link to="#" className="dropdown-item">
                  <img src={store_04} alt="Store Logo" className="img-fluid" />
                  Grocery Eden
                </Link>
              </div>
            </li>
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
            <li className="nav-item pos-nav">
              <Link
                to={route.pos}
                className="btn btn-dark btn-md d-inline-flex align-items-center"
              >
                <i className="ti ti-device-laptop me-1" />
                POS
              </Link>
            </li>

            {/* Flag */}
            <li className="nav-item dropdown has-arrow flag-nav nav-item-box">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
              >
                {/* <i data-feather="globe" /> */}
                {/* <FeatherIcon icon="globe" /> */}
                <img src={flagImage} alt="img" height={16} />
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <Link
                  to="#"
                  className="dropdown-item active"
                  onClick={() => changeLanguage("en")}
                >
                  <img src={englishFlag} alt="img" height={16} />
                  {"English"}
                  {/* {t("English")} */}
                </Link>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={() => changeLanguage("fr")}
                >
                  <img src={arabicFlag} alt="img" height={16} /> Arabic
                </Link>
              </div>
            </li>
            {/* /Flag */}
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
            <li className="nav-item nav-item-box">
              <Link to="/email">
                {/* <i data-feather="mail" /> */}
                <i className="ti ti-mail"></i>
                <span className="badge rounded-pill">1</span>
              </Link>
            </li>
            {/* Notifications */}
            <li className="nav-item dropdown nav-item-box">
              <Link
                to="#"
                className="dropdown-toggle nav-link"
                data-bs-toggle="dropdown"
              >
                {/* <i data-feather="bell" /> */}
                <i className="ti ti-bell"></i>
                {/* <span className="badge rounded-pill">2</span> */}
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <h5 className="notification-title">Notifications</h5>
                  <Link to="#" className="clear-noti">
                    Mark all as read
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to={route.activities}>
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img alt="Img" src={avatar_13} />
                          </span>
                          <div className="flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">James Kirwin</span>{" "}
                              confirmed his order. Order No: #78901.Estimated
                              delivery: 2 days
                            </p>
                            <p className="noti-time">4 mins ago</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to={route.activities}>
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img alt="Img" src={avatar_03} />
                          </span>
                          <div className="flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Leo Kelly</span>{" "}
                              cancelled his order scheduled for 17 Jan 2025
                            </p>
                            <p className="noti-time">10 mins ago</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to={route.activities} className="recent-msg">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img alt="Img" src={avatar_17} />
                          </span>
                          <div className="flex-grow-1">
                            <p className="noti-details">
                              Payment of $50 received for Order #67890 from{" "}
                              <span className="noti-title">Antonio Engle</span>
                            </p>
                            <p className="noti-time">05 mins ago</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to={route.activities} className="recent-msg">
                        <div className="media d-flex">
                          <span className="avatar flex-shrink-0">
                            <img alt="Img" src={avatar_02} />
                          </span>
                          <div className="flex-grow-1">
                            <p className="noti-details">
                              <span className="noti-title">Andrea</span>{" "}
                              confirmed his order. Order No: #73401.Estimated
                              delivery: 3 days
                            </p>
                            <p className="noti-time">4 mins ago</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer d-flex align-items-center gap-3">
                  <Link to="#" className="btn btn-secondary btn-md w-100">
                    Cancel
                  </Link>
                  <Link
                    to={route.activities}
                    className="btn btn-primary btn-md w-100"
                  >
                    View all
                  </Link>
                </div>
              </div>
            </li>
            {/* /Notifications */}
            <li className="nav-item nav-item-box">
              <Link to="/general-settings">
                <i className="feather icon-settings"></i>
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
