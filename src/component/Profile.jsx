import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logoutUser } from "../utils/authslice";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
  };

  return user ? (
    <div className="text-center m-10">
      <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
      <button className="bg-red-500 text-white px-6 py-2 rounded mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  ) : (
    <p className="text-center">Please log in.</p>
  );
};

export default Profile;
