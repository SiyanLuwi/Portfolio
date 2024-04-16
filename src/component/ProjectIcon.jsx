import React from "react";
import Lottie from "react-lottie";
import projectIconData from "../assets/project.json";

const ProjectIcon = ({ animate }) => {
  const [isStopped, setIsStopped] = React.useState(true); // State to control animation stopping

  React.useEffect(() => {
    setIsStopped(!animate); // Stop animation when not hovered
  }, [animate]); // Re-run effect when animate prop changes
  
  const projectIconOptions = {
    loop: true,
    autoplay: false,
    animationData: projectIconData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ pointerEvents: "none" }}>
      <Lottie
        options={projectIconOptions}
        height={60}
        width={60}
        isStopped={isStopped}
      />
    </div>
  );
};

export default ProjectIcon;
