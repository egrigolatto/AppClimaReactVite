import React from 'react';
import './Header.css'
import { motion } from 'framer-motion';

const Header = () => {
    return(
        <div className='header'>
           <motion.h1 className='titulo'
           transition={{duration:2}}
           initial={{x:-1000}}
           animate={{x:-0}}
           >App Clima con OpenWeather</motion.h1> 
        </div>
    )
}

export { Header }