import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import MenuContainer from './MenuContainer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CartContainer from './CartContainer'

const MainContainer = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])
  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  const rowContainerRef = useRef()

  useEffect(() => {}, [scrollValue, cartShow])
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      exit={{ y: 200, transition: { duration: 0.3 }, opacity: 0 }}
      className="scroll-smooth w-full h-auto flex flex-col items-center justify-center "
    >
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative ">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
              className="before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-orange-400 to-orange-600 "
            ></motion.div>
            Our Fresh & Healthy Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronLeft onClick={() => setScrollValue(-200)} className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            >
              <MdChevronRight onClick={() => setScrollValue(200)} className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer flag={true} scrollValue={scrollValue} data={foodItems} />
        {/* data={foodItems?.filter((n) => n.category === 'fruits')} */}
      </section>

      <MenuContainer />
      {cartShow && <CartContainer />}
    </motion.div>
  )
}

export default MainContainer
