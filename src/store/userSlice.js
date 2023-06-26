import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({ // useState와 비슷함
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'park'
    },
    changeAge(state) {
      state.age += 1
    }
  }
})

export default user
export const { changeName, changeAge } = user.actions
