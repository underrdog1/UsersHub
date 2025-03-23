import React from "react";
import UserList from "../components/UserList";
import { Link } from "react-router-dom";
import './UsersPage.css';

const UsersPage: React.FC = () => {
  return (<><Link to={"/add-user"} className="add-user-link">Add User</Link><UserList /></>);
};

export default UsersPage;
