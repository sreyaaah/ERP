/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  avatar01,
  avatar04,
  avatar05,
  avatar14,
  avatar29,
  avatar_02,
  avator09,
  channel01,
  channel02,
  channel03,
  channel04,
  channel05,
  channel06,
  channel07,
  channel08,
  feeds01,
  feeds02,
  feeds03,
  feeds04,
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  likedPage01,
  likedPage02,
  likedPage03,
  likedPage04,
  socialFeed01,
  socialFeed02,
  socialFeed03,
  socialFeed04,
  user01,
  user02,
  user03,
  user04,
  user05,
  user09,
  user11,
  user12,
  user13,
  user14,
  user15,
  user16,
  user19,
} from "../../utils/imagepath";

const SocialFeed = () => {
  const [open1, setOpen1] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [toggle2, setToggle2] = React.useState(false);
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 8,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    margin: 24,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-3 theiaStickySidebar">
              <div className="card sticky-class">
                <div className="card-body">
                  <div className="bg-light rounded p-3 mb-4">
                    <div className="text-center mb-3">
                      <Link
                        to="#"
                        className="avatar avatar-xl online avatar-rounded"
                      >
                        <img src={user11} alt="Img" />
                      </Link>
                      <h5 className="mb-1">
                        <Link to="#">James Hong </Link>
                      </h5>
                      <p className="fs-12">@James Hong324</p>
                    </div>
                    <div className="row g-1">
                      <div className="col-sm-4">
                        <div className="rounded bg-white text-center py-1">
                          <h4 className="mb-1">89K</h4>
                          <p className="fs-12">Followers</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="rounded bg-white text-center py-1">
                          <h4 className="mb-1">45</h4>
                          <p className="fs-12">Follows</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="rounded bg-white text-center py-1">
                          <h4 className="mb-1">45</h4>
                          <p className="fs-12">Post</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Link
                      to="#"
                      className="btn btn-primary d-inline-flex align-items-center justify-content-center w-100"
                    >
                      <i className="ti ti-circle-plus me-2" />
                      Create Post
                    </Link>
                  </div>
                  <div className="files-list border-bottom pb-2 mb-4">
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-between active fw-medium p-2"
                    >
                      <span>
                        <i className="ti ti-brand-feedly me-2" />
                        All Feeds
                      </span>
                      <span className="badge badge-danger badge-xs rounded-pill">
                        56
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-mood-search me-2" />
                      Explore
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-mail-check me-2" />
                      Messages
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-list me-2" />
                      Lists
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-bookmark me-2" />
                      Bookmark
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-coffee me-2" />
                      Marketplace
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-between fw-medium p-2"
                    >
                      <span>
                        <i className="ti ti-file-text me-2" />
                        Files
                      </span>
                      <span className="badge badge-info badge-xs rounded-pill">
                        14
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-music me-2" />
                      Media
                    </Link>
                    <Link
                      to="#"
                      className="d-flex align-items-center fw-medium p-2"
                    >
                      <i className="ti ti-user-share me-2" />
                      Profile
                    </Link>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h5>Pages You Liked</h5>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2"
                      >
                        <span className="d-inline-flex align-items-center">
                          <img src={likedPage01} className="me-2" alt="Img" />
                          Dribble
                        </span>
                        <span className="btn btn-icon btn-sm">
                          <i className="ti ti-thumb-down" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2"
                      >
                        <span className="d-inline-flex align-items-center">
                          <img src={likedPage02} className="me-2" alt="Img" />
                          UI/UX Designs
                        </span>
                        <span className="btn btn-icon btn-sm">
                          <i className="ti ti-thumb-down" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        className="fw-medium d-flex align-items-center justify-content-between text-dark py-1"
                      >
                        <span className="d-inline-flex align-items-center">
                          <img src={likedPage03} className="me-2" alt="Img" />
                          Figma Update
                        </span>
                        <span className="btn btn-icon btn-sm">
                          <i className="ti ti-thumb-down" />
                        </span>
                      </Link>
                      <div>
                        <div
                          className={`more-menu-3 ${toggle ? "d-block" : "d-none"}`}
                        >
                          <Link
                            to="#"
                            className="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2"
                          >
                            <span className="d-inline-flex align-items-center">
                              <img
                                src={likedPage04}
                                className="me-2"
                                alt="Img"
                              />
                              I Am Techie
                            </span>
                            <span className="btn btn-icon btn-sm">
                              <i className="ti ti-thumb-down" />
                            </span>
                          </Link>
                        </div>
                        <div className="view-all mt-2">
                          <Link
                            to="#"
                            className="viewall-button-3 fw-medium"
                            onClick={() => setToggle(!toggle)}
                          >
                            <span>Show {toggle ? "Less" : "More"}</span>
                            <i className="fa fa-chevron-down fs-10 ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div>
                <div className="card">
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label fs-16">Create Post</label>
                        <div className="position-relative">
                          <textarea
                            className="form-control post-textarea"
                            rows={3}
                            placeholder="What's on your mind?"
                            defaultValue={""}
                          />
                          <span className="avatar avatar-lg avatar-rounded text-area-avatar">
                            <img src={user11} alt="Img" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-photo fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-link fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-paperclip fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-video fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-hash fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-map-pin-heart fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-mood-smile fs-16" />
                          </Link>
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-refresh fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-trash fs-16" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-world fs-16" />
                          </Link>
                          <button
                            type="button"
                            className="btn btn-primary d-inline-flex align-items-center ms-2"
                          >
                            <i className="ti ti-circle-plus fs-16 me-2" />
                            Share Post
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <h5 className="me-2">Popular Channels</h5>
                      <div className="owl-nav custom-nav nav-control" />
                    </div>
                    <Slider
                      {...settings}
                      className="channels-slider owl-carousel"
                    >
                      <Link to="#">
                        <img src={channel01} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel02} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel03} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel04} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel05} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel06} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel07} alt="Img" />
                      </Link>
                      <Link to="#">
                        <img src={channel08} alt="Img" />
                      </Link>
                    </Slider>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                        >
                          <img src={user03} alt="Img" />
                        </Link>
                        <div>
                          <h5 className="mb-1">
                            <Link to="#">
                              Richard Smith{" "}
                              <i className="ti ti-circle-check-filled text-success" />
                            </Link>
                          </h5>
                          <p className="d-flex align-items-center">
                            <span className="text-info">@richard442</span>
                            <i className="ti ti-circle-filled fs-5 mx-2" />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-dark">About 1 hr ago</p>
                        <div className="dropdown ms-3 me-1">
                          <button
                            className="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ti ti-world pe-1" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Private
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Public
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center show"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-eye me-2" />
                                Hide Post
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-report me-2" />
                                Report
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <p className="text-dark fw-medium">
                        "Believe in yourself and all that you are. Know that
                        there is something inside you that is greater than any
                        obstacle.
                        <Link to="#" className="text-info link-hover">
                          #MotivationMonday
                        </Link>
                        <Link to="#" className="text-info link-hover">
                          #Inspiration
                        </Link>
                        🌟"
                      </p>
                    </div>
                    <div className="mb-2">
                      <img src={socialFeed01} className="rounded" alt="Img" />
                    </div>
                    <Lightbox
                      open={open1}
                      close={() => setOpen1(false)}
                      slides={[
                        {
                          src: "src/assets/img/social/gallery-big-01.jpg",
                        },
                        {
                          src: "src/assets/img/social/gallery-big-02.jpg",
                        },
                        {
                          src: "src/assets/img/social/gallery-big-03.jpg",
                        },
                        {
                          src: "src/assets/img/social/gallery-big-04.jpg",
                        },
                        {
                          src: "src/assets/img/social/gallery-big-01.jpg",
                        },
                      ]}
                    />
                    <Slider
                      {...settings2}
                      className="social-gallery-slider owl-carousel mb-3"
                    >
                      <Link
                        to="#"
                        onClick={() => setOpen1(true)}
                        className="gallery-item"
                      >
                        <img src={gallery01} className="rounded" alt="img" />
                        <span className="avatar avatar-md avatar-rounded">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setOpen1(true)}
                        className="gallery-item"
                      >
                        <img
                          src={gallery02}
                          className="rounded"
                          alt="img"
                        />
                        <span className="avatar avatar-md avatar-rounded">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setOpen1(true)}
                        className="gallery-item"
                      >
                        <img
                          src={gallery03}
                          className="rounded"
                          alt="img"
                        />
                        <span className="avatar avatar-md avatar-rounded">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setOpen1(true)}
                        className="gallery-item"
                      >
                        <img
                          src={gallery04}
                          className="rounded"
                          alt="img"
                        />
                        <span className="avatar avatar-md avatar-rounded">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => setOpen1(true)}
                        className="gallery-item"
                      >
                        <img
                          src={gallery01}
                          className="rounded"
                          alt="img"
                        />
                        <span className="avatar avatar-md avatar-rounded">
                          <i className="ti ti-eye" />
                        </span>
                      </Link>
                    </Slider>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center flex-wrap row-gap-3">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-heart me-2" />
                          340K Likes
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-message-dots me-2" />
                          45 Comments
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          28 Share
                        </Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-heart-filled text-danger" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-share" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-message-star" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <Link
                        to="#"
                        className="avatar avatar-rounded me-2 flex-shrink-0"
                      >
                        <img src={user11} alt="Img" />
                      </Link>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Comments"
                      />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                        >
                          <img src={user05} alt="Img" />
                        </Link>
                        <div>
                          <h5 className="mb-1">
                            <Link to="#">
                              Jason Heier{" "}
                              <i className="ti ti-circle-check-filled text-success" />
                            </Link>
                          </h5>
                          <p className="d-flex align-items-center">
                            <span className="text-info">@jason118</span>
                            <i className="ti ti-circle-filled fs-5 mx-2" />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-dark">About 1 hr ago</p>
                        <div className="dropdown ms-3 me-1">
                          <button
                            className="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ti ti-world pe-1" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Private
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Public
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center show"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-eye me-2" />
                                Hide Post
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-report me-2" />
                                Report
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <p className="text-dark fw-medium">
                        Drinking water boosts skin health and beauty. Stay
                        hydrated!
                        <Link to="#" className="text-info link-hover">
                          #HealthTips{" "}
                        </Link>
                        <Link to="#" className="text-info link-hover">
                          {" "}
                          #Wellness
                        </Link>
                        💧
                      </p>
                    </div>
                    <div className="card shadow-none mb-3">
                      <div className="card-img card-img-hover rounded-0">
                        <Link to="#" className="rounded-top">
                          <img
                            src={socialFeed02}
                            className="rounded-top"
                            alt="Img"
                          />
                        </Link>
                      </div>
                      <div className="card-body p-2">
                        <h6 className="mb-1 text-truncate">
                          <Link to="#">
                            Drinking water boosts skin health and beauty. Stay
                            hydrated!💧
                          </Link>
                        </h6>
                        <Link to="#">Health.com</Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div className="d-flex align-items-center flex-wrap row-gap-3">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-heart me-2" />
                          340K Likes
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-message-dots me-2" />
                          45 Comments
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          28 Share
                        </Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-heart" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-share" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-message-star" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-bookmark" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                          <img src={user04} alt="Img" />
                        </span>
                        <div>
                          <h5 className="mb-1">
                            <Link to="#">
                              Sophie Headrick{" "}
                              <i className="ti ti-circle-check-filled text-success" />
                            </Link>
                          </h5>
                          <p className="d-flex align-items-center">
                            <span className="text-info">@sophie241</span>
                            <i className="ti ti-circle-filled fs-5 mx-2" />
                            United Kingdom
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 text-dark">About 1 hr ago</p>
                        <div className="dropdown ms-3 me-1">
                          <button
                            className="btn btn-icon dropdown-toggle bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ti ti-world pe-1" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Private
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Public
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center show"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-eye me-2" />
                                Hide Post
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-report me-2" />
                                Report
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item rounded-1">
                                <i className="ti ti-trash-x me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <p className="text-dark fw-medium">
                        Excited to announce the launch of our new product! Get
                        yours now and enjoy a special discount.
                        <Link to="#" className="text-info link-hover">
                          #NewRelease{" "}
                        </Link>
                        <Link to="#" className="text-info link-hover">
                          {" "}
                          #Innovation
                        </Link>
                        🎉
                      </p>
                    </div>
                    <div className="mb-2">
                      <img
                        src={socialFeed03}
                        className="rounded"
                        alt="Img"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center flex-wrap row-gap-3">
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-heart me-2" />
                          340K Likes
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center me-3"
                        >
                          <i className="ti ti-message-dots me-2" />
                          45 Comments
                        </Link>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          28 Share
                        </Link>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-heart-filled text-danger" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-share" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-message-star" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm rounded-circle"
                        >
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <img
                          src={avatar_02}
                          alt="Img"
                        />
                      </Link>
                      <div className="bg-light rounded flex-fill p-2">
                        <div className="d-flex align-items-center mb-1">
                          <h5>
                            <Link to="#">Frank Hoffman</Link>
                          </h5>
                          <span className="ms-2">12:45 PM</span>
                        </div>
                        <p className="mb-1">
                          Congratulations on the launch! I've been eagerly
                          waiting for this product, and the special discount
                          makes it even more exciting.
                        </p>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-3 ms-4 ps-2">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src={avatar01} alt="Img" />
                      </Link>
                      <div className="bg-light rounded flex-fill p-2">
                        <div className="d-flex align-items-center mb-1">
                          <h5>
                            <Link to="#">Sophie Headrick</Link>
                          </h5>
                          <span className="ms-2">12:45 PM</span>
                        </div>
                        <p className="mb-1">
                          Thank you so much for your enthusiasm and support!
                        </p>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                      <Link
                        to="#"
                        className="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src={avatar04} alt="Img" />
                      </Link>
                      <div className="bg-light rounded flex-fill p-2">
                        <div className="d-flex align-items-center mb-1">
                          <h5>
                            <Link to="#">Samuel Butler</Link>
                          </h5>
                          <span className="ms-2">12:40 PM</span>
                        </div>
                        <p className="mb-1">
                          So thrilled to see this product finally launched! I've
                          heard amazing things about it and am excited to see
                          how it lives up to the hype.
                        </p>
                        <Link
                          to="#"
                          className="d-inline-flex align-items-center"
                        >
                          <i className="ti ti-share-3 me-2" />
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div
                        className={`more-menu ${toggle2 ? "d-block" : "d-none"}`}
                      >
                        <div className="d-flex align-items-start mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src={avatar05} alt="Img" />
                          </Link>
                          <div className="bg-light rounded flex-fill p-2">
                            <div className="d-flex align-items-center mb-1">
                              <h5>
                                <Link to="#">Samuel Butler</Link>
                              </h5>
                              <span className="ms-2">12:40 PM</span>
                            </div>
                            <p className="mb-1">
                              So thrilled to see this product finally launched!
                              I've heard amazing things about it and am excited
                              to see how it lives up to the hype.
                            </p>
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Reply
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <Link
                            to="#"
                            className="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src={avatar14} alt="Img" />
                          </Link>
                          <div className="bg-light rounded flex-fill p-2">
                            <div className="d-flex align-items-center mb-1">
                              <h5>
                                <Link to="#">Samuel Butler</Link>
                              </h5>
                              <span className="ms-2">12:40 PM</span>
                            </div>
                            <p className="mb-1">
                              So thrilled to see this product finally launched!
                              I've heard amazing things about it and am excited
                              to see how it lives up to the hype.
                            </p>
                            <Link
                              to="#"
                              className="d-inline-flex align-items-center"
                            >
                              <i className="ti ti-share-3 me-2" />
                              Reply
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="view-all text-center mb-3">
                        <Link
                          to="#"
                          className="viewall-button text-primary fw-medium"
                          onClick={() => setToggle2(!toggle2)}
                        >
                          <span>
                            View {toggle2 ? "Less" : "All 200"} Comments
                          </span>
                          <i className="fa fa-chevron-down fs-10 ms-2" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-rounded me-2 flex-shrink-0">
                        <img src={user11} alt="Img" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Comments"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 theiaStickySidebar">
              <div className="sticky-class">
                <div className="card ">
                  <div className="card-body">
                    <h5 className="mb-3">Peoples</h5>
                    <ul
                      className="nav nav-pills border d-flex p-2 rounded mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link btn active w-100"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          General
                        </button>
                      </li>
                      <li className="nav-item flex-fill" role="presentation">
                        <button
                          className="nav-link btn w-100"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Primary
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                      >
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={avatar29} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Anthony Lewis</Link>
                                  <i className="ti ti-circle-check-filled text-success ms-1" />
                                </h6>
                                <span className="fs-12 d-block">
                                  United States
                                </span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user01} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Harvey Smith</Link>
                                </h6>
                                <span className="fs-12 d-block">Ukrain</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user13} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Stephan Peralt</Link>
                                </h6>
                                <span className="fs-12 d-block">Isreal</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user19} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Doglas Martini</Link>
                                </h6>
                                <span className="fs-12 d-block">Belgium</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user09} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Brian Villalobos</Link>
                                  <i className="ti ti-circle-check-filled text-success ms-1" />
                                </h6>
                                <span className="fs-12 d-block">
                                  United Kingdom
                                </span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user02} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Linda Ray</Link>
                                </h6>
                                <span className="fs-12 d-block">Argentina</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-outline-light w-100 border"
                          >
                            View All <i className="ti ti-arrow-right ms-2" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                      >
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={avator09} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Anthony Lewis</Link>
                                  <i className="ti ti-circle-check-filled text-success ms-1" />
                                </h6>
                                <span className="fs-12 d-block">
                                  United States
                                </span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user12} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Harvey Smith</Link>
                                </h6>
                                <span className="fs-12 d-block">Ukrain</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user13} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Stephan Peralt</Link>
                                </h6>
                                <span className="fs-12 d-block">Isreal</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user14} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Doglas Martini</Link>
                                </h6>
                                <span className="fs-12 d-block">Belgium</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user15} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Brian Villalobos</Link>
                                  <i className="ti ti-circle-check-filled text-success ms-1" />
                                </h6>
                                <span className="fs-12 d-block">
                                  United Kingdom
                                </span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center">
                              <Link
                                to="#"
                                className="avatar avatar-rounded flex-shrink-0 me-2"
                              >
                                <img src={user16} alt="Img" />
                              </Link>
                              <div>
                                <h6 className="d-inline-flex align-items-center fw-medium mb-1">
                                  <Link to="#">Linda Ray</Link>
                                </h6>
                                <span className="fs-12 d-block">Argentina</span>
                              </div>
                            </div>
                            <Link to="#" className="btn btn-sm btn-icon">
                              <i className="ti ti-user-x" />
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            className="btn btn-outline-light w-100 border"
                          >
                            View All <i className="ti ti-arrow-right ms-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-3">Saved Feeds</h5>
                    <div className="bg-light-500 rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <Link to="#" className="d-flex align-items-center">
                          <span>
                            <img src={feeds01} className="me-2" alt="Img" />
                          </span>
                          <p className="fs-12 fw-medium">World Health</p>
                        </Link>
                        <Link to="#">
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                      <p className="text-dark fw-medium">
                        <Link to="#">
                          Retail investor party continues even as
                        </Link>
                      </p>
                    </div>
                    <div className="bg-light-500 rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <Link to="#" className="d-flex align-items-center">
                          <span>
                            <img src={feeds02} className="me-2" alt="Img" />
                          </span>
                          <p className="fs-12 fw-medium">T3 Tech</p>
                        </Link>
                        <Link to="#">
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                      <p className="text-dark fw-medium">
                        <Link to="#">
                          Ipad Air (2020) vs Samsung Galaxy Tab
                        </Link>
                      </p>
                    </div>
                    <div className="bg-light-500 rounded p-2 mb-2">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <Link to="#" className="d-flex align-items-center">
                          <span>
                            <img src={feeds03} className="me-2" alt="Img" />
                          </span>
                          <p className="fs-12 fw-medium">Fstoppers</p>
                        </Link>
                        <Link to="#">
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                      <p className="text-dark fw-medium">
                        <Link to="#">
                          Beyond capital gains tax! Top 50 stock
                        </Link>
                      </p>
                    </div>
                    <div className="bg-light-500 rounded p-2">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <Link to="#" className="d-flex align-items-center">
                          <span>
                            <img src={feeds04} className="me-2" alt="Img" />
                          </span>
                          <p className="fs-12 fw-medium">Evernote</p>
                        </Link>
                        <Link to="#">
                          <i className="ti ti-bookmark-filled text-warning" />
                        </Link>
                      </div>
                      <p className="text-dark fw-medium">
                        <Link to="#">Sony Just Destroyed the Competition</Link>
                      </p>
                    </div>
                    <div className="mt-3">
                      <Link
                        to="#"
                        className="btn btn-outline-light w-100 border"
                      >
                        View All <i className="ti ti-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="mb-3">Trending Hastags</h5>
                    <div className="d-flex align-items-center flex-wrap gap-1">
                      <Link
                        to="#"
                        className="text-info d-inline-flex link-hover"
                      >
                        #HealthTips
                      </Link>
                      <Link
                        to="#"
                        className="text-info d-inline-flex link-hover"
                      >
                        #Wellness
                      </Link>
                      <Link
                        to="#"
                        className="text-info d-inline-flex link-hover"
                      >
                        #Motivation
                      </Link>
                      <Link
                        to="#"
                        className="text-info d-inline-flex link-hover"
                      >
                        #Inspiration{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="card-img card-img-hover mb-3">
                      <Link to="#" className="rounded">
                        <img src={socialFeed04} className="rounded" alt="Img" />
                      </Link>
                    </div>
                    <h6 className="text-center">
                      <Link to="#">
                        Enjoy Unlimited Access on a small price monthly.
                      </Link>
                    </h6>
                    <div className="mt-3">
                      <Link
                        to="#"
                        className="btn btn-outline-light w-100 border"
                      >
                        Upgrade Now <i className="ti ti-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap justify-content-center template-more-links mb-4">
                  <Link to="#" className="d-inline-flex">
                    About
                  </Link>
                  <Link to="#" className="d-inline-flex">
                    Privacy
                  </Link>
                  <Link to="#" className="d-inline-flex">
                    Terms
                  </Link>
                  <Link to="#" className="d-inline-flex">
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between bg-white border-top p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default SocialFeed;
