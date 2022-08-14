import React from "react";
import Jeremy from "../assets/image-jeremy.png";

interface Props {
  name: string;
}

function ProfileCard({ name }: Props) {
  return (
    <div className="profile__card-container">
      <div className="profile__top">
        <img
          className="profile__image"
          src={Jeremy}
          alt="Jeremy Image"
          width={64}
        />
        <div className="profile__top--text">
          <p>Report for</p>
          <p>{name}</p>
        </div>
      </div>
      <div className="profile__bottom">test</div>
    </div>
  );
}

export default ProfileCard;
