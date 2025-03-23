import React from "react";
import UserList from "../components/UserList";
import { Link } from "react-router-dom";
import './UsersPage.css';

const UsersPage: React.FC = () => {
  return (<div
  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><Link to={"/add-user"} className="add-user-link">
    Add User
  </Link>
  <UserList />
  </div>);
};

export default UsersPage;
