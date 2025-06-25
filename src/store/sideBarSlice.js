import { createSlice } from "@reduxjs/toolkit";

const initialState = false ;

const sideBarSlice = createSlice({
    name : 'sideBar' ,
    initialState,
    reducers : {
        toggleSideBar : (state , action) => {
            console.log(action.payload)
            return state = action.payload ;
        }
    }
})

 export const  {toggleSideBar} =  sideBarSlice.actions ;
export default sideBarSlice.reducer;