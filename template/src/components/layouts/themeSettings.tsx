import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ColorPicker, type ColorPickerProps, type GetProp } from 'antd';
import type { ColorFormatType } from 'antd/es/color-picker/interface';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  resetAllMode,
  setDataColor,
  setDataColorAll,
  setDataLayout,
  setDataSidebar,
  setDataSidebarAll,
  setDataSidebarBg,
  setDataTheme,
  setDataTopbarAll,
  setDataTopBarColorAll,
  setDataWidth,
  setRtl,
  setTopBarColor,
} from "../../core/redux/themeSettingSlice";
import { all_routes } from "../../routes/all_routes";


  type Color = Extract<
  GetProp<ColorPickerProps, "value">,
  string | { cleared: any }
>;


const ThemeSettings = () => {
  const buyNow = () => {
    window.open(
      "https://themeforest.net/item/dreamspos-pos-inventory-management-admin-dashboard-template/38834413?s_rank=13",
      "_blank"
    );
  };

  const dispatch = useDispatch();

  // Redux state selectors
  const dataLayout = useSelector((state:any) => state.themeSetting.dataLayout);
  const dataWidth = useSelector((state:any) => state.themeSetting.dataWidth);
  const dataTopBar = useSelector((state:any) => state.themeSetting.dataTopBar);
  const dataTopBarColor = useSelector(
    (state:any) => state.themeSetting.dataTopBarColor
  );
  const dataTheme = useSelector((state:any) => state.themeSetting.dataTheme);
  const dataSidebarAll = useSelector((state:any) => state.themeSetting.dataSidebarAll);
  const dataColorAll = useSelector((state:any) => state.themeSetting.dataColorAll);
  const dataTopBarColorAll = useSelector((state:any) => state.themeSetting.dataTopBarColorAll);
  const dataTopbarAll = useSelector((state:any) => state.themeSetting.dataTopbarAll);
  const dataSidebar = useSelector((state:any) => state.themeSetting.dataSidebar);
  const dataSidebarBg = useSelector((state:any) => state.themeSetting.dataSidebarBg);
  const dataTopbarBg = useSelector((state:any) => state.themeSetting.dataTopbarBg);
  const dataColor = useSelector((state:any) => state.themeSetting.dataColor);


  const [colorRgb, setColorRgb] = useState<Color>(`rgb(${dataSidebarAll})`);
  const [colorRgb2, setColorRgb2] = useState<Color>(`rgb(${dataTopbarAll})`);
  const [colorRgb3, setColorRgb3] = useState<Color>(`rgb(${dataTopBarColorAll})`);
   const [colorRgb4, setColorRgb4] = useState<Color>(`rgb(${dataColorAll})`);
  const [formatRgb, setFormatRgb] = useState<ColorFormatType>("rgb");

  // RGB String calculations
  const rgbString = React.useMemo(
    () => (typeof colorRgb === "string" ? colorRgb : colorRgb?.toRgbString()),
    [colorRgb]
  );

  const rgbString2 = React.useMemo(
    () => (typeof colorRgb2 === "string" ? colorRgb2 : colorRgb2?.toRgbString()),
    [colorRgb2]
  );

  const rgbString3 = React.useMemo(
    () => (typeof colorRgb3 === "string" ? colorRgb3 : colorRgb3?.toRgbString()),
    [colorRgb3]
  );

  const rgbString4 = React.useMemo(
    () => (typeof colorRgb4 === "string" ? colorRgb4 : colorRgb4?.toRgbString()),
    [colorRgb4]
  );

  // Dispatch updates when color values change
  useEffect(() => {
    dispatch(setDataSidebarAll(rgbString.replace(/rgb\(|\)/g, "").trim()));
    dispatch(setDataTopbarAll(rgbString2.replace(/rgb\(|\)/g, "").trim()));
    dispatch(setDataTopBarColorAll(rgbString3.replace(/rgb\(|\)/g, "").trim()));
    dispatch(setDataColorAll(rgbString4.replace(/rgb\(|\)/g, "").trim()));
  }, [dispatch, rgbString, rgbString2, rgbString3, rgbString4]);

  // Event handlers for dispatching actions
  const handleLayoutChange = (layout:any) => {
    dispatch(setDataLayout(layout));
  };

  const handleLayoutWidthChange = (layout:any) => {
    dispatch(setDataWidth(layout));
  };


  const handleTopBarColorChange = (color:any) => {
    dispatch(setTopBarColor(color));
  };


  const handleDataThemeChange = (theme:any) => {
    dispatch(setDataTheme(theme));
  };

  const handleDataSidebarChange = (theme:any) => {
    dispatch(setDataSidebar(theme));
  };

  const handleDataSidebarBgChange = (bg:any) => {
    dispatch(setDataSidebarBg(bg));
  };



  const handleDataColorChange = (bg:any) => {
    dispatch(setDataColor(bg));
  };


  const handleReset = () => {
    dispatch(resetAllMode());
  };
  useEffect(() => {
    // For layout-hovered, don't set data-layout on documentElement, add class to body instead
    if (dataLayout === "layout-hovered") {
      // Remove data-layout attribute from documentElement (it should not be on html element for layout-hovered)
      document.documentElement.removeAttribute("data-layout");
      // Add layout-hovered class to body
      if (!document.body.classList.contains("layout-hovered")) {
        document.body.classList.add("layout-hovered");
      }
      // Remove layout-boxed class if it exists
      document.body.classList.remove("layout-boxed");
      // Add mini-sidebar class to body (same way as expand-menu)
      document.body.classList.add("mini-sidebar");
    } else if (dataLayout === "mini" && dataWidth === "box") {
      // For layout-boxed (mini + box), don't set data-layout on documentElement, add class to body instead
      document.documentElement.removeAttribute("data-layout");
      // Add layout-boxed class to body
      if (!document.body.classList.contains("layout-boxed")) {
        document.body.classList.add("layout-boxed");
      }
      // Remove layout-hovered class if it exists
      document.body.classList.remove("layout-hovered");
      // Add mini-sidebar class to body (same way as expand-menu)
      document.body.classList.add("mini-sidebar");
    } else {
      // Remove both layout-hovered and layout-boxed classes from body if they exist
      document.body.classList.remove("layout-hovered");
      document.body.classList.remove("layout-boxed");
      // Set data-layout normally for other layouts
      document.documentElement.setAttribute("data-layout", dataLayout);
      // Handle mini-sidebar class on body tag for other layouts (same way as expand-menu)
      if (dataLayout === "mini" || dataWidth === "box") {
        document.body.classList.add("mini-sidebar");
      } else {
        document.body.classList.remove("mini-sidebar");
      }
    }
    document.documentElement.setAttribute("data-width", dataWidth);
    document.documentElement.setAttribute("data-sidebar", dataSidebar);
    document.documentElement.setAttribute("data-theme", dataTheme);
    document.documentElement.setAttribute("data-topbar", dataTopBar);
    document.documentElement.setAttribute("data-topbarcolor", dataTopBarColor);
    document.documentElement.setAttribute("data-color", dataColor);
    document.body.setAttribute("data-sidebarbg", dataSidebarBg);
    document.body.setAttribute("data-topbarbg", dataTopbarBg);
    
    // Ensure mini-sidebar class is always added to body for layout-hovered and layout-boxed
    // This should be done at the end to ensure it persists regardless of other operations
    if (dataLayout === "layout-hovered" || (dataLayout === "mini" && dataWidth === "box")) {
      document.body.classList.add("mini-sidebar");
    }
    
    setColorRgb(`rgb(${dataSidebarAll})`)
    setColorRgb2(`rgb(${dataTopbarAll})`)
    setColorRgb3(`rgb(${dataTopBarColorAll})`)
    setColorRgb4(`rgb(${dataColorAll})`)
  }, [dataLayout, dataWidth, dataSidebar, dataSidebarAll, dataTheme, dataSidebarBg, dataTopBarColor, dataTopBar, dataTopbarBg, dataColor, dataColorAll, dataTopBarColorAll, dataTopbarAll])
  return (
    <>

      <>
        <div className="sidebar-contact ">
          <div
            className="toggle-theme"
            data-bs-toggle="offcanvas"
            data-bs-target="#theme-setting"
          >
            <i className="fa fa-cog fa-w-16 fa-spin" />
          </div>
        </div>
        <div
          className="sidebar-themesettings offcanvas offcanvas-end"
          id="theme-setting"
        >
          <div className="offcanvas-header d-flex align-items-center justify-content-between bg-dark">
            <div>
              <h3 className="mb-1 text-white">Theme Customizer</h3>
              <p className="text-light">Choose your themes &amp; layouts etc.</p>
            </div>
            <Link
              to="#"
              className="custom-btn-close d-flex align-items-center justify-content-center text-white"
              data-bs-dismiss="offcanvas"
            >
              <i className="ti ti-x" />
            </Link>
          </div>
          <div className="themecard-body offcanvas-body">
            <div
              className="accordion accordion-customicon1 accordions-items-seperate"
              id="settingtheme"
            >
              <div className="accordion-item border px-3 layout-select">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark bg-transparent fs-16 px-0 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#layoutsetting"
                    aria-expanded="true"
                    aria-controls="collapsecustomicon1One"
                  >
                    Select Layouts
                  </button>
                </h2>
                <div id="layoutsetting" className="accordion-collapse collapse show">
                  <div className="accordion-body border-top px-0 py-3 pb-0">
                    <div className="row gx-3">
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="defaultLayout"
                            defaultValue="default"
                            checked={dataLayout === "default" ? true : false}
                            onChange={() => handleLayoutChange("default")}
                          />
                          <label htmlFor="defaultLayout">
                            <span className="d-block mb-2 layout-img">
                              <img src="/src/assets/img/theme/default.svg" alt="img" />
                            </span>
                            <span className="layout-type">Default</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="miniLayout"
                            defaultValue="mini"
                            checked={dataLayout === "mini" ? true : false}
                            onChange={() => handleLayoutChange("mini")}
                          />
                          <label htmlFor="miniLayout">
                            <span className="d-block mb-2 layout-img">
                              <img src="/src/assets/img/theme/mini.svg" alt="img" />
                            </span>
                            <span className="layout-type">Mini</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="twocolumnLayout"
                            defaultValue="twocolumn"
                            checked={dataLayout === "twocolumn" ? true : false}
                            onChange={() => handleLayoutChange("twocolumn")}
                          />
                          <label htmlFor="twocolumnLayout">
                            <span className="d-block mb-2 layout-img">
                              <img src="/src/assets/img/theme/two-column.svg" alt="img" />
                            </span>
                            <span className="layout-type">Two Column</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="horizontalLayout"
                            defaultValue="horizontal"
                            checked={dataLayout === "horizontal" ? true : false}
                            onChange={() => handleLayoutChange("horizontal")}
                          />
                          <label htmlFor="horizontalLayout">
                            <span className="d-block mb-2 layout-img">
                              <img src="/src/assets/img/theme/horizontal.svg" alt="img" />
                            </span>
                            <span className="layout-type">Horizontal</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="detachedLayout"
                            defaultValue="detached"
                            checked={dataLayout === "detached" ? true : false}
                            onChange={() => handleLayoutChange("detached")}
                          />
                          <label htmlFor="detachedLayout">
                            <span className="d-block mb-2 layout-img">
                              <img src="/src/assets/img/theme/detached.svg" alt="img" />
                            </span>
                            <span className="layout-type">Detached</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="theme-layout mb-3">
                          <input
                            type="radio"
                            name="LayoutTheme"
                            id="without-headerLayout"
                            defaultValue="without-header"
                            checked={dataLayout === "without-header" ? true : false}
                            onChange={() => handleLayoutChange("without-header")}
                          />
                          <label htmlFor="without-headerLayout">
                            <span className="d-block mb-2 layout-img">
                              <img
                                src="src/assets/img/theme/without-header.svg"
                                alt="img"
                              />
                            </span>
                            <span className="layout-type">Without Header</span>
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-4">
                  <div className="theme-layout mb-3">
                    <input
                      type="radio"
                      name="LayoutTheme"
                      id="horizontal-overlayLayout"
                      defaultValue="horizontal-overlay"
                      checked={dataLayout === "horizontal-overlay" ? true : false}
                        onChange={() => handleLayoutChange("horizontal-overlay")}
                    />
                    <label htmlFor="horizontal-overlayLayout">
                      <span className="d-block mb-2 layout-img">
                        <img src="/src/assets/img/theme/overlay.svg" alt="img" />
                      </span>
                      <span className="layout-type">Overlay</span>
                    </label>
                  </div>
                </div> */}
                      <div className="col-4" >
                        <Link to={all_routes.RTL} onClick={() => dispatch(setRtl('layout-mode-rtl'))} className="theme-layout mb-3" >
                          <span className="d-block mb-2 layout-img">
                            <img src="/src/assets/img/theme/rtl.svg" alt="img" />
                          </span>
                          <span className="layout-type d-block">RTL</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border px-3 layout-select">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 bg-transparent px-0 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarsetting"
                    aria-expanded="true"
                  >
                    Layout Width
                  </button>
                </h2>
                <div id="sidebarsetting" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0 py-3 border-top">
                    <div className="d-flex align-items-center">
                      <div className="theme-width m-1 me-2">
                        <input
                          type="radio"
                          name="width"
                          id="fluidWidth"
                          defaultValue="fluid"
                          checked={dataWidth === "fluid" ? true : false}
                          onChange={() => handleLayoutWidthChange("fluid")}
                        />
                        <label htmlFor="fluidWidth" className="d-block rounded fs-12">
                          <i className="ti ti-layout-list me-1" />
                          Fluid Layout
                        </label>
                      </div>
                      <div className="theme-width m-1">
                        <input
                          type="radio"
                          name="width"
                          id="boxWidth"
                          defaultValue="box"
                          checked={dataWidth === "box" ? true : false}
                          onChange={() => handleLayoutWidthChange("box")}
                        />
                        <label htmlFor="boxWidth" className="d-block rounded fs-12">
                          <i className="ti ti-layout-distribute-horizontal me-1" />
                          Boxed Layout
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border px-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 px-0 py-3 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#colorsetting"
                    aria-expanded="true"
                  >
                    Top Bar Color
                  </button>
                </h2>
                <div id="colorsetting" className="accordion-collapse collapse show">
                  <div className="accordion-body pb-1 px-0 py-3 border-top">
                    <p className="mb-2 text-gray-9">Solid Colors</p>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="whiteTopbar"
                          defaultValue="white"
                          checked={dataTopBar === "white" ? true : false}
                          onChange={() => handleTopBarColorChange("white")}
                        />
                        <label htmlFor="whiteTopbar" className="bg-white" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="darkaquaTopbar"
                          defaultValue="darkaqua"
                          checked={dataTopBar === "darkaqua" ? true : false}
                          onChange={() => handleTopBarColorChange("darkaqua")}
                        />
                        <label htmlFor="darkaquaTopbar" className="topbar-bg-1" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="whiterockTopbar"
                          defaultValue="whiterock"
                          checked={dataTopBar === "whiterock" ? true : false}
                          onChange={() => handleTopBarColorChange("whiterock")}
                        />
                        <label htmlFor="whiterockTopbar" className="topbar-bg-2" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="rockblueTopbar"
                          defaultValue="rockblue"
                          checked={dataTopBar === "rockblue" ? true : false}
                          onChange={() => handleTopBarColorChange("rockblue")}
                        />
                        <label htmlFor="rockblueTopbar" className="topbar-bg-3" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="bluehazeTopbar"
                          defaultValue="bluehaze"
                          checked={dataTopBar === "bluehaze" ? true : false}
                          onChange={() => handleTopBarColorChange("bluehaze")}
                        />
                        <label htmlFor="bluehazeTopbar" className="topbar-bg-4" />
                      </div>
                      <div className={`theme-colorselect box-style position-relative theme-colorselect-rounded mb-3 mt-0 ${dataTopBar === 'all' ? 'active' : ''}`} onClick={() => handleTopBarColorChange('all')}>
                        <div className="select-color position-absolute"><i className="ti ti-palette"></i></div>
                        <ColorPicker
                          format={formatRgb}
                          value={colorRgb2}
                          onChange={setColorRgb2}
                          onFormatChange={(format) => {
                            if (format) setFormatRgb(format);
                          }}
                        />
                      </div>
                    </div>
                    <p className="mb-2 text-gray-9">Gradient Colors</p>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-7"
                          defaultValue="topbarcolorseven"
                          checked={dataTopBar === "topbarcolorseven" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolorseven")}
                        />
                        <label htmlFor="topbar-color-7" className="bg-sidebar-color-7" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-8"
                          defaultValue="topbarcoloreight"
                          checked={dataTopBar === "topbarcoloreight" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcoloreight")}
                        />
                        <label htmlFor="topbar-color-8" className="bg-sidebar-color-8" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-9"
                          defaultValue="topbarcolornine"
                          checked={dataTopBar === "topbarcolornine" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolornine")}
                        />
                        <label htmlFor="topbar-color-9" className="bg-sidebar-color-9" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-10"
                          defaultValue="topbarcolorten"
                          checked={dataTopBar === "topbarcolorten" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolorten")}
                        />
                        <label htmlFor="topbar-color-10" className="bg-sidebar-color-10" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-11"
                          defaultValue="topbarcoloreleven"
                          checked={dataTopBar === "topbarcoloreleven" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcoloreleven")}
                        />
                        <label htmlFor="topbar-color-11" className="bg-sidebar-color-11" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-12"
                          defaultValue="topbarcolortwelve"
                          checked={dataTopBar === "topbarcolortwelve" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolortwelve")}
                        />
                        <label htmlFor="topbar-color-12" className="bg-sidebar-color-12" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-13"
                          defaultValue="topbarcolorthirteen"
                          checked={dataTopBar === "topbarcolorthirteen" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolorthirteen")}
                        />
                        <label htmlFor="topbar-color-13" className="bg-sidebar-color-13" />
                      </div>
                      <div className="theme-colorselect theme-colorselect-rounded mb-3 me-3">
                        <input
                          type="radio"
                          name="topbar"
                          id="topbar-color-14"
                          defaultValue="topbarcolorfourteen"
                          checked={dataTopBar === "topbarcolorfourteen" ? true : false}
                          onChange={() => handleTopBarColorChange("topbarcolorfourteen")}
                        />
                        <label htmlFor="topbar-color-14" className="bg-sidebar-color-14" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border px-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 px-0 py-3 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarsetting"
                    aria-expanded="true"
                  >
                    Sidebar Color
                  </button>
                </h2>
                <div id="sidebarsetting" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0 py-3 border-top">
                    <p className="mb-2 text-gray-9">Solid Colors</p>
                    <div className="d-flex align-items-center">
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="lightSidebar"
                          defaultValue="light"
                          checked={dataSidebar === "light" ? true : false}
                          onChange={() => handleDataSidebarChange("light")}
                        />
                        <label
                          htmlFor="lightSidebar"
                          className="d-block mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolorSidebar"
                          defaultValue="sidebarcolorone"
                          checked={dataSidebar === "sidebarcolorone" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorone")}
                        />
                        <label
                          htmlFor="bgcolorSidebar"
                          className="d-block bg-sidebar-color-1 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor2Sidebar"
                          defaultValue="sidebarcolortwo"
                          checked={dataSidebar === "sidebarcolortwo" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolortwo")}
                        />
                        <label
                          htmlFor="bgcolor2Sidebar"
                          className="d-block bg-sidebar-color-2 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor3Sidebar"
                          defaultValue="sidebarcolorthree"
                          checked={dataSidebar === "sidebarcolorthree" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorthree")}
                        />
                        <label
                          htmlFor="bgcolor3Sidebar"
                          className="d-block bg-sidebar-color-3 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor4Sidebar"
                          defaultValue="sidebarcolorfour"
                          checked={dataSidebar === "sidebarcolorfour" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorfour")}
                        />
                        <label
                          htmlFor="bgcolor4Sidebar"
                          className="d-block bg-sidebar-color-4 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor5Sidebar"
                          defaultValue="sidebarcolorfive"
                          checked={dataSidebar === "sidebarcolorfive" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorfive")}
                        />
                        <label
                          htmlFor="bgcolor5Sidebar"
                          className="d-block bg-sidebar-color-5 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor6Sidebar"
                          defaultValue="sidebarcolorsix"
                          checked={dataSidebar === "sidebarcolorsix" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorsix")}
                        />
                        <label
                          htmlFor="bgcolor6Sidebar"
                          className="d-block bg-sidebar-color-6 mb-2"
                        ></label>
                      </div>

                      <div className={`theme-colorselect oval-style position-relative m-1 mt-0 ${dataSidebar === 'all' ? 'active' : ''}`} onClick={() => handleDataSidebarChange('all')}>
                        <div className="select-color position-absolute"><i className="ti ti-palette"></i></div>
                        <ColorPicker
                          format={formatRgb}
                          value={colorRgb}
                          onChange={setColorRgb}
                           onFormatChange={(format) => {
                            if (format) setFormatRgb(format);
                          }}
                        />
                      </div>
                    </div>
                    <p className="mb-2 text-gray-9">Gradient Colors</p>
                    <div className="d-flex align-items-center">
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor7Sidebar"
                          defaultValue="sidebarcolorseven"
                          checked={dataSidebar === "sidebarcolorseven" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorseven")}
                        />
                        <label
                          htmlFor="bgcolor7Sidebar"
                          className="d-block bg-sidebar-color-7 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor8Sidebar"
                          defaultValue="sidebarcoloreight"
                          checked={dataSidebar === "sidebarcoloreight" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcoloreight")}
                        />
                        <label
                          htmlFor="bgcolor8Sidebar"
                          className="d-block bg-sidebar-color-8 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor9Sidebar"
                          defaultValue="sidebarcolornine"
                          checked={dataSidebar === "sidebarcolornine" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolornine")}
                        />
                        <label
                          htmlFor="bgcolor9Sidebar"
                          className="d-block bg-sidebar-color-9 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor10Sidebar"
                          defaultValue="sidebarcolorten"
                          checked={dataSidebar === "sidebarcolorten" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorten")}
                        />
                        <label
                          htmlFor="bgcolor10Sidebar"
                          className="d-block bg-sidebar-color-10 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor11Sidebar"
                          defaultValue="sidebarcoloreleven"
                          checked={dataSidebar === "sidebarcoloreleven" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcoloreleven")}
                        />
                        <label
                          htmlFor="bgcolor11Sidebar"
                          className="d-block bg-sidebar-color-11 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor12Sidebar"
                          defaultValue="sidebarcolortwelve"
                          checked={dataSidebar === "sidebarcolortwelve" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolortwelve")}
                        />
                        <label
                          htmlFor="bgcolor12Sidebar"
                          className="d-block bg-sidebar-color-12 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor13Sidebar"
                          defaultValue="sidebarcolorthirteen"
                          checked={dataSidebar === "sidebarcolorthirteen" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorthirteen")}
                        />
                        <label
                          htmlFor="bgcolor13Sidebar"
                          className="d-block bg-sidebar-color-13 mb-2"
                        ></label>
                      </div>
                      <div className="theme-colorselect m-1 me-2">
                        <input
                          type="radio"
                          name="sidebar"
                          id="bgcolor14Sidebar"
                          defaultValue="sidebarcolorfourteen"
                          checked={dataSidebar === "sidebarcolorfourteen" ? true : false}
                          onChange={() => handleDataSidebarChange("sidebarcolorfourteen")}
                        />
                        <label
                          htmlFor="bgcolor14Sidebar"
                          className="d-block bg-sidebar-color-14 mb-2"
                        ></label>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border px-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 px-0 py-3 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#modesetting"
                    aria-expanded="true"
                  >
                    Theme Mode
                  </button>
                </h2>
                <div id="modesetting" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0 py3 border-top">
                    <div className="d-flex align-items-center">
                      <div className="theme-mode flex-fill text-center w-100 me-3">
                        <input
                          type="radio"
                          name="theme"
                          id="lightTheme"
                          defaultValue="light"
                          checked={dataTheme === "light" ? true : false}
                          onChange={() => handleDataThemeChange("light")}
                        />
                        <label
                          htmlFor="lightTheme"
                          className="rounded fw-medium w-100"
                        >
                          <span className="d-inline-flex rounded me-2">
                            <i className="ti ti-sun-filled" />
                          </span>
                          Light
                        </label>
                      </div>
                      <div className="theme-mode flex-fill text-center w-100 me-3">
                        <input
                          type="radio"
                          name="theme"
                          id="darkTheme"
                          defaultValue="dark"
                          checked={dataTheme === "dark" ? true : false}
                          onChange={() => handleDataThemeChange("dark")}
                        />
                        <label
                          htmlFor="darkTheme"
                          className="rounded fw-medium w-100"
                        >
                          <span className="d-inline-flex rounded me-2">
                            <i className="ti ti-moon-filled" />
                          </span>
                          Dark
                        </label>
                      </div>
                      <div className="theme-mode flex-fill text-center w-100 me-3">
                        <input
                          type="radio"
                          name="theme"
                          id="system"
                          defaultValue="system"
                          checked={dataTheme === "system" ? true : false}
                          onChange={() => handleDataThemeChange("system")}
                        />
                        <label
                          htmlFor="system"
                          className="rounded fw-medium w-100"
                        >
                          <span className="d-inline-flex rounded me-2">
                            <i className="ti ti-device-laptop" />
                          </span>
                          System
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item border px-3 layout-select">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 px-0 py-3 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarbgsetting"
                    aria-expanded="true"
                  >
                    Sidebar Background
                  </button>
                </h2>
                <div
                  id="sidebarbgsetting"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pb-1 px-0 py-3 border-top">
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg1"
                          defaultValue="sidebarbg1"
                          checked={dataSidebarBg === "sidebarbg1" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarbg1")}
                        />
                        <label htmlFor="sidebarBg1" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-01.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg2"
                          defaultValue="sidebarbg2"
                          checked={dataSidebarBg === "sidebarbg2" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarbg2")}
                        />
                        <label htmlFor="sidebarBg2" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-02.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg3"
                          defaultValue="sidebarbg3"
                          checked={dataSidebarBg === "sidebarbg3" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarbg3")}
                        />
                        <label htmlFor="sidebarBg3" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-03.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg4"
                          defaultValue="sidebarbg4"
                          checked={dataSidebarBg === "sidebarbg4" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarbg4")}
                        />
                        <label htmlFor="sidebarBg4" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-04.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg5"
                          defaultValue="sidebarbg5"
                          checked={dataSidebarBg === "sidebarbg5" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarbg5")}
                        />
                        <label htmlFor="sidebarBg5" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-05.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                      <div className="theme-sidebarbg me-3 mb-3">
                        <input
                          type="radio"
                          name="sidebarbg"
                          id="sidebarBg6"
                          defaultValue="sidebarBg6"
                          checked={dataSidebarBg === "sidebarBg6" ? true : false}
                          onChange={() => handleDataSidebarBgChange("sidebarBg6")}
                        />
                        <label htmlFor="sidebarBg6" className="d-block rounded">
                          <img
                            src="src/assets/img/theme/sidebar-bg-06.svg"
                            alt="img"
                            className="rounded"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border px-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button text-dark fs-16 px-0 py-3 bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarcolor"
                    aria-expanded="true"
                  >
                    Theme Colors
                  </button>
                </h2>
                <div id="sidebarcolor" className="accordion-collapse collapse show ">
                  <div className="accordion-body pb-2 px-0 py-3 border-top">
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="primaryColor"
                          defaultValue="primary"
                          checked={dataColor === "primary" ? true : false}
                          onChange={() => handleDataColorChange("primary")}
                        />
                        <label htmlFor="primaryColor" className="primary-clr" />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="brightblueColor"
                          defaultValue="brightblue"
                          checked={dataColor === "brightblue" ? true : false}
                          onChange={() => handleDataColorChange("brightblue")}
                        />
                        <label htmlFor="brightblueColor" className="theme-color-1" />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="lunargreenColor"
                          defaultValue="lunargreen"
                          checked={dataColor === "lunargreen" ? true : false}
                          onChange={() => handleDataColorChange("lunargreen")}
                        />
                        <label htmlFor="lunargreenColor" className="theme-color-2" />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="lavendarColor"
                          defaultValue="lavendar"
                          checked={dataColor === "lavendar" ? true : false}
                          onChange={() => handleDataColorChange("lavendar")}
                        />
                        <label htmlFor="lavendarColor" className="theme-color-3" />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="magentaColor"
                          defaultValue="magenta"
                          checked={dataColor === "magenta" ? true : false}
                          onChange={() => handleDataColorChange("magenta")}
                        />
                        <label htmlFor="magentaColor" className="theme-color-4" />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="chromeyellowColor"
                          defaultValue="chromeyellow"
                          checked={dataColor === "chromeyellow" ? true : false}
                          onChange={() => handleDataColorChange("chromeyellow")}
                        />
                        <label
                          htmlFor="chromeyellowColor"
                          className="theme-color-5"
                        />
                      </div>
                      <div className="theme-colorsset me-2 mb-2">
                        <input
                          type="radio"
                          name="color"
                          id="orangeColor"
                          defaultValue="orange"
                          checked={dataColor === "orange" ? true : false}
                          onChange={() => handleDataColorChange("orange")}
                        />
                        <label
                          htmlFor="orangeColor"
                          className="theme-color-6"
                        />
                      </div>
                      <div className={`theme-colorsset round-style select-theme-color position-relative  mb-2 ${dataColor === 'all' ? 'active' : ''}`} onClick={() => handleDataColorChange('all')}>
                        <div className="select-color position-absolute"><i className="ti ti-palette"></i></div>
                        <ColorPicker
                          format={formatRgb}
                          value={colorRgb4}
                          onChange={setColorRgb4}
                          onFormatChange={(format) => {
                            if (format) setFormatRgb(format);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 pt-0">
            <div className="row gx-3">
              <div className="col-6">
                <Link
                  to="#"
                  id="resetbutton"
                  className="btn btn-light close-theme w-100"
                  onClick={handleReset}
                >
                  <i className="ti ti-restore me-1" />
                  Reset
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to="#"
                  className="btn btn-primary w-100"
                  onClick={buyNow}
                  data-bs-dismiss="offcanvas"
                >
                  <i className="ti ti-shopping-cart-plus me-1" />
                  Buy Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>



    </>
  );
};

export default ThemeSettings;
