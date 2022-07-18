import React from 'react';
import SingleMessage from './SingleMessage';
import SingleRequset from './SingleRequset';
import { motion, AnimatePresence } from 'framer-motion';


const List = ({ list, type, active, actionHandler, acceptFriend }) => {

  return (
    <motion.div layout>
      <AnimatePresence>
      {active && 
      <motion.ul className={`list ${type}`} style={{position: 'absolute'}}
        layout
        initial={{height: 0}}
        animate={{height: '250px'}}
        exit={{height: 0}}
        >
        {list.map((item, i) => (
          type === 'request' ? <SingleRequset acceptFriend={acceptFriend} actionHandler={actionHandler} key={item.id} request={item} i={i} />
          : type === 'message' ? <SingleMessage key={item.id} actionHandler={actionHandler} i={i} item={item} /> : ''
          ))}
      </motion.ul>}
      </AnimatePresence>
    </motion.div> 
  )
}

export default List