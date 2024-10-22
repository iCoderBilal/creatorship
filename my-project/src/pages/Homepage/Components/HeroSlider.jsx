import Marquee from "../../../Components/Marquee.jsx"; // Ensure this is available or replace with a suitable marquee component
import heroImg1 from "../../../assets/hero-slider-1.jpg";
import heroImg2 from "../../../assets/hero-slider-2.jpg";
import heroImg3 from "../../../assets/hero-slider-3.jpg";
import heroImg4 from "../../../assets/hero-slider-4.jpg";
import heroImg5 from "../../../assets/hero-slider-5.jpg";
import heroImg6 from "../../../assets/hero-slider-6.jpg";

const reviews = [
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: heroImg3,
  },
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: heroImg1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: heroImg2,
  },

  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: heroImg4,
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: heroImg5,
  },

  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: heroImg6,
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={`relative cursor-pointer overflow-hidden rounded-xl p-4
     `}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-[15px] w-[600px]" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="lg:mt-0 mt-[70px] relative flex lg:h-[640px] h-[280px] w-full flex-row items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee vertical className="[--duration:11s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:11s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="lg:hidden pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#1E053D] dark:from-background"></div>
      <div className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#492A70] dark:from-background"></div>{" "}
    </div>
  );
}
