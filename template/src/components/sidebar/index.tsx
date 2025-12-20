import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "../../core/json/siderbar_data";
// import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { all_routes } from "../../routes/all_routes";
import { customer15, logo, logoSmall, logoWhite, logoSmallWhite } from "../../utils/imagepath";

// Recursively check if any nested child is active
const hasActiveNestedChild = (menuItem: any, currentPath: string): boolean => {
  if (menuItem?.link === currentPath) {
    return true;
  }
  if (menuItem?.submenuItems) {
    return menuItem.submenuItems.some((child: any) => 
      hasActiveNestedChild(child, currentPath)
    );
  }
  return false;
};

const Sidebar = () => {
  const route = all_routes;
  const Location = useLocation();
  // const { t } = useTranslation();

  const [subOpen, setSubopen] = useState("");
  const [subsidebar, setSubsidebar] = useState("");
  // Track which active links have subdrop class manually toggled off (true = toggled off, false/undefined = show subdrop)
  const [activeLinksSubdropToggled, setActiveLinksSubdropToggled] = useState<Map<string, boolean>>(new Map());

  const toggleSidebar = (title: string) => {
    setSubopen((prev) => (prev === title ? "" : title));
  };

  const toggleSubsidebar = (subitem: string) => {
    setSubsidebar((prev) => (prev === subitem ? "" : subitem));
  };

  // Toggle subdrop for active links
  const toggleActiveLinkSubdrop = (linkPath: string) => {
    setActiveLinksSubdropToggled((prev) => {
      const newMap = new Map(prev);
      const isToggledOff = newMap.get(linkPath);
      // Toggle: if it was toggled off (true), set to false (show subdrop), otherwise set to true (hide subdrop)
      newMap.set(linkPath, !isToggledOff);
      return newMap;
    });
  };

  useEffect(() => {
    // Reset subdrop toggle state when route changes
    setActiveLinksSubdropToggled(new Map());
    
    SidebarData.forEach((mainLabel: any) => {
      mainLabel.submenuItems.forEach((title: any) => {
        const hasActiveChild = title.submenuItems?.some((item: any) => {
          // Check if the item's link matches the current path
          if (item.link === Location.pathname) {
            return true;
          }
          // Check for nested children
          if (hasActiveNestedChild(item, Location.pathname)) {
            // If item has submenu and active child, open the subsidebar
            if (item.submenu && item.submenuItems) {
              setSubsidebar(item.label);
            }
            return true;
          }
          return false;
        });
        if (hasActiveChild) {
          setSubopen(title.label);
        }
      });
    });
  }, [Location.pathname]);

  const [toggle, SetToggle] = useState(false);
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
    SetToggle((current) => !current);
  };

  const { expandMenus } = useSelector(
    (state:any) => state.themeSetting.expandMenus
  );
  const dataLayout = useSelector((state:any) => state.themeSetting.dataLayout);

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  return (
    <div>
      <div
        className={`sidebar ${toggle ? "" : "active"} ${expandMenus || dataLayout === "layout-hovered" ? "expand-menu" : ""}`}
        id="sidebar"
        onMouseLeave={expandMenu}
        onMouseOver={expandMenuOpen}
      >
        <>
          {/* Logo */}
          <div className="sidebar-logo active">
            <Link to={route.newdashboard} className="logo logo-normal">
              <img src={logo} alt="Img" />
            </Link>
            <Link to={route.newdashboard} className="logo logo-white">
              <img src={logoWhite} alt="Img" />
            </Link>
            <Link to={route.newdashboard} className="logo-small">
              <img src={logoSmall} alt="Img" />
            </Link>
            <Link to={route.newdashboard} className="logo-small-white">
              <img src={logoSmallWhite} alt="Img" />
            </Link>
            <Link id="toggle_btn" to="#" onClick={handlesidebar}>
              <i className="feather icon-chevrons-left feather-16" />
            </Link>
          </div>
          {/* /Logo */}
          <div className="modern-profile p-3 pb-0">
            <div className="text-center rounded bg-light p-3 mb-4 border">
              <div className="avatar avatar-lg online mb-3">
                <img
                  src={customer15}
                  alt="Img"
                  className="img-fluid rounded-circle"
                />
              </div>
              <h6 className="fs-14 fw-bold mb-1">Adrian Herman</h6>
              <p className="fs-12 mb-0">System Admin</p>
            </div>
            <div className="sidebar-nav mb-3">
              <ul
                className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent"
                role="tablist"
              >
                <li className="nav-item">
                  <Link className="nav-link active border-0" to="#">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link border-0" to={route.chat}>
                    Chats
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link border-0" to={route.email}>
                    Inbox
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-header p-3 pb-0 pt-2">
            <div className="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center">
              <div className="avatar avatar-md onlin">
                <img
                  src={customer15}
                  alt="Img"
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="text-start sidebar-profile-info ms-2">
                <h6 className="fs-14 fw-bold mb-1">Adrian Herman</h6>
                <p className="fs-12">System Admin</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between menu-item mb-3">
              <div>
                <Link
                  to={route.newdashboard}
                  className="btn btn-sm btn-icon bg-light"
                >
                  <i className="ti ti-layout-grid-remove" />
                </Link>
              </div>
              <div>
                <Link to={route.chat} className="btn btn-sm btn-icon bg-light">
                  <i className="ti ti-brand-hipchat" />
                </Link>
              </div>
              <div>
                <Link
                  to={route.email}
                  className="btn btn-sm btn-icon bg-light position-relative"
                >
                  <i className="ti ti-message" />
                </Link>
              </div>
              <div className="notification-item">
                <Link
                  to={route.activities}
                  className="btn btn-sm btn-icon bg-light position-relative"
                >
                  <i className="ti ti-bell" />
                  <span className="notification-status-dot" />
                </Link>
              </div>
              <div className="me-0">
                <Link
                  to={route.generalsettings}
                  className="btn btn-sm btn-icon bg-light"
                >
                  <i className="ti ti-settings" />
                </Link>
              </div>
            </div>
          </div>
        </>
       <div data-simplebar="">
          <div className="sidebar-inner ">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                {SidebarData?.map((mainLabel:any, index:any) => (
                  <li className="submenu-open" key={index}>
                    <h6 className="submenu-hdr">{mainLabel?.label}</h6>
                    <ul>
                      {mainLabel?.submenuItems?.map((title:any, i:any) => {
                        // Build array of all nested links for active state checking
                        const link_array: string[] = [];
                        title?.submenuItems?.forEach((link:any) => {
                          link_array.push(link?.link);
                          if (link?.submenu && link?.submenuItems) {
                            link?.submenuItems?.forEach((item:any) => {
                              link_array.push(item?.link);
                            });
                          }
                        });
                        title.links = link_array;
                        
                        const isTitleActive = title?.links?.includes(Location.pathname);
                        const isTitleOpen = subOpen === title?.label;
                        const hasNoSubmenu = !title?.submenu;
                        const isDirectActive = hasNoSubmenu && Location.pathname === title?.link;

                        return (
                          <React.Fragment key={i}>
                            <li
                              className={`submenu ${
                                isDirectActive ? "custom-active-hassubroute-false" : ""
                              }`}
                            >
                              <Link
                                to={title?.link || "#"}
                                onClick={(e) => {
                                  if (title?.submenu && !title?.link) {
                                    e.preventDefault();
                                  }
                                  toggleSidebar(title?.label);
                                }}
                                className={`${
                                  isTitleOpen || isTitleActive ? "subdrop" : ""
                                } ${
                                  isTitleActive ? "active" : ""
                                }`}
                              >
                                <i className={`ti ti-${title.icon} me-2`}></i>
                                <span className="custom-active-span">
                                  {title?.label}
                                  {/* {t()} */}
                                </span>
                                {title?.submenu && (
                                  <span className="menu-arrow" />
                                )}
                              </Link>
                              <ul
                                style={{
                                  display: isTitleOpen || isTitleActive ? "block" : "none",
                                }}
                              >
                                {title?.submenuItems?.map(
                                  (item:any, titleIndex:any) => {
                                    const isItemActive = hasActiveNestedChild(item, Location.pathname);
                                    
                                    // Subdrop shows if:
                                    // - For active items: show by default, unless manually toggled off (value is true in map)
                                    // - For non-active items: only if submenu is open
                                    const isSubdropToggledOff = activeLinksSubdropToggled.get(item?.link) === true;
                                    const shouldShowSubdrop = isItemActive
                                      ? !isSubdropToggledOff
                                      : subsidebar === item?.label;

                                    return (
                                      <li
                                        className="submenu submenu-two"
                                        key={titleIndex}
                                      >
                                        <Link
                                          to={item?.link}
                                          className={`${
                                            isItemActive ? "active" : ""
                                          } ${
                                            shouldShowSubdrop ? "subdrop" : ""
                                          }`}
                                          onClick={(e) => {
                                            if (isItemActive) {
                                              // For active links, prevent navigation and toggle subdrop
                                              e.preventDefault();
                                              toggleActiveLinkSubdrop(item?.link);
                                              // If item has submenu, also toggle submenu state
                                              if (item?.submenu) {
                                                toggleSubsidebar(item?.label);
                                              }
                                            } else if (item?.submenu) {
                                              // For non-active items with submenu, just toggle submenu
                                              e.preventDefault();
                                              toggleSubsidebar(item?.label);
                                            }
                                          }}
                                        >
                                          {item?.label}
                                          {item?.submenu && (
                                            <span className="menu-arrow inside-submenu" />
                                          )}
                                        </Link>
                                        <ul
                                          style={{
                                            display:
                                              subsidebar === item?.label
                                                ? "block"
                                                : "none",
                                          }}
                                        >
                                          {item?.submenuItems?.map(
                                            (items:any, subIndex:any) => {
                                              const isSubItemActive = hasActiveNestedChild(items, Location.pathname);
                                              
                                              // For active sub-items, subdrop is controlled by activeLinksSubdropToggled
                                              // For non-active sub-items, subdrop is controlled by subsidebar state
                                              const isSubItemSubdropToggledOff = activeLinksSubdropToggled.get(items?.link) === true;
                                              const shouldShowSubItemSubdrop = isSubItemActive
                                                ? !isSubItemSubdropToggledOff
                                                : subsidebar === items?.label;

                                              return (
                                                <li key={subIndex}>
                                                  <Link
                                                    to={items?.link}
                                                    className={`submenu-two ${
                                                      shouldShowSubItemSubdrop ? "subdrop" : ""
                                                    } ${
                                                      isSubItemActive ? "active" : ""
                                                    }`}
                                                    onClick={(e) => {
                                                      if (isSubItemActive) {
                                                        e.preventDefault();
                                                        toggleActiveLinkSubdrop(items?.link);
                                                      }
                                                    }}
                                                  >
                                                    {items?.label}
                                                  </Link>
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </li>
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <CollapsedSidebar /> */}
    </div>
  );
};

export default Sidebar;
