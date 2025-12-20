import { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";
import RefreshIcon from "../../components/tooltip-content/refresh";
import CollapesIcon from "../../components/tooltip-content/collapes";
import { avatar_02 } from "../../utils/imagepath";
const initialColumns = {
  column1: {
    title: "New",
    tasks: [
      { id: "task1", content: "Task 1", priority: "Low" },
      { id: "task2", content: "Task 2", priority: "Medium" },
    ],
  },
  column2: {
    title: "Inprogress",
    tasks: [
      { id: "task3", content: "Task 3", priority: "High" },
      { id: "task4", content: "Task 4", priority: "Medium" },
      { id: "task5", content: "Task 5", priority: "High" },
    ],
  },
  column3: {
    title: "On-hold",
    tasks: [
      { id: "task6", content: "Task 5", priority: "Low" },
      { id: "task7", content: "Task 6", priority: "Low" },
    ],
  },
  column4: {
    title: "Completed",
    tasks: [{ id: "task27", content: "Task 27", priority: "Medium" }],
  },
};
const initialColumns2 = {
  column1: {
    title: "New",
    tasks: [
      { id: "task8", content: "Task 1", priority: "High" },
      { id: "task2", content: "Task 2", priority: "High" },
    ],
  },
  column2: {
    title: "Inprogress",
    tasks: [
      { id: "task9", content: "Task 3", priority: "High" },
      { id: "task10", content: "Task 4", priority: "High" },
    ],
  },
  column3: {
    title: "On-hold",
    tasks: [{ id: "task12", content: "Task 5", priority: "High" }],
  },
  column4: {
    title: "Completed",
    tasks: [{ id: "task28", content: "Task 28", priority: "High" }],
  },
};
const initialColumns3 = {
  column1: {
    title: "New",
    tasks: [{ id: "task14", content: "Task 1", priority: "Medium" }],
  },
  column2: {
    title: "Inprogress",
    tasks: [
      { id: "task16", content: "Task 3", priority: "Medium" },
      { id: "task17", content: "Task 4", priority: "Medium" },
      { id: "task11", content: "Task 5", priority: "Medium" },
    ],
  },
  column3: {
    title: "On-hold",
    tasks: [{ id: "task18", content: "Task 5", priority: "Medium" }],
  },
  column4: {
    title: "Completed",
    tasks: [{ id: "task29", content: "Task 29", priority: "Medium" }],
  },
};
const initialColumns4 = {
  column1: {
    title: "New",
    tasks: [
      { id: "task20", content: "Task 1", priority: "Low" },
      { id: "task21", content: "Task 2", priority: "Low" },
    ],
  },
  column2: {
    title: "Inprogress",
    tasks: [
      { id: "task22", content: "Task 3", priority: "Low" },
      { id: "task23", content: "Task 4", priority: "Low" },
    ],
  },
  column3: {
    title: "On-hold",
    tasks: [{ id: "task25", content: "Task 5", priority: "Low" }],
  },
  column4: {
    title: "Completed",
    tasks: [{ id: "task26", content: "Task 6", priority: "Low" }],
  },
};

const Projects = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [columns2] = useState(initialColumns2);
  const [columns3] = useState(initialColumns3);
  const [columns4] = useState(initialColumns4);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result as {
      source: { droppableId: keyof typeof columns; index: number };
      destination?: { droppableId: keyof typeof columns; index: number };
    };

    // If dropped outside a valid droppable area, do nothing
    if (!destination) return;

    // Get source and destination columns
    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];

    // Clone tasks from source and destination columns
    const sourceTasks = [...sourceColumn.tasks];
    const destinationTasks = [...destinationColumn.tasks];

    // Remove the dragged task from the source column
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // Add the dragged task to the destination column
    destinationTasks.splice(destination.index, 0, movedTask);

    // Update the state with the new column data
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      [destination.droppableId]: {
        ...destinationColumn,
        tasks: destinationTasks,
      },
    });
  };

  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Breadcrumb */}
        <div className="page-header">
          <div className="add-item d-flex">
            <div className="page-title">
              <h4>Projects</h4>
              <h6>Manage your projects</h6>
            </div>
          </div>
          <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
            <div className="form-sort me-2 mb-sm-0 mb-3">
              {/* <Sliders className="info-img" />
              <Select
                className="img-select"
                classNamePrefix="react-select"
                options={options}
                placeholder="Sort by Date"
              /> */}
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <h4>Projects</h4>
            <div className="d-flex align-items-center flex-wrap row-gap-3">
              <div className="avatar-list-stacked avatar-group-sm me-3">
                <span className="avatar avatar-rounded">
                  <img
                    className="border border-white"
                    src="src/assets/img/profiles/avatar-19.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <img
                    className="border border-white"
                    src="src/assets/img/profiles/avatar-29.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded">
                  <img
                    className="border border-white"
                    src="src/assets/img/profiles/avatar-16.jpg"
                    alt="img"
                  />
                </span>
                <span className="avatar avatar-rounded bg-primary fs-12">
                  1+
                </span>
              </div>
              <div className="d-flex align-items-center me-3">
                <p className="mb-0 me-3 pe-3 border-end fs-14">
                  Total Task : <span className="text-dark"> 55 </span>
                </p>
                <p className="mb-0 me-3 pe-3 border-end fs-14">
                  Pending : <span className="text-dark"> 15 </span>
                </p>
                <p className="mb-0 fs-14">
                  Completed : <span className="text-dark"> 40 </span>
                </p>
              </div>
              <div className="input-icon-start position-relative">
                <span className="input-icon-addon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Project"
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                  <h6 className="me-2">Priority</h6>
                  <ul
                    className="nav nav-pills border d-inline-flex p-1 rounded bg-light todo-tabs"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto active"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-selected="true"
                      >
                        All
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        High
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-medium"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Medium
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link btn btn-sm btn-icon py-3 d-flex align-items-center justify-content-center w-auto"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-low"
                        type="button"
                        role="tab"
                        aria-selected="false"
                      >
                        Low
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="d-flex align-items-center justify-content-lg-end flex-wrap row-gap-3 mb-3">
                  <div className="input-icon w-120 position-relative me-2">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar text-gray-9" />
                    </span>
                    <DatePicker
                      className="form-control datetimepicker"
                      format={{
                        format: "DD-MM-YYYY",
                        type: "mask",
                      }}
                      getPopupContainer={getModalContainer}
                      placeholder="Create Date"
                    />
                  </div>
                  <div className="input-icon w-120 position-relative me-2">
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar text-gray-9" />
                    </span>
                    <DatePicker
                      className="form-control datetimepicker"
                      format={{
                        format: "DD-MM-YYYY",
                        type: "mask",
                      }}
                      getPopupContainer={getModalContainer}
                      placeholder="Due Date"
                    />
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center p-2"
                      data-bs-toggle="dropdown"
                    >
                      Select Status
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-3">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Inprogress
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          On-hold
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Completed
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center border p-2 rounded">
                    <span className="d-inline-flex me-2">Sort By : </span>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center border-0 bg-transparent p-0 text-dark"
                        data-bs-toggle="dropdown"
                      >
                        Created Date
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Created Date
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Last 7 Days
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item rounded-1">
                            Due Date
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
              >
                <div>
                  <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <div className="d-flex align-items-start overflow-auto project-status pb-4">
                        {Object.entries(columns).map(([columnId, column]) => (
                          <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                            <Droppable key={columnId} droppableId={columnId}>
                              {(provided: any) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <div className="bg-white p-2 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <span
                                          className={`${
                                            column.title === "New"
                                              ? "bg-soft-pink"
                                              : column.title === "Inprogress"
                                              ? "bg-soft-skyblue"
                                              : column.title === "Completed"
                                              ? "bg-soft-success"
                                              : "bg-soft-danger"
                                          } p-1 d-flex rounded-circle me-2`}
                                        >
                                          <span
                                            className={`${
                                              column.title === "New"
                                                ? "bg-pink"
                                                : column.title === "Inprogress"
                                                ? "bg-skyblue"
                                                : column.title === "Completed"
                                                ? "bg-success"
                                                : "bg-danger"
                                            } rounded-circle d-block p-1`}
                                          />
                                        </span>
                                        <h5 className="me-2">{column.title}</h5>
                                        <span className="badge bg-light rounded-pill">
                                          02
                                        </span>
                                      </div>
                                      <div className="dropdown">
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                            >
                                              <i className="ti ti-edit me-2" />
                                              Edit
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                              data-bs-toggle="modal"
                                              data-inert={true}
                                              data-bs-target="#delete_modal"
                                            >
                                              <i className="ti ti-trash me-2" />
                                              Delete
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {column.tasks.map((task, index) => (
                                    <Draggable
                                      key={task.id}
                                      draggableId={task.id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="kanban-task bg-white mb-2 rounded-4 shadow-sm"
                                        >
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="d-flex align-items-center">
                                                  <span className="badge bg-outline-dark me-2">
                                                    Web Layout
                                                  </span>
                                                  <span
                                                    className={`badge ${
                                                      task.priority === "Low"
                                                        ? "bg-success"
                                                        : task.priority ===
                                                          "Medium"
                                                        ? "bg-warning"
                                                        : "bg-purple"
                                                    }  badge-xs d-flex align-items-center justify-content-center`}
                                                  >
                                                    <i className="fas fa-circle fs-6 me-1" />
                                                    {task.priority}
                                                  </span>
                                                </div>
                                                <div className="dropdown">
                                                  <Link
                                                    to="#"
                                                    className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    <i className="ti ti-dots-vertical" />
                                                  </Link>
                                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                      >
                                                        <i className="ti ti-edit me-2" />
                                                        Edit
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal"
                                                        data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                      >
                                                        <i className="ti ti-trash me-2" />
                                                        Delete
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-2">
                                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                  <img
                                                    src="src/assets/img/icons/kanban-arrow.svg"
                                                    className="w-auto h-auto"
                                                    alt="Img"
                                                  />
                                                </span>
                                                <h6 className="d-flex align-items-center">
                                                  Project Title{" "}
                                                  <span className="fs-12 ms-2 text-gray">
                                                    PRJ-154
                                                  </span>
                                                </h6>
                                              </div>
                                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Budget
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    $24,000
                                                  </p>
                                                </div>
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Tasks
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    12/15
                                                  </p>
                                                </div>
                                                <div className="">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Due on
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    15/04/2024
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-19.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-29.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-16.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-01.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src={avatar_02}
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-03.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <Link
                                                    to="#"
                                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                                  >
                                                    1+
                                                  </Link>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark me-2"
                                                  >
                                                    <i className="ti ti-message-circle text-gray me-1" />
                                                    14
                                                  </Link>
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark"
                                                  >
                                                    <i className="ti ti-paperclip text-gray me-1" />
                                                    14
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                  <div className="pt-2">
                                    <Link
                                      to="#"
                                      className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                    >
                                      <i className="ti ti-plus me-2" />
                                      New Project
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </Droppable>
                          </div>
                        ))}
                      </div>
                    </DragDropContext>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel">
                <div>
                  <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <div className="d-flex align-items-start overflow-auto project-status pb-4">
                        {Object.entries(columns2).map(([columnId, column2]) => (
                          <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                            <Droppable key={columnId} droppableId={columnId}>
                              {(provided: any) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <div className="bg-white p-2 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <span
                                          className={`${
                                            column2.title === "New"
                                              ? "bg-soft-pink"
                                              : column2.title === "Inprogress"
                                              ? "bg-soft-skyblue"
                                              : column2.title === "Completed"
                                              ? "bg-soft-success"
                                              : "bg-soft-danger"
                                          } p-1 d-flex rounded-circle me-2`}
                                        >
                                          <span
                                            className={`${
                                              column2.title === "New"
                                                ? "bg-pink"
                                                : column2.title === "Inprogress"
                                                ? "bg-skyblue"
                                                : column2.title === "Completed"
                                                ? "bg-success"
                                                : "bg-danger"
                                            } rounded-circle d-block p-1`}
                                          />
                                        </span>
                                        <h5 className="me-2">
                                          {column2.title}
                                        </h5>
                                        <span className="badge bg-light rounded-pill">
                                          02
                                        </span>
                                      </div>
                                      <div className="dropdown">
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                            >
                                              <i className="ti ti-edit me-2" />
                                              Edit
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                              data-bs-toggle="modal"
                                              data-inert={true}
                                              data-bs-target="#delete_modal"
                                            >
                                              <i className="ti ti-trash me-2" />
                                              Delete
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {column2.tasks.map((task, index) => (
                                    <Draggable
                                      key={task.id}
                                      draggableId={task.id}
                                      index={index}
                                    >
                                      {(provided: any) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="kanban-task bg-white mb-2 rounded-4 shadow-sm"
                                        >
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="d-flex align-items-center">
                                                  <span className="badge bg-outline-dark me-2">
                                                    Web Layout
                                                  </span>
                                                  <span
                                                    className={`badge ${
                                                      task.priority === "Low"
                                                        ? "bg-success"
                                                        : task.priority ===
                                                          "Medium"
                                                        ? "bg-warning"
                                                        : "bg-purple"
                                                    }  badge-xs d-flex align-items-center justify-content-center`}
                                                  >
                                                    <i className="fas fa-circle fs-6 me-1" />
                                                    {task.priority}
                                                  </span>
                                                </div>
                                                <div className="dropdown">
                                                  <Link
                                                    to="#"
                                                    className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    <i className="ti ti-dots-vertical" />
                                                  </Link>
                                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                      >
                                                        <i className="ti ti-edit me-2" />
                                                        Edit
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal"
                                                        data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                      >
                                                        <i className="ti ti-trash me-2" />
                                                        Delete
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-2">
                                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                  <img
                                                    src="src/assets/img/icons/kanban-arrow.svg"
                                                    className="w-auto h-auto"
                                                    alt="Img"
                                                  />
                                                </span>
                                                <h6 className="d-flex align-items-center">
                                                  Project Title{" "}
                                                  <span className="fs-12 ms-2 text-gray">
                                                    PRJ-154
                                                  </span>
                                                </h6>
                                              </div>
                                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Budget
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    $24,000
                                                  </p>
                                                </div>
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Tasks
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    12/15
                                                  </p>
                                                </div>
                                                <div className="">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Due on
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    15/04/2024
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-19.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-29.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-16.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-01.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src={avatar_02}
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-03.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <Link
                                                    to="#"
                                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                                  >
                                                    1+
                                                  </Link>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark me-2"
                                                  >
                                                    <i className="ti ti-message-circle text-gray me-1" />
                                                    14
                                                  </Link>
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark"
                                                  >
                                                    <i className="ti ti-paperclip text-gray me-1" />
                                                    14
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                  <div className="pt-2">
                                    <Link
                                      to="#"
                                      className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                    >
                                      <i className="ti ti-plus me-2" />
                                      New Project
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </Droppable>
                          </div>
                        ))}
                      </div>
                    </DragDropContext>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-medium" role="tabpanel">
                <div>
                  <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <div className="d-flex align-items-start overflow-auto project-status pb-4">
                        {Object.entries(columns3).map(([columnId, column3]) => (
                          <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                            <Droppable key={columnId} droppableId={columnId}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <div className="bg-white p-2 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <span
                                          className={`${
                                            column3.title === "New"
                                              ? "bg-soft-pink"
                                              : column3.title === "Inprogress"
                                              ? "bg-soft-skyblue"
                                              : column3.title === "Completed"
                                              ? "bg-soft-success"
                                              : "bg-soft-danger"
                                          } p-1 d-flex rounded-circle me-2`}
                                        >
                                          <span
                                            className={`${
                                              column3.title === "New"
                                                ? "bg-pink"
                                                : column3.title === "Inprogress"
                                                ? "bg-skyblue"
                                                : column3.title === "Completed"
                                                ? "bg-success"
                                                : "bg-danger"
                                            } rounded-circle d-block p-1`}
                                          />
                                        </span>
                                        <h5 className="me-2">
                                          {column3.title}
                                        </h5>
                                        <span className="badge bg-light rounded-pill">
                                          02
                                        </span>
                                      </div>
                                      <div className="dropdown">
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                            >
                                              <i className="ti ti-edit me-2" />
                                              Edit
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                              data-bs-toggle="modal"
                                              data-inert={true}
                                              data-bs-target="#delete_modal"
                                            >
                                              <i className="ti ti-trash me-2" />
                                              Delete
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {column3.tasks.map((task, index) => (
                                    <Draggable
                                      key={task.id}
                                      draggableId={task.id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="kanban-task bg-white mb-2 rounded-4 shadow-sm"
                                        >
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="d-flex align-items-center">
                                                  <span className="badge bg-outline-dark me-2">
                                                    Web Layout
                                                  </span>
                                                  <span
                                                    className={`badge ${
                                                      task.priority === "Low"
                                                        ? "bg-success"
                                                        : task.priority ===
                                                          "Medium"
                                                        ? "bg-warning"
                                                        : "bg-purple"
                                                    }  badge-xs d-flex align-items-center justify-content-center`}
                                                  >
                                                    <i className="fas fa-circle fs-6 me-1" />
                                                    {task.priority}
                                                  </span>
                                                </div>
                                                <div className="dropdown">
                                                  <Link
                                                    to="#"
                                                    className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    <i className="ti ti-dots-vertical" />
                                                  </Link>
                                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                      >
                                                        <i className="ti ti-edit me-2" />
                                                        Edit
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal"
                                                        data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                      >
                                                        <i className="ti ti-trash me-2" />
                                                        Delete
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-2">
                                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                  <img
                                                    src="src/assets/img/icons/kanban-arrow.svg"
                                                    className="w-auto h-auto"
                                                    alt="Img"
                                                  />
                                                </span>
                                                <h6 className="d-flex align-items-center">
                                                  Project Title{" "}
                                                  <span className="fs-12 ms-2 text-gray">
                                                    PRJ-154
                                                  </span>
                                                </h6>
                                              </div>
                                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Budget
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    $24,000
                                                  </p>
                                                </div>
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Tasks
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    12/15
                                                  </p>
                                                </div>
                                                <div className="">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Due on
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    15/04/2024
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-19.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-29.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-16.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-01.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src={avatar_02}
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-03.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <Link
                                                    to="#"
                                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                                  >
                                                    1+
                                                  </Link>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark me-2"
                                                  >
                                                    <i className="ti ti-message-circle text-gray me-1" />
                                                    14
                                                  </Link>
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark"
                                                  >
                                                    <i className="ti ti-paperclip text-gray me-1" />
                                                    14
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                  <div className="pt-2">
                                    <Link
                                      to="#"
                                      className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                    >
                                      <i className="ti ti-plus me-2" />
                                      New Project
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </Droppable>
                          </div>
                        ))}
                      </div>
                    </DragDropContext>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-low" role="tabpanel">
                <div>
                  <div>
                    <DragDropContext onDragEnd={onDragEnd}>
                      <div className="d-flex align-items-start overflow-auto project-status pb-4">
                        {Object.entries(columns4).map(([columnId, column4]) => (
                          <div className="p-3 rounded bg-transparent-secondary w-100 me-3">
                            <Droppable key={columnId} droppableId={columnId}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                >
                                  <div className="bg-white p-2 rounded mb-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-flex align-items-center">
                                        <span
                                          className={`${
                                            column4.title === "New"
                                              ? "bg-soft-pink"
                                              : column4.title === "Inprogress"
                                              ? "bg-soft-skyblue"
                                              : column4.title === "Completed"
                                              ? "bg-soft-success"
                                              : "bg-soft-danger"
                                          } p-1 d-flex rounded-circle me-2`}
                                        >
                                          <span
                                            className={`${
                                              column4.title === "New"
                                                ? "bg-pink"
                                                : column4.title === "Inprogress"
                                                ? "bg-skyblue"
                                                : column4.title === "Completed"
                                                ? "bg-success"
                                                : "bg-danger"
                                            } rounded-circle d-block p-1`}
                                          />
                                        </span>
                                        <h5 className="me-2">
                                          {column4.title}
                                        </h5>
                                        <span className="badge bg-light rounded-pill">
                                          02
                                        </span>
                                      </div>
                                      <div className="dropdown">
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center"
                                          data-bs-toggle="dropdown"
                                        >
                                          <i className="ti ti-dots-vertical" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end p-3">
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                            >
                                              <i className="ti ti-edit me-2" />
                                              Edit
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              to="#"
                                              className="dropdown-item rounded-1"
                                              data-bs-toggle="modal"
                                              data-inert={true}
                                              data-bs-target="#delete_modal"
                                            >
                                              <i className="ti ti-trash me-2" />
                                              Delete
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  {column4.tasks.map((task, index) => (
                                    <Draggable
                                      key={task.id}
                                      draggableId={task.id}
                                      index={index}
                                    >
                                      {(provided) => (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          className="kanban-task bg-white mb-2 rounded-4 shadow-sm"
                                        >
                                          <div className="card">
                                            <div className="card-body">
                                              <div className="d-flex align-items-center justify-content-between mb-3">
                                                <div className="d-flex align-items-center">
                                                  <span className="badge bg-outline-dark me-2">
                                                    Web Layout
                                                  </span>
                                                  <span
                                                    className={`badge ${
                                                      task.priority === "Low"
                                                        ? "bg-success"
                                                        : task.priority ===
                                                          "Medium"
                                                        ? "bg-warning"
                                                        : "bg-purple"
                                                    }  badge-xs d-flex align-items-center justify-content-center`}
                                                  >
                                                    <i className="fas fa-circle fs-6 me-1" />
                                                    {task.priority}
                                                  </span>
                                                </div>
                                                <div className="dropdown">
                                                  <Link
                                                    to="#"
                                                    className="d-inline-flex align-items-center"
                                                    data-bs-toggle="dropdown"
                                                  >
                                                    <i className="ti ti-dots-vertical" />
                                                  </Link>
                                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                      >
                                                        <i className="ti ti-edit me-2" />
                                                        Edit
                                                      </Link>
                                                    </li>
                                                    <li>
                                                      <Link
                                                        to="#"
                                                        className="dropdown-item rounded-1"
                                                        data-bs-toggle="modal"
                                                        data-inert={true}
                                                        data-bs-target="#delete_modal"
                                                      >
                                                        <i className="ti ti-trash me-2" />
                                                        Delete
                                                      </Link>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center mb-2">
                                                <span className="avatar avatar-xs rounded-circle bg-warning me-2">
                                                  <img
                                                    src="src/assets/img/icons/kanban-arrow.svg"
                                                    className="w-auto h-auto"
                                                    alt="Img"
                                                  />
                                                </span>
                                                <h6 className="d-flex align-items-center">
                                                  Project Title{" "}
                                                  <span className="fs-12 ms-2 text-gray">
                                                    PRJ-154
                                                  </span>
                                                </h6>
                                              </div>
                                              <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Budget
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    $24,000
                                                  </p>
                                                </div>
                                                <div className="me-3 pe-3 border-end">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Tasks
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    12/15
                                                  </p>
                                                </div>
                                                <div className="">
                                                  <span className="fw-medium fs-12 d-block mb-1">
                                                    Due on
                                                  </span>
                                                  <p className="fs-12 text-dark">
                                                    15/04/2024
                                                  </p>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-center justify-content-between">
                                                <div className="avatar-list-stacked avatar-group-sm me-3">
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-19.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-29.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-16.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-01.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src={avatar_02}
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <span className="avatar avatar-rounded">
                                                    <img
                                                      className="border border-white"
                                                      src="src/assets/img/profiles/avatar-03.jpg"
                                                      alt="img"
                                                    />
                                                  </span>
                                                  <Link
                                                    to="#"
                                                    className="avatar avatar-rounded bg-primary fs-12 text-white"
                                                  >
                                                    1+
                                                  </Link>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark me-2"
                                                  >
                                                    <i className="ti ti-message-circle text-gray me-1" />
                                                    14
                                                  </Link>
                                                  <Link
                                                    to="#"
                                                    className="d-flex align-items-center text-dark"
                                                  >
                                                    <i className="ti ti-paperclip text-gray me-1" />
                                                    14
                                                  </Link>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Draggable>
                                  ))}
                                  {provided.placeholder}
                                  <div className="pt-2">
                                    <Link
                                      to="#"
                                      className="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
                                    >
                                      <i className="ti ti-plus me-2" />
                                      New Project
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </Droppable>
                          </div>
                        ))}
                      </div>
                    </DragDropContext>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
        <p className="mb-0">2014 - 2025 © DreamsPOS. All Right Reserved</p>
        <p>
          Designed &amp; Developed by{" "}
          <Link to="#" className="text-primary">
            Dreams
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
