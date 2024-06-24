import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";
import "./App.css";
export default function App() {
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => setUser(user));
  // });
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center rounded-md py-8 px-8 shadow-md">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
