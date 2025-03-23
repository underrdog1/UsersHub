import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC<{ editingUser?: any }> = ({ editingUser }) => {
  const [name, setName] = useState(editingUser?.name || "");
  const [email, setEmail] = useState(editingUser?.email || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      dispatch(updateUser({ ...editingUser, name, email }));
    } else {
      dispatch(addUser({ id: Date.now(), name, email, address: { city: "" } }));
    }
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};

export default UserForm;
