import { useState } from "react";
import { RotateCcw } from "react-feather";
import CommonFooter from "../../../components/footer/commonFooter";

// Custom Star Rating Component compatible with React 19
interface StarRatingsProps {
  rating: number;
  starRatedColor?: string;
  changeRating?: (rating: number) => void;
  numberOfStars?: number;
  name?: string;
  starDimension?: string;
  starSpacing?: string;
}

const StarRatings = ({
  rating,
  starRatedColor = "gold",
  changeRating,
  numberOfStars = 5,
  starDimension = "20px",
  starSpacing = "2px",
}: StarRatingsProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    if (changeRating) {
      changeRating(value);
    }
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const displayRating = hoverRating || rating;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: starSpacing,
      }}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: numberOfStars }, (_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= displayRating;
        
        return (
          <span
            key={starValue}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            style={{
              fontSize: starDimension,
              color: isFilled ? starRatedColor : "#ccc",
              cursor: changeRating ? "pointer" : "default",
              transition: "color 0.2s ease",
              userSelect: "none",
            }}
            role={changeRating ? "button" : undefined}
            tabIndex={changeRating ? 0 : undefined}
            onKeyDown={(e) => {
              if (changeRating && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                handleClick(starValue);
              }
            }}
            aria-label={`Rate ${starValue} out of ${numberOfStars} stars`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

const Rating = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [rating5, setRating5] = useState(0);
  const [rating6, setRating6] = useState(0);
  const [rating7, setRating7] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);
  const [isLoading, ] = useState(false);

  const handleStarHover = () => {
    setHoverCount((prevCount) => Math.min(prevCount + 1, 5));
  };
  const handleRatingChange1 = (newRating: any) => {
    setRating1(newRating);
  };
  const handleReset = () => {
    setRating7(0);
  };

  const handleRatingChange2 = (newRating: any) => {
    setRating2(newRating);
  };
  const handleRatingChange3 = (newRating: any) => {
    setRating3(newRating);
  };
  const handleRatingChange4 = (newRating: any) => {
    setRating4(newRating);
  };
  const handleRatingChange5 = (newRating: any) => {
    setRating5(newRating);
  };
  const handleRatingChange6 = (newRating: any) => {
    setRating6(newRating);
  };
  const handleRatingChange7 = (newRating: any) => {
    setRating7(newRating);
  };
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Rating</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Basic Rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Show Some <span className="text-danger">❤</span> with rating
                    :
                  </p>
                  <StarRatings
                    rating={rating2}
                    starRatedColor="gold"
                    changeRating={handleRatingChange2}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">5 star rater with steps</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Dont forget to rate the product :
                  </p>
                  <StarRatings
                    rating={rating3}
                    starRatedColor="gold"
                    changeRating={handleRatingChange3}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-12">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Custom messages</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Your rating is much appreciated👏 :
                  </p>
                  <StarRatings
                    rating={rating1}
                    starRatedColor="gold"
                    changeRating={handleRatingChange1}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  Unlimited number of stars readOnly
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  <StarRatings
                    rating={rating4}
                    starRatedColor="gold"
                    changeRating={handleRatingChange4}
                    numberOfStars={10}
                    name="rating"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">
                  5 Star rater with custom isBusyText and simulated backend
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">Thanks for rating :</p>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <StarRatings
                      rating={rating5}
                      starRatedColor="gold"
                      changeRating={handleRatingChange5}
                      numberOfStars={5}
                      name="rating"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">On hover event</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Please give your valuable rating :
                  </p>
                  <div
                    className="d-flex flex-wrap align-items-center"
                    onMouseOver={handleStarHover}
                    style={{ fontSize: "24px", cursor: "pointer" }}
                  >
                   <StarRatings
                      rating={rating6}
                      starRatedColor="gold"
                      changeRating={handleRatingChange6}
                      numberOfStars={5}
                      name="rating"
                    />

                    <span className="live-rating badge bg-success-transparent ms-3">
                      {hoverCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6">
            <div className="card custom-card">
              <div className="card-header">
                <div className="card-title">Clear/reset rater</div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <p className="fs-14 mb-0 fw-semibold">
                    Thank You so much for your support :
                  </p>
                  <div className="d-flex flex-wrap align-items-center">
                  <StarRatings
                      rating={rating7}
                      starRatedColor="gold"
                      changeRating={handleRatingChange7}
                      numberOfStars={5}
                      name="rating"
                    />

                    <button
                      className="btn btn-icon btn-sm btn-danger-light ms-3"
                      id="rater-reset-button"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Reset"
                      onClick={handleReset}
                    >
                      <RotateCcw className="feather-16" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter/>
    </div>
  );
};

export default Rating;
