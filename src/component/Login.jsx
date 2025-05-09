// import { useState } from "react";
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "../utils/authslice";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSignup, setIsSignup] = useState(false);
//   const dispatch = useDispatch();

//   const handleAuth = async () => {
//     try {
//       let userCredential;
//       if (isSignup) {
//         userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       } else {
//         userCredential = await signInWithEmailAndPassword(auth, email, password);
//       }
//       dispatch(setUser(userCredential.user));
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-2xl font-bold mb-4">{isSignup ? "Sign Up" : "Login"}</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         className="border p-2 rounded w-64 mb-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border p-2 rounded w-64 mb-4"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="bg-blue-500 text-white px-6 py-2 rounded" onClick={handleAuth}>
//         {isSignup ? "Sign Up" : "Login"}
//       </button>
//       <p className="mt-4 cursor-pointer text-blue-500" onClick={() => setIsSignup(!isSignup)}>
//         {isSignup ? "Already have an account? Login" : "New here? Sign up"}
//       </p>
//     </div>
//   );
// };

// export default Login;
// // 