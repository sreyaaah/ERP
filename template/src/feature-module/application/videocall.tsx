import { useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { user01, user02, video } from "../../utils/imagepath";

const Videocall = () => {
  const [addClass, setAddClass] = useState(false);
  // const [mute, setMute] = useState(false);
  const handleShowClass = () => {
    setAddClass(true);
  };

  const handleShowremoveClass = () => {
    setAddClass(false);
  };

  const [isActive, setIsActive] = useState(false);

  const handleGuestOffClick = () => {
    setIsActive((prevState) => !prevState); // Toggle the state
  };

  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        setIsFullscreen(false);
      }
    }
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="content mb-3">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4>Calls</h4>
                <h6>Manage your calls</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
            <div className="page-btn">
              <Link to="#" className="btn btn-primary">
                <i className="ti ti-circle-plus me-1"></i>
                Add People
              </Link>
            </div>
          </div>
          <div className="row">
            {/* Video */}
            <div className="col-xxl-12">
              <div className="single-video d-flex">
                <div className={
                    addClass
                      ? "join-video flex-fill main-img-hide"
                      : "join-video flex-fill "
                  }>
                  <img src={video} className="img-fluid" alt="Logo" />
                  <div
                    className={`chat-active-users ${isActive ? "show-active-users" : ""}`}
                  >
                    <div className="video-avatar">
                      <img src={user01} className="img-fluid" alt="Logo" />
                      <div className="user-name">
                        <span>Joanne Conner</span>
                      </div>
                    </div>
                  </div>
                  <div className="record-item d-flex align-items-center">
                    <div className="record-time me-2">
                      <span>40:12</span>
                    </div>
                    <Link
                      to="#"
                      onClick={toggleFullscreen}
                      className="video-expand btnFullscreen	"
                    >
                      <i className="ti ti-maximize" />
                    </Link>
                  </div>
                  <div className="more-icon">
                    <Link to="#" className="mic-off">
                      <i className="bx bx-microphone-off" />
                    </Link>
                  </div>
                  <div className="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">
                    <Link
                      to="#"
                      className="options-icon d-flex align-items-center justify-content-center guest-off rounded"
                      onClick={handleGuestOffClick}
                    >
                      <i className="ti ti-user-off" />
                    </Link>
                    <div className="call-option rounded-pill d-flex justify-content-center align-items-center">
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-microphone" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"
                      >
                        <i className="ti ti-video" />
                      </Link>
                      <Link
                        to="#"
                        className="call-icon bg-danger d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-phone" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"
                      >
                        <i className="ti ti-volume" />
                      </Link>
                      <Link
                        to="#"
                        className="options-icon bg-light d-flex justify-content-center align-items-center rounded"
                      >
                        <i className="ti ti-device-imac-share" />
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="options-icon bg-light d-flex align-items-center justify-content-center rounded"
                      id="show-message"
                      onClick={handleShowClass}
                    >
                      <i className="ti ti-dots" />
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    addClass
                      ? "right-user-side chat-rooms open-chats"
                      : "right-user-side chat-rooms "
                  }
                  id="chat-room"
                >
                  {/* <Scrollbar> */}
                    <div className="card slime-grp border-0 mb-0 h-auto">
                      <div className="card-header p-3 pb-0 border-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <h5>Chat</h5>
                          <Link
                            to="#"
                            className="close_profile close_profile4 avatar avatar-sm mb-0 rounded-circle bg-danger"
                            onClick={handleShowremoveClass}
                          >
                            <i className="ti ti-x" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body slimscroll p-3">
                        <Scrollbar>
                          <div className="chat-msg-blk p-0">
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Hi Everyone.!</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats chats-right">
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Good Morning..! Today we have meeting about
                                    the new policy.
                                  </h4>
                                </div>
                                <div className="chat-profile-name text-end">
                                  <h6>
                                    <i className="bx bx-check-double" /> 10:00
                                  </h6>
                                </div>
                              </div>
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                <img src={user02} alt="image" />
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that
                                    comes in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Nice..which category it belongs to?</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that
                                    comes in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Hi.! Good Morning all.</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>Nice..which category it belongs to?</h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                            <div className="chats chats-right">
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Good Morning..! Today we have meeting about
                                    the new product.
                                  </h4>
                                </div>
                                <div className="chat-profile-name text-end">
                                  <h6>
                                    <i className="bx bx-check-double" /> 10:00
                                  </h6>
                                </div>
                              </div>
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                                <img src={user02} alt="image" />
                              </div>
                            </div>
                            <div className="chats mb-0">
                              <div className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                                <img src={user01} alt="image" />
                              </div>
                              <div className="chat-content flex-fill">
                                <div className="message-content">
                                  <h4>
                                    Great.! This is the second new product that
                                    comes in this week.
                                  </h4>
                                </div>
                                <div className="chat-profile-name d-flex justify-content-end">
                                  <h6>10:00 AM</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-footer">
                            <form>
                              <div className="smile-col comman-icon">
                                <Link to="#">
                                  <i className="far fa-smile" />
                                </Link>
                              </div>
                              <div className="attach-col comman-icon">
                                <Link to="#">
                                  <i className="fas fa-paperclip" />
                                </Link>
                              </div>
                              <div className="micro-col comman-icon">
                                <Link to="#">
                                  <i className="bx bx-microphone" />
                                </Link>
                              </div>
                              <input
                                type="text"
                                className="form-control chat_form"
                                placeholder="Enter Message....."
                              />
                              <div className="send-chat comman-icon">
                                <Link to="#" className="rounded">
                                  <i className="ti ti-send text-white" />
                                </Link>
                              </div>
                            </form>
                          </div>
                        </Scrollbar>
                      </div>
                    </div>
                  {/* </Scrollbar> */}
                </div>
              </div>
            </div>
            {/* /Video */}
          </div>
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default Videocall;
