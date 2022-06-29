import React from "react";
import Spline from "@splinetool/react-spline";
import "../Styles/home.css";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="intro">
        <div className="intro-text">
          Welcome to the home of,
          <p>
            Microsoft Learn <br /> Student Ambassadors
          </p>
        </div>
        <div className="splineContainer">
          <Spline
            className="laptop"
            scene="https://prod.spline.design/xwK9gLBUqioblNhP/scene.splinecode"
          />
        </div>
        <a href="#overview">
          <div className="circle">
            <FaChevronDown fill="#000" size="35" className="downicon" />
          </div>
        </a>
      </div>
      <section id="overview">
        <div className="overview-left">
          <h2 className="title">Overview</h2>
          <div className="overview-content">
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
              facere magni sint hic consectetur, atque aliquam! Temporibus
              soluta explicabo, aliquam suscipit provident odit aliquid ipsa
              sunt quas corrupti deleniti illo. Neque, numquam sapiente. Quasi,
              porro placeat, sapiente voluptatum ullam quaerat magni quidem
              saepe harum quos pariatur incidunt cumque ipsum ipsam a vitae ad,
              sequi recusandae sed eum at velit deserunt illum cupiditate.
              Voluptas, distinctio doloremque quaerat assumenda aut unde
              consequuntur excepturi fuga nobis sit a. Fugiat vel ipsa enim
              natus eligendi, expedita voluptates, dolorem dolore doloremque
              distinctio omnis! Suscipit harum at saepe voluptatem assumenda
              sunt veniam excepturi porro veritatis autem enim temporibus esse
              incidunt voluptatibus impedit, deserunt architecto. Nobis quae
              dolore assumenda ipsam ad distinctio id recusandae sunt veniam,
              repudiandae obcaecati enim veritatis nulla consequuntur tempora
              itaque! Ut numquam quam laborum quisquam, repudiandae.
            </p>
          </div>
        </div>
        <div className="overview-right">
          <Spline
            className="girlAvatar"
            scene="https://prod.spline.design/IszzwVGYA93J0zeJ/scene.splinecode"
          />
        </div>
      </section>
    </main>
  );
}
