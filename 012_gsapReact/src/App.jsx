import { useGSAP } from "@gsap/react/src";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  
  useGSAP(() => {
    gsap.from(".box", {
      rotate: 360,
      scale: 0,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    })
  }, {
    scope: ".container"
  })

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
