import React from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div className="icons">
            <BsFillArrowLeftSquareFill/>
          </div>
        </div>
        <div onClick={handelRotationRight} className="overlay-arrows_right">
          <div className="icons">
            <BsFillArrowRightSquareFill/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
