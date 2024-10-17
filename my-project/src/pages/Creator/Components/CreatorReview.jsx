import React from "react";
import creatorReviewimg from "../../../assets/creator-review.webp";

const CreatorReview = () => {
  return (
    <div>
      <div className="creator-reviews">
        <div className="creator-reviews-container max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="review-img basis-[40%]">
              <img src={creatorReviewimg} className="w-full" />
            </div>
            <div className="review-content basis-[55%]">
              <p className="text-[2vw] font-Montserrat font-bold">
                " I've connected with amazing music and lifestyle brands through
                Creatorship that I wouldn't have reached on my own. It's a great
                platform for indie artists looking to get more exposure without
                compromising their art. "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorReview;
