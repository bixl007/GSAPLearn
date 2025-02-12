import React from 'react'
import { anticipate, motion } from 'motion/react'

const App = () => {
  return (
    <div>
      <motion.div className='box'
      initial={{
        x: -1000,
        rotate: 0,
      }}
      animate={{
        x: 1000,
        rotate: 360,
      }} 
      transition={{
        duration: 3,
        delay: 2,
        repeat: Infinity,
        ease: 'anticipate'
      }}
      >

      </motion.div>
      <motion.div className='circle'
      initial={{
        x: -1000,
        rotate: 0,
      }}
      animate={{
        x: 1000,
        rotate: 360,
      }} 
      transition={{
        duration: 3,
        delay: 2,
        repeat: Infinity,
        ease: 'anticipate'
      }}
      >

      </motion.div>
    </div>
  )
}

export default App