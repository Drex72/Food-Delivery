import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'

const CartItem = ({ item, flag, setFlag }) => {
  let items = []
  const [{ cartItems }, dispatch] = useStateValue()
  const [qty, setQty] = useState(item.qty)

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartItems,
    })
  }
  const updateQty = (action, id) => {
    if (action == 'add') {
      setQty(qty + 1)
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1
          setFlag(flag + 1)
        }
      })
      cartDispatch()
    } else {
      if (qty == 1) {
        items = cartItems.filter((item) => item.id !== id)
        setFlag(flag + 1)
        cartDispatch()
      } else {
        setQty(qty - 1)
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1
            setFlag(flag + 1)
          }
        })
        cartDispatch()
      }
    }
  }

  useEffect(() => {
    items = cartItems
    localStorage.setItem('CartItems', JSON.stringify(cartItems))
  }, [qty, items, cartItems])

  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      key={item.id}
      className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2"
    >
      <img
        src={item.imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />
      {/* Name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">$ {item?.price * qty}</p>
      </div>

      {/* Button Section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty('remove', item?.id)}>
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-s bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div whileTap={{ scale: 0.75 }} onClick={() => updateQty('add', item?.id)}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CartItem
