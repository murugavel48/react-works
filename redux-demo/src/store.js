import { configureStore } from "@reduxjs/toolkit";
import counterreducer from "./counterreducer";
import accountreducer from "./bankAccReducer";
import todosreducer from "./todosreducer";
import bookreducer from "./bookreducer";
import postReducer from "./postReducer";
import postByIdReducer from "./postByIdReducer";

export const store=configureStore({
   reducer:{
    counter: counterreducer,
    bankAccount: accountreducer,
    todos: todosreducer,
    books: bookreducer,
    postRequest: postReducer,
    postByIdRequest: postByIdReducer

   } 
})

//state.counter.count