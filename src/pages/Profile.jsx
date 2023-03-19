import React from "react";
import { useParams } from "react-router-dom";

const data = {
  hong: {
    name: "홍은기",
    description: "나는 홍은기다",
  },
  bokyung: {
    name: "이보경",
    description: "여자친구",
  },
};

function Profile() {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
}

export default Profile;
