import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice.js'

// const user = createSlice({ // useState와 비슷함
//   name: 'user',
//   initialState: { name: 'kim', age: 20 },
//   reducers: {
//     changeName(state) {
//       state.name = 'park'
//     },
//     changeAge(state) {
//       state.age += 1
//     }
//   }
// })

const cart = createSlice({
  name: 'cart',
  initialState:
    [
      { id: 0, name: 'White and Black', count: 2 },
      { id: 2, name: 'Grey Yordan', count: 1 }
    ],
  reducers: {
    changeCartNum(state, action) {
      const cartIdx = state.findIndex(cartItem => cartItem.id === action.payload)
      if (cartIdx !== -1) {
        state[cartIdx].count += 1
      }
    },
    orderShoe(state, action) {
      state.push(action.payload)
    }
  }
})

export default configureStore({ // state 등록
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})


export const { changeCartNum, orderShoe } = cart.actions