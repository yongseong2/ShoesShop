import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({ // useState와 비슷함
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeName(state) {
      return 'john' + state
    }
  }
})

const cart = createSlice({
  name: 'cart',
  initialState:
    [
      { id: 0, name: 'White and Black', count: 2 },
      { id: 2, name: 'Grey Yordan', count: 1 }
    ],
  reducers: {
    changeCartNum(state, action) {
      const cartIdx = state.findIndex(cartItem => cartItem.id === action.payload.id)
      if (cartIdx !== -1) {
        state[cartIdx].count += 1;
      }
    }
  }
})

export default configureStore({ // state 등록
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})

export const { changeName } = user.actions
export const { changeCartNum } = cart.actions