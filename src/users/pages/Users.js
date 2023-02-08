import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000&t=st=1674405896~exp=1674406496~hmac=8ba89ca0ef5a76d53319bd3f3483cce00cc5bc9e1aecb166b4cc6dac99016c75",
      places: 10,
    },
    {
      id: "u2",
      name: "Jane Doe",
      image:
        "https://img.freepik.com/premium-photo/vertical-shot-motivated-sporty-fit-curly-haired-woman-does-push-ups-poses-fitness-mat-dressed-sportswear-poses-outdoors_273609-55562.jpg?w=996",
      places: 10,
    },
  ];

  return <UsersList users={USERS} />;
};

export default Users;
