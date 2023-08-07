import { useEffect, useRef, useState } from "react";
import images from "./images";
import { motion } from "framer-motion";

const App = () => {
  const [width, setWidth] = useState();
  const slider = useRef();
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <div className="app">
      <h1>Slider</h1>
      <div ref={slider} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <div className="item" key={image}>
              <img src={image} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default App;
