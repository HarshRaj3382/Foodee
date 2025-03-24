// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../utils/authslice";
// import { setUser } from "../utils/authslice";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       dispatch(loginUser({ email: userCredential.user.email }));
//       navigate("/"); // Redirect to home page after signup
//     } catch (error) {
//       console.error("Signup error:", error.message);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//       <form className="flex flex-col gap-4">
//         <input type="email" placeholder="Email" className="border p-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" className="border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit" onClick={handleSignup} className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
//       </form>
//       <p className="mt-4">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/authslice"; // ✅ Correct action import
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // ✅ Dispatch user details to Redux store
      dispatch(setUser({ email: userCredential.user.email }));

      navigate("/"); // ✅ Redirect to home page after signup
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSignup}>
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2 rounded" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? 
        <Link to="/login" className="text-blue-500 ml-1">Login</Link> 
      </p>
    </div>
  );
};

export default Signup;

