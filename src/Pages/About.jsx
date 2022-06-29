import React from "react";
import Panel from "../Components/Panel";
import "../Styles/about.css";
import Spline from "@splinetool/react-spline";
import { ShortCard } from "../Components/TeamCard";

export default function About() {
  const list = [
    {
      name: "Shubh Khanna",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Ansh Tyagi",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Utkarsh Dwivedi ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Ashutosh Kashyap ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Ameesha Thakur ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Raghav Gupta",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Harshit Rustogi ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Naman Pokhriyal ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Aditi Sharma ",
      in: "https://www.linkedin.com/in/aditi-sharma-7a981b202/",
    },
    {
      name: "Vanshika Agarwal ",
      in: "https://www.linkedin.com/in/vanshika-agarwal-b83251215/",
    },
    {
      name: "Jyotin Rustagi ",
      in: "https://www.linkedin.com/in/jyotin-rustagi-497824213/",
    },
    {
      name: "Shivani Bahuguna ",
      in: "https://www.linkedin.com/in/shivani-bahuguna",
    },
    {
      name: "Keerti Adhikari",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Navdha Talwar ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Prajjwal Chauhan ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Vanshika Dargan",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Priyanshi Jain ",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
    {
      name: "Ankit Nainwal",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
    },
  ];
  return (
    <main>
      <Panel title="About Us" />
      <div className="about">
        <div className="overview-content about-text">
          We at Microsoft Learn student ambassadors DIT focus on upskilling and
          ignite a fire among the people.We regularly conduct workshops,
          lectures, webinars, Events, Competitions etc to involve the masses
          under the esteemed nation of the organisation to carry forth and
          express it's legacy. This is one of the very first club in DIT
          UNIVERSITY which is associated with a tech giant and that means this
          is a great step taken by the students and staff of DIT university.
        </div>
        <div className="container">
          <Spline scene="https://prod.spline.design/6YGyhAfGaVkSiw8M/scene.splinecode" />
        </div>
      </div>
      <div className="shortCards">
        {list.map((item, index) => {
          return <ShortCard key={index} in={item.in} name={item.name} />;
        })}
      </div>
    </main>
  );
}
