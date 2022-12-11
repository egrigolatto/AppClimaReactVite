import React from 'react';
import './AppClima.css'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from '../Card/Card';
import {motion} from 'framer-motion'

const AppClima = () => {

    const [clima,setClima] = useState('')
    const [buscar, setBuscar] = useState('')
    const [noencontrado,setNoencontrado] = useState(false)
   

    const [pronostico0,setPronostico0] = useState('')
    const [pronostico1,setPronostico1] = useState('')
    const [pronostico2,setPronostico2] = useState('')
   
    const urlClima =`https://api.openweathermap.org/data/2.5/weather?q=${buscar}&appid=84961c0acfb1f30a23426d2e087bcbca&units=metric&lang=es`
    const urlPronostico =`https://api.openweathermap.org/data/2.5/forecast?q=${buscar}&appid=84961c0acfb1f30a23426d2e087bcbca&units=metric&lang=es`
   
     
    const obtenerClima = async () =>{ 
    try{
        const response =await axios.get(urlClima)
            //console.log(response.data)
            setClima(response.data)  
            setNoencontrado(false)
        } catch (error) {
            //console.log(error)
            setNoencontrado(true)
        }
    }

    const obtenerPronostico = async () =>{ 
        try{
            const response =await axios.get(urlPronostico)
                //console.log(response.data)
                setPronostico0(response.data.list[0])  
                setPronostico1(response.data.list[1])
                setPronostico2(response.data.list[2])
                setNoencontrado(false)
            } catch (error) {
                //console.log(error)
                setNoencontrado(true)
            }
        }

useEffect(()=>{
    if(clima){  
       obtenerPronostico()
    }    
},[clima])

    return(
        <div className='contenedor'>

            {/* buscador */}

            <motion.div className="inputCont"
            transition={{delay:2,type:'spring'}}
            initial={{y:-252}}
            animate={{y:0}}
            >
            <div className='inputCont1'>

            <input 
            className='input'
            type="text" 
            placeholder='Ingrese el nombre de la ciudad'
            autoFocus
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
            />
            <button 
            className='boton' 
            onClick={() => obtenerClima()}
            >
            Buscar</button>
            </div>
            </motion.div>

            <Card
            clima={clima}
            pronostico0={pronostico0}
            pronostico1={pronostico1}
            pronostico2={pronostico2}
            noencontrado={noencontrado}
            
            />
        </div>
    )
}

export { AppClima }