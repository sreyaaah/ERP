import { useState, useEffect } from "react";
// import { Scrollbar } from "react-scrollbars-custom";
import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import "yet-another-react-lightbox/styles.css";
import CommonFooter from "../../components/footer/commonFooter";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import {
  avatar14,
  avatar19,
  avatar20,
  avatar21,
  avatar22,
  avatar23,
  downloadImg,
  emonji02,
  emonji03,
  emonji05,
  emonji06,
  emonji07,
  emonji08,
  emonji09,
  emonji10,
  scanners,
  stockImg02,
  deleteImg,
  user01,
  user09,
  user49,
} from "../../utils/imagepath";

const Chat = () => {
  useEffect(() => {
    document.body.classList.add("app-chat");
    return () => {
      document.body.classList.remove("app-chat");
    };
  }, []);

  const routes = all_routes;
  const [showEmoji, setShowEmoji] = useState(false);
  const [showEmoji2, setShowEmoji2] = useState(false);
  const [showChatMessages, setShowChatMessages] = useState(false);

  return (
    <>
      <div className="page-wrapper chat-page">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Chat</h4>
                <h6>Manage your chats</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="chat-wrapper">
            {/* Chats sidebar */}
            <div className="sidebar-group">
              <div id="chats" className="sidebar-content active slimscroll">
                {/* <Scrollbar> */}
                  <div className="chat-search-header">
                    <div className="header-title d-flex align-items-center justify-content-between">
                      <h4 className="mb-3">Chats</h4>
                    </div>
                    {/* Chat Search */}
                    <div className="search-wrap">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search For Contacts or Messages"
                          />
                          <span className="input-group-text">
                            <i className="ti ti-search" />
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* /Chat Search */}
                  </div>
                  <div className="sidebar-body chat-body" id="chatsidebar">
                    {/* Left Chat Title */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="chat-title">All Chats</h5>
                    </div>
                    {/* /Left Chat Title */}
                    <div className="chat-users-wrap">
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar14}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Anthony Lewis</h6>
                              <p>
                                <span className="animate-typing">
                                  is typing
                                  <span className="dot" />
                                  <span className="dot" />
                                  <span className="dot" />
                                </span>
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar19}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Elliot Murray</h6>
                              <p>
                                <i className="ti ti-file me-1" />
                                Document
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">06:12 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-checks text-success" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar20}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Stephan Peralt</h6>
                              <p className="text-danger">
                                <i className="ti ti-video-off me-2" />
                                Missed Video Call
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">03:15 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={user01}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Rebecca Smtih</h6>
                              <p>Hi How are you 🔥</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">Sunday</span>
                              <div className="chat-pin">
                                <span className="count-message fs-12 fw-semibold">
                                  25
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={user01}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Harvey Smith</h6>
                              <p>Haha oh man 🔥</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">03:15 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                                <span className="count-message fs-12 fw-semibold">
                                  12
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar21}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Lori Broaddus</h6>
                              <p>Do you know which...</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-heart-filled text-warning" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={user09}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Brian Villalobos</h6>
                              <p>Do you know which...</p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">06:12 AM</span>
                              <div className="chat-pin">
                                <i className="ti ti-pin me-2" />
                                <i className="ti ti-checks text-success" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar22}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Linda Ray</h6>
                              <p>
                                <i className="ti ti-photo me-2" />
                                Photo
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">Wednesday</span>
                              <div className="chat-pin">
                                <span className="count-message fs-12 fw-semibold">
                                  12
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chat-list">
                        <Link 
                          to={routes.chat} 
                          className="chat-user-list"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowChatMessages(true);
                          }}
                        >
                          <div className="avatar avatar-lg online me-2">
                            <img
                              src={avatar23}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="chat-user-info">
                            <div className="chat-user-msg">
                              <h6>Doglas Martini</h6>
                              <p className="text-success">
                                <i className="ti ti-video-plus text-success me-2" />
                                Incoming Video Call
                              </p>
                            </div>
                            <div className="chat-user-time">
                              <span className="time">02:40 PM</span>
                              <div className="chat-pin">
                                <i className="ti ti-heart-filled text-warning" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="chat-dropdown">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-end p-3">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-box-align-right me-2" />
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-heart me-2" />
                                Mark as Favourite
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-check me-2" />
                                Mark as Unread
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-pinned me-2" />
                                Pin Chats
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="ti ti-trash me-2" />
                                Delete
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </Scrollbar> */}
              </div>
            </div>
            {/* / Chats sidebar */}
            {/* Chat */}
            <div className={`chat chat-messages ${showChatMessages ? 'show' : ''}`} id="middle">
              <div>
                <div className="chat-header">
                  <div className="user-details">
                    <div className="d-xl-none">
                      <Link 
                        className="text-muted chat-close me-2" 
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowChatMessages(false);
                        }}
                      >
                        <i className="fas fa-arrow-left" />
                      </Link>
                    </div>
                    <div className="avatar avatar-lg online flex-shrink-0">
                      <img
                        src={avatar14}
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="ms-2 overflow-hidden">
                      <h6>Anthony Lewis</h6>
                      <span className="last-seen">Online</span>
                    </div>
                  </div>
                  <div className="chat-options">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="btn chat-search-btn"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Search"
                        >
                          <i className="ti ti-search" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="btn no-bg"
                          to="#"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end p-3">
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-volume-off me-2" />
                              Mute Notification
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-clock-hour-4 me-2" />
                              Disappearing Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-clear-all me-2" />
                              Clear Message
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-trash me-2" />
                              Delete Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              <i className="ti ti-ban me-2" />
                              Block
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* Chat Search */}
                  <div className="chat-search search-wrap contact-search">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Contacts"
                        />
                        <span className="input-group-text">
                          <i className="ti ti-search" />
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>

                <div className="chat-body chat-page-group slimscroll">
                  {/* <Scrollbar> */}
                    <div className="messages">
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Hi, this is Mark from Freshmart. I’m reaching out
                              to confirm this week’s delivery schedule.
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6 className="text-dark">
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <img
                            src={user49}
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <img
                            src={avatar14}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Hi Mark, good to hear from you! Your delivery is
                              scheduled for Friday at 10:00 AM. Is that time
                              still convenient for you?{" "}
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6 className="text-dark">
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <i className="ti ti-checks text-success ms-2" />
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Yes, that works. Could you also confirm the items
                              in this week’s order?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6 className="text-dark">
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <img
                            src={user49}
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chat-line">
                        <span className="chat-date">Today, July 24</span>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <img
                            src={avatar14}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Of course! Here’s the list:
                              <ul>
                                <li>
                                  <i className="ti ti-point-filled" /> 20 cases
                                  of bottled water (500ml)
                                </li>
                                <li>
                                  <i className="ti ti-point-filled" />
                                  15 cartons of eggs (12 pcs each)
                                </li>
                              </ul>
                              Does everything look correct?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6 className="text-dark">
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Almost. Can you increase the bottled water to 30
                              cases instead of 20?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6 className="text-dark">
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <img
                            src={user49}
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <img
                            src={avatar14}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Got it! I’ll update the order to 30 cases of
                              bottled water. Anything else you’d like to add or
                              adjust?
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name">
                            <h6 className="text-dark">
                              Anthony Lewis
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-content">
                          <div className="chat-info">
                            <div className="message-content">
                              Yes, that’s correct. Thanks!
                              <div className="emoj-group">
                                <ul>
                                  <li className="emoj-action">
                                    <Link to="#">
                                      <i className="ti ti-mood-smile" />
                                    </Link>
                                    <div className="emoj-group-list">
                                      <ul>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji02} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji05} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji06} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji07} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji08} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji03} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji10} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li>
                                          <Link to="#">
                                            <img src={emonji09} alt="Icon" />
                                          </Link>
                                        </li>
                                        <li className="add-emoj">
                                          <Link to="#">
                                            <i className="ti ti-plus" />
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <i className="ti ti-arrow-forward-up" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="chat-profile-name text-end">
                            <h6 className="text-dark">
                              You
                              <i className="ti ti-circle-filled fs-7 mx-2" />
                              <span className="chat-time">08:00 AM</span>
                              <span className="msg-read success">
                                <i className="ti ti-checks" />
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="chat-avatar">
                          <img
                            src={user49}
                            className="rounded-circle dreams_chat"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  {/* </Scrollbar> */}
                </div>
              </div>
              <div className="chat-footer">
                <form className="footer-form">
                  <div className="chat-footer-wrap">
                    <div className="form-item">
                      <Link to="#" className="action-circle">
                        <i className="ti ti-microphone" />
                      </Link>
                    </div>
                    <div className="form-wrap">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type Your Message"
                      />
                    </div>
                    <div className="form-item emoj-action-foot">
                      <Link
                        to="#"
                        className="action-circle"
                        onClick={() => setShowEmoji2(!showEmoji2)}
                      >
                        <i className="ti ti-mood-smile" />
                      </Link>
                      <div
                        className="emoj-group-list-foot down-emoji-circle"
                        style={{ display: showEmoji2 ? "block" : "none" }}
                      >
                        <ul>
                          <li>
                            <Link to="#">
                              <img src={emonji02} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emonji05} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emonji06} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emonji07} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emonji08} alt="Icon" />
                            </Link>
                          </li>
                          <li className="add-emoj">
                            <Link to="#">
                              <i className="ti ti-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-item position-relative d-flex align-items-center justify-content-center ">
                      <Link
                        to="#"
                        className="action-circle file-action position-absolute"
                        onClick={() => setShowEmoji(!showEmoji)}
                      >
                        <i className="ti ti-folder" />
                      </Link>
                      <input
                        type="file"
                        className="open-file position-relative"
                        name="files"
                        id="files"
                      />
                    </div>
                    <div className="form-item">
                      <Link to="#" data-bs-toggle="dropdown">
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end p-3">
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-camera-selfie me-2" />
                          Camera
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-photo-up me-2" />
                          Gallery
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-music me-2" />
                          Audio
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-map-pin-share me-2" />
                          Location
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <i className="ti ti-user-check me-2" />
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="form-btn">
                      <button className="btn btn-primary" type="submit">
                        <i className="ti ti-send" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* /Chat */}
          </div>
        </div>
        <CommonFooter />
      </div>

      <div>
        {/* Add Transfer */}
        <div className="modal fade" id="add-units">
          <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Add Transfer</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body custom-modal-body">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-blocks">
                          <label>Date</label>
                          <div className="input-groupicon calender-input">
                            <i className="feather icon-calendar info-img" />
                            <input
                              type="text"
                              className="datetimepicker form-control"
                              placeholder="Select Date"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-blocks">
                          <label>From</label>
                          <select>
                            <option>Choose</option>
                            <option>Store 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="input-blocks">
                          <label>To</label>
                          <select>
                            <option>Choose</option>
                            <option>Store 2</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="input-blocks">
                          <label>Product Name</label>
                          <input
                            type="text"
                            placeholder="Please type product code and select"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="modal-body-table">
                          <div className="table-responsive">
                            <table className="table  datanew">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Qty</th>
                                  <th>Purchase Price($)</th>
                                  <th>Discount($)</th>
                                  <th>Tax(%)</th>
                                  <th>Tax Amount($)</th>
                                  <th>Unit Cost($)</th>
                                  <th>Total Cost(%)</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                  <td className="p-5" />
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="input-blocks">
                            <label>Order Tax</label>
                            <input type="text" defaultValue={0} />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="input-blocks">
                            <label>Discount</label>
                            <input type="text" defaultValue={0} />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="input-blocks">
                            <label>Shipping</label>
                            <input type="text" defaultValue={0} />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="input-blocks">
                            <label>Status</label>
                            <select>
                              <option>Choose</option>
                              <option>Sent</option>
                              <option>Pending</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box">
                        <label>Notes</label>
                        <div id="summernote" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="modal-footer-btn">
                        <Link
                          to="#"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-submit">
                          Submit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Transfer */}
        {/* Edit Transfer */}
        <div className="modal fade" id="edit-units">
          <div className="modal-dialog purchase modal-dialog-centered stock-adjust-modal">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Edit Transfer</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body custom-modal-body">
                    <div>
                      <div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="input-blocks">
                              <label>Date</label>
                              <div className="input-groupicon calender-input">
                                <i className="feather icon-plus-calendar info-img" />
                                <input
                                  type="text"
                                  className="datetimepicker"
                                  placeholder="19 Jan 2023"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="input-blocks">
                              <label>From</label>
                              <select>
                                <option>Store 1</option>
                                <option>Choose</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="input-blocks">
                              <label>To</label>
                              <select>
                                <option>Store 2</option>
                                <option>Choose</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Product</label>
                              <div className="input-groupicon">
                                <input
                                  type="text"
                                  placeholder="Scan/Search Product by code and select..."
                                />
                                <div className="addonset">
                                  <img src={scanners} alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="modal-body-table total-orders">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Product Name</th>
                                      <th>QTY</th>
                                      <th>Purchase Price($) </th>
                                      <th>Discount($) </th>
                                      <th>Tax %</th>
                                      <th>Tax Amount($)</th>
                                      <th className="text-end">Unit Cost($)</th>
                                      <th className="text-end">
                                        Total Cost ($){" "}
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="productimgname">
                                          <Link
                                            to="#"
                                            className="product-img stock-img"
                                          >
                                            <img
                                              src={stockImg02}
                                              alt="product"
                                            />
                                          </Link>
                                          <Link to="#">Nike Jordan</Link>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="product-quantity">
                                          <span className="quantity-btn">
                                            +
                                            <i className="feather icon-plus-circle plus-circle" />
                                          </span>
                                          <input
                                            type="text"
                                            className="quntity-input"
                                            defaultValue={10}
                                          />
                                          <span className="quantity-btn">
                                            <i className="feather icon-minus-circle feather-search" />
                                          </span>
                                        </div>
                                      </td>
                                      <td>2000</td>
                                      <td>500.00</td>
                                      <td>0.00</td>
                                      <td>0.00</td>
                                      <td className="text-end">0.00</td>
                                      <td className="text-end">1500</td>
                                      <td>
                                        <Link to="#" className="delete-set">
                                          <img src={deleteImg} alt="svg" />
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 float-md-right">
                            <div className="total-order">
                              <ul>
                                <li>
                                  <h4>Order Tax</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Discount</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li>
                                  <h4>Shipping</h4>
                                  <h5>$ 0.00</h5>
                                </li>
                                <li className="total">
                                  <h4>Grand Total</h4>
                                  <h5>$1500.00</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Order Tax</label>
                              <input type="text" defaultValue={0} />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Discount</label>
                              <input type="text" defaultValue={0} />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Shipping</label>
                              <input type="text" defaultValue={0} />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6 col-12">
                            <div className="input-blocks">
                              <label>Status</label>
                              <select>
                                <option>Sent</option>
                                <option>Pending</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box">
                        <label>Description</label>
                        <div id="summernote2">
                          <p>
                            These shoes are made with the highest quality
                            materials.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="modal-footer-btn">
                        <Link
                          to="#"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </Link>
                        <Link to="#" className="btn btn-submit">
                          Save Changes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Transfer */}
        {/* Import Purchase */}
        <div className="modal fade" id="view-notes">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="page-wrapper-new p-0">
                <div className="content">
                  <div className="modal-header border-0 custom-modal-header">
                    <div className="page-title">
                      <h4>Import Transfer</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body custom-modal-body">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="input-blocks">
                          <label>From</label>
                          <select>
                            <option>Choose</option>
                            <option>Store 1</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="input-blocks">
                          <label>To</label>
                          <select>
                            <option>Choose</option>
                            <option>Store 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 col-12">
                        <div className="input-blocks">
                          <label>Satus</label>
                          <select>
                            <option>Choose</option>
                            <option>Sent</option>
                            <option>Pending</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6 col-12">
                        <div className="row">
                          <div>
                            {/* <div className="input-blocks download">
                          <Link className="btn btn-submit">Download Sample File</Link>
                      </div> */}
                            <div className="modal-footer-btn download-file">
                              <Link to="#" className="btn btn-submit">
                                Download Sample File
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-blocks image-upload-down">
                          <label> Upload CSV File</label>
                          <div className="image-upload download">
                            <input type="file" />
                            <div className="image-uploads">
                              <img src={downloadImg} alt="img" />
                              <h4>
                                Drag and drop a <span>file to upload</span>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6 col-12">
                        <div className="input-blocks">
                          <label>Shipping</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-blocks summer-description-box transfer">
                        <label>Description</label>
                        <div id="summernote3"></div>
                        <p>Maximum 60 Characters</p>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="modal-footer-btn">
                        <Link
                          to="#"
                          className="btn btn-cancel me-2"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </Link>
                        <Link to="/purchase-list" className="btn btn-submit">
                          Submit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Import Purchase */}
      </div>
    </>
  );
};

export default Chat;
