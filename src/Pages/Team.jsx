import React from "react";
import TeamCard from "../Components/TeamCard";
import "../Styles/team.css";
import Panel from "../Components/Panel";
import P1 from "../media/Shubh Khanna.png";
import P2 from "../media/Ansh Tyagi.png";
import P3 from "../media/Utkarsh Dwivedi.png";
import P4 from "../media/Shubh Khanna.png";
import P5 from "../media/Ameesha Thakur.jpg";
import P6 from "../media/Raghav Gupta.png";
import P7 from "../media/Shubh Khanna.png";
import P8 from "../media/naman.jpg";
import P9 from "../media/Vanshika Agarwal.png";
import P10 from "../media/Jyotin Rustagi.png";
import P11 from "../media/shivani bahuguna.png";
import P12 from "../media/Aditi Sharma.png";
import P13 from "../media/Naman2.jpg";
import P14 from "../media/Navdha Talwar.png";
import P15 from "../media/PRAJJWAL CHAUHAN.png";
import P16 from "../media/Vanshika Agarwal.png";
import P17 from "../media/prisha.png";
import P18 from "../media/Naman2.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Shubh Khanna",
      title: "Technical Head",
      img: P1,
    },
    {
      name: "Ansh Tyagi",
      title: "Management Head",
      img: P2,
    },
    {
      name: "Utkarsh Dwivedi ",
      title: "Project Manager",
      img: P3,
    },
    {
      name: "Ashutosh Kashyap ",
      title: "Director of Communication",
      img: P4,
    },
    {
      name: "Ameesha Thakur ",
      title: "Marketing Associate",
      img: P5,
    },
    {
      name: "Raghav Gupta",
      title: "Marketing Head",
      img: P6,
    },
    {
      name: "Harshit Rustogi ",
      title: "Management Associate",
      img: P7,
    },
    {
      name: "Naman Pokhriyal",
      title: "Team Member",
      img: P8,
      bio: "How you doin'?",
      in: "https://www.linkedin.com/in/naman-pokhriyal/",
      insta: "https://www.instagram.com/trynamanp",
      git: "https://github.com/Naman-pokhriyal",
    },
    {
      name: "Vanshika Agarwal",
      title: "Team Member",
      img: P9,
      bio: "Caffeine <=> Code",
      in: "https://www.linkedin.com/in/vanshika-agarwal-b83251215/",
      insta: "https://www.instagram.com/vanshika_agarwal_/",
      git: "https://github.com/vanshika-13",
    },
    {
      name: "Jyotin Rustagi",
      title: "Team Member",
      img: P10,
      bio: "Computers are fast;I keep it slow",
      in: "https://www.linkedin.com/in/jyotin-rustagi-497824213/",
      insta: "https://www.instagram.com/thejyotinrustagi/",
      git: "https://github.com/JyotinR",
    },
    {
      name: "Shivani Bahuguna ",
      title: "Team Member",
      img: P11,
      bio: "Keeping it simple",
      in: "https://www.linkedin.com/in/shivani-bahuguna",
      insta: "https://www.instagram.com/_shivani_bahuguna_/",
      git: "https://github.com/Shivani-Bahuguna",
    },
    {
      name: "Aditi Sharma",
      title: "Team Member",
      img: P12,
      bio: "Living in the dark mode in IDEs and Life",
      in: "https://www.linkedin.com/in/aditi-sharma-7a981b202/",
      insta: "https://www.instagram.com/_aditi5harma_/",
      git: "https://github.com/Aditi5harma",
    },
    { name: "Keerti Adhikari", title: "Team Member", img: P13 },
    {
      name: "Navdha Talwar ",
      title: "Team Member",
      img: P14,
    },
    {
      name: "Prajjwal Chauhan ",
      title: "Team Member",
      img: P15,
    },
    {
      name: "Vanshika Dargan",
      title: "Team Member",
      img: P16,
    },
    {
      name: "Priyanshi Jain ",
      title: "Team Member",
      img: P17,
    },
    {
      name: "Ankit Nainwal",
      title: "Team Member",
      img: P18,
    },
  ];
  return (
    <main>
      <Panel title="Meet The Team" />
      <div className="teamContainer">
        <div className="teamCards">
          {teamMembers.map((item, index) => {
            return (
              <TeamCard
                key={index}
                name={item.name}
                title={item.title}
                bio={item.bio}
                img={item.img}
                in={item.in}
                insta={item.insta}
                git={item.git}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
