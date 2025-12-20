import { useState } from "react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";
import { Link } from "react-router-dom";
import CommonFooter from "../../../components/footer/commonFooter";

const initialLeft = [
  {
    id: "card-1",
    content: (
      <div className="card custom-card card-bg-primary">
        <Link to="#" className="card-anchor" />
        <div className="card-body">
          <blockquote className="blockquote mb-0 text-center">
            <h6 className="text-fixed-white">
              The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..
            </h6>
            <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
              Someone famous as <cite title="Source Title">-Helen Keller</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    ),
  },
  {
    id: "card-2",
    content: (
      <div className="card custom-card">
        <div className="card-header justify-content-between">
          <div className="card-title">Card With Fullscreen Button</div>
          <Link to="#" data-bs-toggle="card-fullscreen">
            <i data-feather="maximize" className="feather-zap" />
          </Link>
        </div>
        <div className="card-body">
          <h6 className="card-text fw-semibold">FullScreen Card</h6>
          <p className="card-text mb-0">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    ),
  },
  {
    id: "card-3",
    content: (
      <div className="card custom-card overlay-card text-fixed-white">
        <img src="src/assets/img/media/media-35.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column p-0">
          <div className="card-header text-fixed-white">
            <div className="card-title">Image Overlays Are Awesome!</div>
          </div>
          <div className="card-body overflow-hidden text-fixed-white">
            <div className="card-text mb-2">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even.
            </div>
            <div className="card-text">Last updated 3 mins ago</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-4",
    content: (
      <div className="card custom-card">
        <Link to="#" className="card-anchor" />
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="avatar avatar-md">
                <img src="src/assets/img/avatar/avatar-1.jpg" alt="img" />
              </span>
            </div>
            <div>
              <p className="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
              <div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-5",
    content: (
      <div className="card custom-card border border-info">
        <Link to="#" className="card-anchor" />
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <span className="avatar avatar-xl">
                <img src="src/assets/img/avatar/avatar-10.jpg" alt="img" />
              </span>
            </div>
            <div>
              <p className="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
              <div className="card-title fs-12 mb-1">Department Of Commerce</div>
              <div className="card-title text-muted fs-11 mb-0">24 Years, Female</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const initialRight = [
  {
    id: "card-6",
    content: (
      <div className="card custom-card overlay-card">
        <img src="src/assets/img/media/media-36.jpg" className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
          <div className="card-body text-fixed-white">
            <div className="card-text">Image Overlays Are Awesome!</div>
            <div className="card-text mb-2">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even.
            </div>
            <div className="card-text">Last updated 3 mins ago</div>
          </div>
          <div className="card-footer text-fixed-white">Last updated 3 mins ago</div>
        </div>
      </div>
    ),
  },
  {
    id: "card-7",
    content: (
      <div className="card custom-card card-bg-success">
        <div className="card-body">
          <div className="d-flex align-items-center w-100">
            <div className="me-2">
              <span className="avatar avatar-rounded">
                <img src="src/assets/img/avatar/avatar-11.jpg" alt="img" />
              </span>
            </div>
            <div>
              <div className="fs-15 fw-semibold">Samantha sid</div>
              <p className="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-8",
    content: (
      <div className="card custom-card">
        <div className="card-header border-bottom-0 justify-content-between">
          <div className="card-title">Card With Collapse Button</div>
          <Link
            to="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i data-feather="chevron-down" className="fs-18 collapse-open" />
            <i data-feather="chevron-up" className="collapse-close fs-18" />
          </Link>
        </div>
        <div className="collapse show border-top" id="collapseExample">
          <div className="card-body">
            <h6 className="card-text fw-semibold">Collapsible Card</h6>
            <p className="card-text mb-0">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "card-9",
    content: (
      <div className="card custom-card">
        <div className="card-header justify-content-between">
          <div className="card-title">Card With Close Button</div>
          <Link to="#" data-bs-toggle="card-remove">
            <i data-feather="x" className="fs-18" />
          </Link>
        </div>
        <div className="card-body">
          <h6 className="card-text fw-semibold">Closed Card</h6>
          <p className="card-text mb-0">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    ),
  },
];

const DragDrop = () => {
  const [leftCards, setLeftCards] = useState(initialLeft);
  const [rightCards, setRightCards] = useState(initialRight);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      const cards = source.droppableId === "left" ? Array.from(leftCards) : Array.from(rightCards);
      const [removed] = cards.splice(source.index, 1);
      cards.splice(destination.index, 0, removed);

      if (source.droppableId === "left") setLeftCards(cards);
      else setRightCards(cards);
    } else {
      // Moving between lists
      const sourceCards = source.droppableId === "left" ? Array.from(leftCards) : Array.from(rightCards);
      const destCards = destination.droppableId === "left" ? Array.from(leftCards) : Array.from(rightCards);

      const [removed] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, removed);

      if (source.droppableId === "left") {
        setLeftCards(sourceCards);
        setRightCards(destCards);
      } else {
        setLeftCards(destCards);
        setRightCards(sourceCards);
      }
    }
  };

  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Drag &amp; Drop</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Drag &amp; Drop</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="row">
            <Droppable droppableId="left">
              {(provided, snapshot) => (
                <div
                  className="col-xl-6"
                  id="draggable-left"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? "#f0f0f0" : undefined,
                    minHeight: 500,
                  }}
                >
                  {leftCards.map((card, idx) => (
                    <Draggable key={card.id} draggableId={card.id} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            marginBottom: 16,
                            opacity: snapshot.isDragging ? 0.7 : 1,
                            ...provided.draggableProps.style,
                          }}
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="right">
              {(provided, snapshot) => (
                <div
                  className="col-xl-6"
                  id="draggable-right"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? "#f0f0f0" : undefined,
                    minHeight: 500,
                  }}
                >
                  {rightCards.map((card, idx) => (
                    <Draggable key={card.id} draggableId={card.id} index={idx}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            marginBottom: 16,
                            opacity: snapshot.isDragging ? 0.7 : 1,
                            ...provided.draggableProps.style,
                          }}
                        >
                          {card.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
      <CommonFooter/>
    </div>
  );
};

export default DragDrop;