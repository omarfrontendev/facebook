import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import './popup.css'

const Overlay = ({ state, setState }) => {
  return (
    <>
    {/* {state && */}
      <motion.div 
        layout
        // className='overlay'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        // onClick={() => setState(false)}
      >
        <AnimatePresence>
          {state &&     
          <motion.div
            layout
            className='overlay'
            initial={{opacity: 0}}
            animate={{opacity: 0.755555}}
            exit={{opacity: 0}}
            onClick={() => setState(false)}
            >
          </motion.div>}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Overlay