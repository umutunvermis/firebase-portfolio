import React from 'react';
import Card from '../Card/Card.jsx';
import './CardBoard.css';

function CardBoard() {
  // Your custom data
  const cardData = [
    {
      title: "Umut",
      text: "This is a card about Umut.",
      img: "/doge.jpg"
    },
    {
      title: "Doge",
      text: "This is a card about Doge.",
      img: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Cat",
      text: "This is a card about Cat.",
      img: "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
    },
    {
      title: "Bird",
      text: "This is a card about Bird.",
      img: "https://media.istockphoto.com/id/1307609675/photo/bluebird.jpg?s=612x612&w=0&k=20&c=PdSeFBXLNi2n8vNxDjubRQOsaOw_sJ1w7RhtxjGL5GM="
    },
    {
      title: "Fish",
      text: "This is a card about Fish.",
      img: "https://www.aqueon.com/-/media/project/oneweb/aqueon/us/blog/ways-to-know-your-fish-are-happy/fish-are-happy-and-healthy-1.png"
    },
    {
      title: "Lizard",
      text: "This is a card about Lizard.",
      img: "https://cdn.mos.cms.futurecdn.net/4Uku35mJGAixE3hvjoBWSj.jpg"
      },
    /*
    {
      title: "Someone"
      // This will use default text and image from your Card component
    }
    */
  ];

  return (
    <div className="cardboard">
      {cardData.map((card, index) => (
        <Card 
          key={index}
          title={card.title ?? "Anonym"}
          text={card.text ?? "Well, this is a card."}
          img={card.img ?? "https://cdn-icons-png.flaticon.com/512/4123/4123841.png"}
        />
      ))}
    </div>
  );
}

export default CardBoard;