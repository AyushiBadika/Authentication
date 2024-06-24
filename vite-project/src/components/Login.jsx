import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      window.location.href = "./profile";
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="">
      <h3 className="font-bold text-xl text-center mb-6">Login</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2 mb-4">
          <label htmlFor="email" className="font-bold">
            Email Address :
          </label>
          <input
            className="border-2 rounded-md pl-2"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="flex justify-between  mb-4">
          <label htmlFor="password" className="font-bold">
            Password :
          </label>
          <input
            className="border-2 rounded-md pl-2"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md mb-4 relative left-1/2 -translate-x-1/2">
          Login
        </button>
      </form>
      <p className="text-sm text-right">
        New user{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Register Here
        </Link>
      </p>
    </div>
  );
}
