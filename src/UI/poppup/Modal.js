import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdCloseCircle } from 'react-icons/io';

import './popup.css';

const Modal = props => {


  return (
    <motion.div layout>
      <AnimatePresence>
        {props.state &&
        <motion.div 
          className='modal'
          layout
          initial={{position: 'fixed',  opacity: 0, scale: 0, y: '-50%', x: '-50%', top: '0%', left: '50%'}}
          animate={{position: 'fixed', opacity: 1, scale: 1, y: '-50%', x: '-50%', top: '50%', left: '50%'}}
          exit={{position: 'fixed', opacity: 0, scale: 0, y: '-50%', x: '-50%', top: '0%', left: '50%'}}
        >
          <button className='btn_close_modal' onClick={() =>props.setState(false)}><IoMdCloseCircle/></button>
          {props.children}
        </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}

export default Modal