import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Hridyesh Bisht",
    text: "Hi, I am the first memeber of the team",
    image: image1,
    skills: "Full Stack Development",
  },
  {
    id: 2,
    title: "Kavya Suthar",
    text: "Hi, I am the second memeber of the team",
    image: image2,
    skills: "Algorithms Expert",
  },
  {
    id: 3,
    title: "Tanvi Pathak",
    text: "Hi, I am the third memeber of the team",
    image: image3,
    skills: "Data Scientist",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, skills, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card
              imageSource={image}
              title={title}
              skills={skills}
              text={text}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
