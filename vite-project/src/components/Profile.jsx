import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUser = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = await doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      }
    });
  };
  useEffect(() => fetchUser, []);

  const signOut = async () => {
    try {
      await auth.signOut();
      window.location.href = "/";
    } catch (error) {
      console.log("Error logging out :" + error.message);
    }
  };
  return (
    <div>
      {userDetails ? (
        <div className="flex flex-col gap-2">
          <p>
            Welcome{" "}
            <span className="font-bold ">
              {userDetails.firstName} {userDetails.lastName}
            </span>
          </p>
          <p>
            {" "}
            <span className="font-bold ">Email </span>: {userDetails.email}
          </p>
          <button
            onClick={signOut}
            className="bg-blue-500 text-white px-4 py-1 rounded-md my-4 relative left-1/2 -translate-x-1/2"
          >
            Log out
          </button>
        </div>
      ) : (
        "Loading...."
      )}
    </div>
  );
}
