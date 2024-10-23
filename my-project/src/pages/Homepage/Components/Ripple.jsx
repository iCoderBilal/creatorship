import Ripple from "../../../Components/RippleBackground.jsx";

export function RippleDemo() {
  return (
    <div className="absolute flex h-[100%] w-full flex-col items-center justify-center overflow-hidden bg-background z-[1]">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Ripple
      </p>
      <Ripple />
    </div>
  );
}
