import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    welcomeText: "",
    sentimentScore: null,
}

const CustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setWelcomeText: (state, action) => {
            state.welcomeText = action.payload;
        },
        setSentimentScore: (state, action) => {
            state.sentimentScore = action.payload;
        },
    },
});

export const { setSentimentScore, setWelcomeText } = CustomerSlice.actions;
export default CustomerSlice.reducer;
