import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { updateUser } from "../store/userSlice";

const EditUserPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) =>
    state.users.users.find((user) => user.id === Number(id))
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        city: user.address.city,
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser({ id: Number(id), ...formData, address: { city: formData.city } }));
    navigate(`/users/${id}`);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUserPage;
