import { createSlice } from '@reduxjs/toolkit';

const recent = createSlice({
  name: 'recent',
  initialState: [],
  reducers: {
    saveRecent(state, action) {
      const { id } = action.payload;
      const existingShoeIndex = state.findIndex(shoe => shoe.id === id);

      if (existingShoeIndex !== -1) {
        // Remove the existing shoe from its current position
        const existingShoe = state.splice(existingShoeIndex, 1)[0];
        // Add the existing shoe to the front of the array
        state.unshift(existingShoe);
      } else {
        state.unshift(action.payload);
      }
    }
  }
});

export default recent;
export const { saveRecent } = recent.actions;
