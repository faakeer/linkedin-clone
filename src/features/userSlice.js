import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    
    logout: (state) => {
      state.user = null;
    },
  },
  
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;

// import React from "react";
// import { combineReducers, createStore, createSlice } from "@reduxjs/toolkit";
// import { connect, Provider, useDispatch, useSelector } from "react-redux";

// // your part
// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state, action) => {
//       state.user = null;
//     }
//   }
// });

// const { login, logout } = userSlice.actions
// const selectUser = (state) => state.user.user;

// // what I added
// const reducer = combineReducers({
//   user: userSlice.reducer
// });

// const store = createStore(reducer);

// const Main = (props) => {
//   const dispatch = useDispatch() // I used this to check if reducers work
//   const user = useSelector( selectUser )

//   return (
//     <div onClick={ () => { dispatch(login({name: "Adam"})) }}>
//         { !user ? "LOGIN" : "DASHBOARD "}
//     </div>
//   )
// }

// const mapStateToProps = (state) => ({
//   user: state.user
// });

// const Container = connect(mapStateToProps, { login, logout })(Main);

// function App() {
//   return (
//     <Provider store={store}>
//       <Container/>
//     </Provider>
//   );
// }

// export default App;
