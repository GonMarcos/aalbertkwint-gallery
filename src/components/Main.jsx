import SectionArt from "./Section";
import React, { useState } from "react";
import data from "../data/images-freelance.json";
import dataLatest from "../data/images-latest";
import Modal from "./Modal";
import "./layout/Main.css";
import AboutMe from "./AboutMe";
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

function Main() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="Main" id="Main">
      <h2>Gallery</h2>


      <SectionArt title="Latest">
          <div className="latest">
            {dataLatest.data.map((item, index) => (
              <img style={{cursor:"auto"}} key={index}
                src={item.src}
                alt={item.text}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
      </SectionArt>


      <SectionArt title="All Arts">
        <div className="wrapper">
          {data.data.map((item, index) => (
            <img key={index}
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
          ))}
          <div>
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
                handelRotationLeft={handelRotationLeft}
              />
            )}
          </div>
        </div>
      </SectionArt>
      <AboutMe/>     
    <div className="arrow-up">
      <a href="#Header">
        <BsFillArrowUpSquareFill color="white" size={30}/>
      </a>
    </div>
    </div>
  );
}

export default Main;
