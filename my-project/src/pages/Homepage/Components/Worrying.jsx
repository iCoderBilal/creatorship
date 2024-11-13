import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Worrying = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div>
      <div className="worrying">
        <div className="worrying-container py-36">
          <motion.div
            ref={ref} // Ensure ref is correctly passed to the motion div
            initial={{ scale: 0.3 }} // Start with a smaller scale
            whileInView={{ scale: 1 }} // Scale to 1 when the element is in view
            transition={{ duration: 0.8 }} // Set the animation duration
            className="text-[40px] text-center w-[200px] h-[200px] bg-red-600 mx-auto"
          >
            This Is Something Amazing
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Worrying;
