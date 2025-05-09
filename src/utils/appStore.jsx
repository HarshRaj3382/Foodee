// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
// import authReducer from "./authslice";


// const appStore=configureStore({
//     reducer: {
//         cart:cartReducer,
//         auth: authReducer,
//     }
// });

// export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.jsx";
import authReducer from "./authslice.jsx";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default appStore;

