import React from "react";
import UserForm from "../components/UserForm";
import './AddUserPage.css';

const AddUserPage: React.FC = () => {
  return (
    <div className="add-user-page">
      <div className="welcome-message">
        Welcome to our application! Please fill out the form below to add a new user.
      </div>
      <UserForm />
    </div>
  );
};

export default AddUserPage;