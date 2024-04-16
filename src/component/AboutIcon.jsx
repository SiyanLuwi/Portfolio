import React from "react";
import Lottie from "react-lottie";
import aboutIconData from "../assets/about.json";

const AboutIcon = ({ animate }) => {
  const [isStopped, setIsStopped] = React.useState(true); // State to control animation stopping
  
  React.useEffect(() => {
    setIsStopped(!animate); // Stop animation when not hovered
  }, [animate]); // Re-run effect when animate prop changes

  const aboutIconOptions = {
    loop: true,
    autoplay: false,
    animationData: aboutIconData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ pointerEvents: "none" }}>
      <Lottie
        options={aboutIconOptions}
        height={70}
        width={70}
        isStopped={isStopped}
      />
    </div>
  );
};

export default AboutIcon;
