import React from "react";
import CommonFooter from "../../components/footer/commonFooter";

import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  media15,
  media16,
  media17,
  media18,
  media19,
  media20,
  media21,
  media22,
  media23,
  media24,
  media25,
  media26,
} from "../../utils/imagepath";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";

const Searchlist = () => {
  const [open1, setOpen1] = React.useState(false);

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Search List</h4>
                <h6>Manage your search</h6>
              </div>
            </div>
            <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
              <ul className="table-top-head">
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control flex-fill me-3"
                    defaultValue="DreamsPOS"
                  />
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3">Search result for {`"DreamsPOS"`}</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <Link to="#" className="text-info text-truncate mb-2">
                        https://themeforest.net/search/dreamspos
                      </Link>
                      <p className="text-truncate line-clamb-2 mb-2">
                        DreamsPOS - Html, Vue 3, Angular 17+, React &amp; Node
                        HR Project Management &amp; CRM Admin Dashboard Template
                      </p>
                      <div className="d-flex align-items-center flex-wrap row-gap-2">
                        <span className="text-gray-9 me-3 pe-3 border-end">
                          1.7K Sales
                        </span>
                        <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-warning me-1" />
                          <i className="ti ti-star-filled text-gray-2 me-1" />
                          (45)
                        </div>
                        <span className="text-gray-9">$35</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="mb-3">Images</h5>
              <div className="row g-3">
                <Lightbox
                  open={open1}
                  close={() => setOpen1(false)}
                  slides={[
                    { src: media15 },
                    { src: media16 },
                    { src: media17 },
                  ]}
                />
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media15} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media16} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media17} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media18} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media19} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media20} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media21} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media22} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media23} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media24} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media25} className="rounded" alt="img" />
                  </Link>
                </div>
                <div className="col-xl-2 col-md-4 col-6">
                  <Link
                    to="#x"
                    data-fancybox="gallery"
                    className="gallery-item"
                    onClick={() => setOpen1(true)}
                  >
                    <img src={media26} className="rounded" alt="img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
    </div>
  );
};

export default Searchlist;
