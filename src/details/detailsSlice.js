import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  userStatus: false,
  cards: [{ 
    flashCardName: 'Mathematics',
    Content: "Algebra , Statics and Higher Mathematics.",
    message: "9 * 2 + 7 - 2 / 3 * 10 ^ 3"
  } , { 
    
    flashCardName: 'SMS',
    Content: "Algebra , Statics and Higher Mathematics.",
    message: "Message Hai Ye To"
  }]
};

const detailSlice = createSlice({
  name: 'detail',
  initialState, 
  reducers: {
  
    addCard: (state, action) => {
      state.cards.push(action.payload); // Push new card to the cards array
    } , 
    deleteCard : (state , action)=>{
        const remain = state.cards.filter((id)=> id != action.payload.id)
        state.cards = remain;
    }
  }
});

export const { addCard ,deleteCard } = detailSlice.actions;

export const selectCards = (state) => state.detail.cards;

export const detailReducers = detailSlice.reducer;
