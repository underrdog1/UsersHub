import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchUsers } from "../store/userSlice";
import "./UserDetailPage.css";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state: RootState) => state.users);
  const user = users.find((user) => user.id === Number(id));

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  if (loading) {
    return <div>Loading user details...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className ="user-detail-page">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address.city}</p>
      <button onClick={() => navigate(`/edit-user/${user.id}`)}>Edit User</button>
    </div>
  );
};

export default UserDetailPage;