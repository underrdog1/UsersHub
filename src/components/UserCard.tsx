import React from "react";
import { User } from "../store/userSlice";
import { Link } from "react-router-dom";
import "./UserCard.css";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <Link to={`/users/${user.id}`}>View Details</Link>
    </div>
  );
};

export default UserCard;
