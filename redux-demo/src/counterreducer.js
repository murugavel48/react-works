import {createSlice} from '@reduxjs/toolkit'
//state and actions
export const counterSlice=createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1
    },
    decrement: (state, action) => {
      state.count = state.count - 1
    },
    incrementByInput:(state,action)=>{
      console.log(action.payload)
      state.count=state.count+action.payload    //input
    }
  }
})

export const { increment, decrement, incrementByInput } = counterSlice.actions    // import it in component(UI)
export default counterSlice.reducer                             //Import it in Redux Store (Centralized store)