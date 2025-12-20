import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import React from "react";
import CommonFooter from "../../components/footer/commonFooter";
import { img_01, img_02, img_03, img_04, img_05 } from "../../utils/imagepath";

const Lightboxes = () => {
  const [open1, setOpen1] = React.useState(false);
  const [index1, setIndex1] = React.useState(0);
  const [open2, setOpen2] = React.useState(false);
  const [index2, setIndex2] = React.useState(0);

  const slides1 = [
    { src: img_01 },
    { src: img_02 },
  ];

  const slides2 = [
    { 
      src: img_03,
      title: "Title 01",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
    { 
      src: img_04,
      title: "Title 02",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
    { 
      src: img_05,
      title: "Title 03",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Light Box</h4>
          </div>
        </div>
        <div className="row">
          {/* Lightbox */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single Image Lightbox</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    index={index1}
                    slides={slides1}
                  />
                  <div className="col-md-4 mb-2 mb-md-0">
                    <div
                      onClick={() => {
                        setIndex1(0);
                        setOpen1(true);
                      }}
                      className="image-popup"
                      style={{ cursor: "pointer" }}
                    >
                     <img
                        src={img_01}
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <div
                      onClick={() => {
                        setIndex1(1);
                        setOpen1(true);
                      }}
                      className="image-popup"
                      style={{ cursor: "pointer" }}
                    >
                     <img
                        src={img_02}
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image with Description</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                  <Lightbox
                    open={open2}
                    close={() => setOpen2(false)}
                    index={index2}
                    slides={slides2}
                  />
                    <div className="col-md-4 mb-2 mb-md-0">
                      <div
                        onClick={() => {
                          setIndex2(0);
                          setOpen2(true);
                        }}
                        className="image-popup-desc"
                        style={{ cursor: "pointer" }}
                      >
                       <img
                          src={img_03}
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                     </div>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <div
                        onClick={() => {
                          setIndex2(1);
                          setOpen2(true);
                        }}
                        className="image-popup-desc"
                        style={{ cursor: "pointer" }}
                      >
                       <img
                          src={img_04}
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                     </div>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <div
                        onClick={() => {
                          setIndex2(2);
                          setOpen2(true);
                        }}
                        className="image-popup-desc"
                        style={{ cursor: "pointer" }}
                      >
                       <img
                          src={img_05}
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Lightbox */}
          </>
        </div>
      </div>
      <CommonFooter/>
    </div>
  );
};

export default Lightboxes;
