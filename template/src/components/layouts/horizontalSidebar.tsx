import React, { useEffect, useRef, useState } from "react";
import { Link,  useLocation } from 'react-router-dom';
import { SidebarData1 } from "../../core/json/sidebar_dataone";

const HorizontalSidebar = () => {
 const [opendSubMenu, setOpendSubMenu] = useState([null, null]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // useLocation returns a Location object

  const showMenu = (title: any) => {
    setOpendSubMenu((prevState) => (
      prevState[0] === title ? [null, null] : [title, null]
    ));
  };

  const showSubMenu = (title: any) => {
    setOpendSubMenu((prevState) => (
      prevState[1] === title ? [prevState[0], null] : [prevState[0], title]
    ));
  };

  const handleClickOutside = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpendSubMenu([null, null]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActiveMainMenu = (mainMenus: any) => {
    const currentPath = location.pathname || '';

    return mainMenus.route && currentPath.split('/')[1] === mainMenus.route.split('/')[1] ||
      mainMenus.subRoutes?.some((subMenu: { route: string; }) => subMenu.route && currentPath.split('/')[1] === subMenu.route.split('/')[1]);
  };

  const isActiveSubMenu = (mainMenus: any) => {
    const currentPath = location.pathname || '';
    return mainMenus.route && currentPath.split('/')[1] === mainMenus.route.split('/')[1] ||
      mainMenus.subRoutes?.some((subMenu: { route: string; }) => subMenu.route && currentPath.split('/')[1] === subMenu.route.split('/')[1]);
  };

  return (
  <div className="sidebar sidebar-horizontal" id="horizontal-menu" ref={sidebarRef}>
      <div className="sidebar-menu" id="sidebar-menu-3">
        <div className="main-menu">
          <ul className="nav">
            {SidebarData1.map((mainTittle, mainIndex) => (
              <li className="submenu" key={mainIndex}>
                <a
                  className={`${opendSubMenu[0] === mainTittle.tittle || isActiveMainMenu(mainTittle) ? 'active' : ''}`}
                  onClick={() => showMenu(mainTittle.tittle)}
                >
                  {mainTittle.tittle === 'Components' ? (
                    <i className="feather icon-layers"></i>
                  ) : (
                    <i className={`ti ti-${mainTittle.icon} me-2`}></i>
                  )}
                  <span>{mainTittle.tittle}</span>
                  <span className="menu-arrow"></span>
                </a>
                <ul className={`submenus-two ${opendSubMenu[0] === mainTittle.tittle ? 'd-block' : 'd-none'}`}>
                  {mainTittle.subRoutes.map((mainMenus, menuIndex) => (
                    <React.Fragment key={menuIndex}>
                      {!mainMenus.hasSubRoute && (
                        <li>
                          <Link
                            to={('route' in mainMenus && mainMenus.route) || '#'}
                            className={isActiveMainMenu(mainMenus) ? 'active' : ''}
                          >
                            <span>{mainMenus.tittle}</span>
                          </Link>
                        </li>
                      )}
                      {mainMenus.hasSubRoute && (
                        <li className="submenu">
                          <a
                            className={`${isActiveSubMenu(mainMenus) ? 'active' : ''}`}
                            onClick={() => showSubMenu(mainMenus.tittle)}
                          >
                            <span>{mainMenus.tittle}</span>
                            <span className="menu-arrow"></span>
                          </a>
                          <ul
                            className={`submenus-two ${opendSubMenu[1] === mainMenus.tittle ? 'd-block' : 'd-none'}`}
                          >
                            {mainMenus.subRoutes?.map((subDropMenus, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subDropMenus.route || "#"} className={isActiveSubMenu(subDropMenus) ? 'active' : ''}>
                                  {subDropMenus.tittle}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSidebar;