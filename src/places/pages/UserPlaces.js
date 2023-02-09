import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import DUMMY_PLACES from "../utils/DUMMY_PLACES";

const UserPlaces = () => {
  const { userId } = useParams();
  console.log(userId);
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
