import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice.js'
import recent from './recentSlice.js'


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
    minusCartNum(state, action) {
      const cartIdx = state.findIndex(cartItem => cartItem.id === action.payload)
      if (cartIdx !== -1) {
        state[cartIdx].count -= 1
      }
      if (state[cartIdx].count === 0) {
        state.splice(cartIdx, 1)
      }
    },
    orderShoe(state, action) {
      const cartIdx = state.findIndex((el) => el.id === action.payload.id)
      if (cartIdx === -1) {
        state.push(
          {
            id: action.payload.id,
            name: action.payload.title,
            count: 1
          }
        )
        alert('상품이 추가되었습니다.')
      }
      else {
        alert('장바구니에 존재하지만 추가됐어요.')
        // 주문하기 버튼 누를 때 이미 상품이 state안에 있으면 추가가 아니라 기존 항목 수량증가만?
        state[cartIdx].count += 1
      }
    },
    deleteShoe(state, action) {
      const cartIdx = state.findIndex(cartItem => cartItem.id === action.payload)
      if (cartIdx !== -1) {
        state.splice(cartIdx, 1)
      }
    }
  }
})

export default configureStore({ // state 등록
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    recent: recent.reducer
  }
})

export const { changeCartNum, minusCartNum, orderShoe, deleteShoe } = cart.actions