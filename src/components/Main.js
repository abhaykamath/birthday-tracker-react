import React from "react";
import "../styles/Main.css";
import Card from "./Card";

function Main() {
  const data = [
    {
      id: "abhay",
      name: "M Abhay Kamath",
      src: "../abhay.png",
      date: "January 22nd",
      day: 22,
      month: 1,
    },
    {
      id: "rihan",
      name: "Rihan Rajan",
      src: "../rihan.JPG",
      date: "August 15th",
      day: 15,
      month: 8,
    },
    {
      id: "mudit",
      name: "Mudit Vyas",
      src: "../mudit.jpeg",
      date: "November 6th",
      day: 6,
      month: 11,
    },
    {
      id: "nirmal",
      name: "Nirmal Suresh",
      src: "../nirmal.JPG",
      date: "June 14th",
      day: 14,
      month: 6,
    },
    {
      id: "kumar",
      name: "Kumar Ramesh",
      src: "../kumar.jpg",
      date: "December 6th",
      day: 6,
      month: 12,
    },
    {
      id: "sashank",
      name: "Sashank Soundar",
      src: "../sashank.jpg",
      date: "April 27th",
      day: 27,
      month: 4,
    },
    {
      id: "praneeth",
      name: "Praneeth Lanka",
      src: "../praneeth.jpg",
      date: "April 20th",
      day: 20,
      month: 4,
    },
    {
      id: "navneeth",
      name: "Navneeth",
      src: "../navneeth.jpg",
      date: "February 19th",
      day: 19,
      month: 2,
    },
    {
      id: "rakshith",
      name: "Rakshit M Kotian",
      src: "../rakshit.jpg",
      date: "January 31st",
      day: 31,
      month: 1,
    },
  ];
  return (
    <div id="main-container">
      <div id="left-pane">
        {data
          .sort((a, b) => {
            if (a.day < b.day) return -1;
          })
          .sort((a, b) => {
            if (a.month < b.month) return -1;
          })
          .map((person) => {
            return <Card key={person.id} data={person} />;
          })}
      </div>
      <div id="right-pane"></div>
    </div>
  );
}

export default Main;
