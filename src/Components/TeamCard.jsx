import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import "../Styles/team.css";
import "../Styles/about.css";

export default function TeamCard(params) {
  return (
    <div className="teamCard" key={params.index}>
      <div className="topTC">
        <img src={params.img} alt={params.name} />
      </div>
      <div className="bottomTC">
        <p className="nameTC">{params.name}</p>
        <p className="titleTC">{params.title}</p>
        <p className="bioTC">{params.bio}</p>
      </div>
      <div className="followTC">
        {params.in && (
          <a href={params.in} target="_blank" rel="noreferrer">
            <BsLinkedin className="iconTC" />
          </a>
        )}
        {params.insta && (
          <a href={params.insta} target="_blank" rel="noreferrer">
            <BsInstagram className="iconTC" />
          </a>
        )}
        {params.git && (
          <a href={params.git} target="_blank" rel="noreferrer">
            <BsGithub className="iconTC" />
          </a>
        )}
      </div>
    </div>
  );
}

export function ShortCard(params) {
  return (
    <a className="shortCard" href={params.in} target="_blank" rel="noreferrer">
      <BsLinkedin className="shortIcon" />
      <div className="shortName">{params.name}</div>
    </a>
  );
}
