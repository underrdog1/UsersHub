import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import AddUserPage from "./pages/AddUserPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
