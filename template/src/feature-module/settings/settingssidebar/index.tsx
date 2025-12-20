import { useState, useEffect } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { Link, useLocation } from "react-router-dom";
import { SettingsSidebarData } from "../../../core/json/settings_sidebar_data";
import type { SettingsMenuItem } from "../../../core/json/settings_sidebar_data";
import { all_routes } from "../../../routes/all_routes";

const SettingsSideBar = (props: any) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]);

  // Auto-open menus when route matches
  useEffect(() => {
    const currentPath = location.pathname;
    const menusToOpen: string[] = [];
    const subMenusToOpen: string[] = [];

    SettingsSidebarData.forEach((menu) => {
      if (menu.submenuItems) {
        const hasActiveRoute = menu.submenuItems.some((item) => {
          if (item.link === currentPath) return true;
          // Special case for Language settings which has two routes
          if (item.label === "Language") {
            return (
              currentPath === item.link || currentPath === all_routes.languagesettingsweb
            );
          }
          if (item.submenu && item.submenuItems) {
            return item.submenuItems.some((subItem) => subItem.link === currentPath);
          }
          return false;
        });

        if (hasActiveRoute) {
          menusToOpen.push(menu.label);

          // Check for nested submenus
          menu.submenuItems.forEach((item) => {
            if (item.submenu && item.submenuItems) {
              const hasActiveSubRoute = item.submenuItems.some(
                (subItem) => subItem.link === currentPath
              );
              if (hasActiveSubRoute) {
                subMenusToOpen.push(item.label);
              }
            }
          });
        }
      }
    });

    // Use setTimeout to avoid synchronous setState in effect
    setTimeout(() => {
      if (menusToOpen.length > 0) {
        setOpenMenus(menusToOpen);
      }
      if (subMenusToOpen.length > 0) {
        setOpenSubMenus(subMenusToOpen);
      }
    }, 0);
  }, [location.pathname]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const toggleSubMenu = (label: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  const isMenuActive = (menu: SettingsMenuItem): boolean => {
    if (!menu.submenuItems) return false;
    return menu.submenuItems.some((item) => {
      if (item.link === location.pathname) return true;
      // Special case for Language settings which has two routes
      if (item.label === "Language") {
        return (
          location.pathname === item.link ||
          location.pathname === all_routes.languagesettingsweb
        );
      }
      if (item.submenu && item.submenuItems) {
        return item.submenuItems.some((subItem) => subItem.link === location.pathname);
      }
      return false;
    });
  };

  const isMenuItemActive = (item: SettingsMenuItem): boolean => {
    if (item.link === location.pathname) return true;
    // Special case for Language settings which has two routes
    if (item.label === "Language") {
      return (
        location.pathname === item.link ||
        location.pathname === all_routes.languagesettingsweb
      );
    }
    if (item.submenu && item.submenuItems) {
      return item.submenuItems.some((subItem) => subItem.link === location.pathname);
    }
    return false;
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, menu: SettingsMenuItem) => {
    if (menu.submenu) {
      e.preventDefault();
      toggleMenu(menu.label);
    }
  };

  const handleSubMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: SettingsMenuItem
  ) => {
    if (item.submenu) {
      e.preventDefault();
      toggleSubMenu(item.label);
    }
  };

  return (
    <div>
      <div className="settings-sidebar" id="sidebar2">
        <div className="sidebar-inner slimscroll">
          <Scrollbar
            style={{ marginRight: -5, height: 800 }}
            autoHide
            autoHeight
            autoHeightMin={400}
            {...props}
          >
            <div id="sidebar-menu5" className="sidebar-menu">
              <h4 className="fw-bold fs-18 mb-2 pb-2">Settings</h4>
              <ul>
                <li className="submenu-open">
                  <ul>
                    {SettingsSidebarData.map((menu, index) => (
                      <li className="submenu" key={index}>
                        <Link
                          to={menu.link || "#"}
                          onClick={(e) => handleMenuClick(e, menu)}
                          className={`${
                            isMenuActive(menu) ? "active" : ""
                          } ${openMenus.includes(menu.label) ? "subdrop" : ""}`}
                        >
                          <i className={`ti ti-${menu.icon} fs-18`}></i>
                          <span className="fs-14 fw-medium ms-2">{menu.label}</span>
                          {menu.submenu && <span className="menu-arrow" />}
                        </Link>
                        {menu.submenu && menu.submenuItems && (
                          <ul
                            style={{
                              display: openMenus.includes(menu.label) ? "block" : "none",
                            }}
                          >
                            {menu.submenuItems.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className={item.submenu ? "submenu submenu-two" : ""}
                              >
                                {item.submenu ? (
                                  <>
                                    <Link
                                      to="#"
                                      onClick={(e) => handleSubMenuClick(e, item)}
                                      className={`submenu-two ${
                                        isMenuItemActive(item) ? "active" : ""
                                      } ${openSubMenus.includes(item.label) ? "subdrop" : ""}`}
                                    >
                                      {item.label}
                                      <span className="menu-arrow inside-submenu"></span>
                                    </Link>
                                    <ul
                                      style={{
                                        display: openSubMenus.includes(item.label)
                                          ? "block"
                                          : "none",
                                      }}
                                    >
                                      {item.submenuItems?.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link
                                            to={subItem.link || "#"}
                                            className={
                                              location.pathname === subItem.link ? "active" : ""
                                            }
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </>
                                ) : (
                                  <Link
                                    to={item.link || "#"}
                                    className={
                                      location.pathname === item.link ||
                                      (item.label === "Language" &&
                                        location.pathname === all_routes.languagesettingsweb)
                                        ? "active"
                                        : ""
                                    }
                                  >
                                    {item.label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default SettingsSideBar;
