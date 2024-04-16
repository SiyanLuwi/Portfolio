import React from "react";
import Lottie from "react-lottie";
import userIconData from "../assets/user.json";

const UserIcon = ({ animate }) => {
  const [isStopped, setIsStopped] = React.useState(true); // State to control animation stopping

  React.useEffect(() => {
    setIsStopped(!animate); // Stop animation when not hovered
  }, [animate]); // Re-run effect when animate prop changes
  
  const userIconOptions = {
    loop: true,
    autoplay: false,
    animationData: userIconData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ pointerEvents: "none" }}>
      <Lottie
        options={userIconOptions}
        height={78}
        width={78}
        isStopped={isStopped}
      />
    </div>
  );
};

export default UserIcon;
