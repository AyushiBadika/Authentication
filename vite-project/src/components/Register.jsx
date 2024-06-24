import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
export default function Register() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      toast.success("User Registered Successfully", { position: "top-center" });
      setfname("");
      setEmail("");
      setlname("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, { position: "bottom-center" });
    }
  };
  return (
    <div>
      <h3 className="font-bold text-center mb-6">Register</h3>
      <form action="" onSubmit={handleRegister}>
        <div className="flex justify-between gap-2 mb-4">
          <label>First name</label>
          <input
            className="border-2 rounded-md pl-2"
            type="text"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            placeholder="First name"
          />
        </div>
        <div className="flex justify-between gap-2 mb-4">
          <label>Last name</label>
          <input
            className="border-2 rounded-md pl-2"
            type="text"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-2 mb-4">
          <label>Email address</label>
          <input
            className="border-2 rounded-md pl-2"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between gap-2 mb-4">
          <label>Password</label>
          <input
            className="border-2 rounded-md pl-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded-md mb-4 relative left-1/2 -translate-x-1/2">
          Register
        </button>
      </form>
      <p className="text-sm text-right">
        Already registered{" "}
        <Link to="/" className="font-bold text-blue-500">
          Login
        </Link>
      </p>
    </div>
  );
}
