import React from "react";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // CSS import

const Home = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // current logged-in user

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h2>Welcome!</h2>

      <div className="user-info">
        <p>
          <strong>Name:</strong> {user?.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
