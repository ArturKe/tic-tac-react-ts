import { configureStore } from "@reduxjs/toolkit";
// import { createStoreHook,  } from "react-redux";

// 
import { combineReducers } from "redux"; 

const rootReducer = combineReducers({

})
export const store = configureStore({
    reducer: rootReducer
})

console.log(store)

export type RootState = ReturnType<typeof rootReducer>