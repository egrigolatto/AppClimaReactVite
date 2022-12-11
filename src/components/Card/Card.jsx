import React from 'react';
import './Card.css'
import Icons from '../Icons/Icons';
import { motion } from 'framer-motion';

const Card = ({
    clima,pronostico0,pronostico1,pronostico2,noencontrado
}) => {

    let fecha = new Date()
    let diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    let fechaComleta = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
    
    return(
        <>

          {/* clima */}

          {clima ? (<motion.div key={clima.id} className="contenedorClima"
          initial={{opacity:0}}
          animate={{opacity:1}}
          >

<div className='cont1'>

    <div className="cont3">
        <div className="cont5">
            <div className='nombre'><h1><i class="bi bi-geo-alt-fill"></i>  {clima.name}, {clima.sys.country}</h1></div>
            <div className='fecha'><h4 >{fechaComleta}</h4></div>
        </div>
    </div>

    <div className="cont4">

        <div className="cont6">
           <div className="icono"><img className='iconoC' src={Icons(clima.weather[0].main)} /></div>
           <div className="descripcion"><h3>{clima.weather[0].description}</h3></div> 
        </div>

        <div className="cont7">
            <h4 className='tempTitulo'>Temperatura actual:</h4>
            <div className='tempC'><h1>{clima.main.temp.toFixed(1)}°</h1> </div>
            <div className="tempMaxMin"><h3><i class="bi bi-thermometer-half"></i> Maxima: {clima.main.temp_max.toFixed(1)}° </h3> </div>
            <div className="tempMaxMin"><h3><i class="bi bi-thermometer-half"></i> Minima: {clima.main.temp_min.toFixed(1)}° </h3> </div>
        </div>

    </div>

</div>

<hr className='hr'/>

<div className='cont2'>
    <div className="datosC"><h4><i class="bi bi-thermometer-half"></i>  Sensacion Termica:  {clima.main.feels_like.toFixed(1)}°</h4></div>
    <div className='datosC'><h4><i class="bi bi-arrow-down-up"></i>  Presion:  {clima.main.pressure} hPa</h4></div>
    <div className='datosC'><h4><i class="bi bi-moisture"></i>  Humedad:  {clima.main.humidity}%</h4></div>
    <div className='datosC'><h4><i class="bi bi-wind"></i>  Velocidad del Viento:  {clima.wind.speed}m/s</h4></div>   
</div>


</motion.div>):null}

{clima ? <motion.h4 className='proximashs'
transition={{duration:2,delay:3}}
initial={{x:-1000}}
animate={{x:-0}}
>
Próximas horas</motion.h4> :null}

{/* Pronostico */}

{pronostico0 ? (<motion.div className="contenedorPronostico"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:2}}
>

<div className="pronostico0">
    <h4 className="horaFecha">{pronostico0.dt_txt.slice(10,-3)} hs</h4>
    <p><img src={Icons(pronostico0.weather[0].main)} alt="" className='icono0' /></p>
     <h4 className="descrip">{pronostico0.weather[0].description}</h4>
    <h4>{pronostico0.main.temp.toFixed(0)}°</h4>
    <h4>{pronostico0.main.temp_max.toFixed(1)}° / {pronostico0.main.temp_min.toFixed(1)}°</h4>
</div>

<div className="pronostico1">
    <h4 className="horaFecha">{pronostico1.dt_txt.slice(10,-3)} hs</h4>
    <p><img src={Icons(pronostico1.weather[0].main)} alt="" className='icono0' /></p>
    <h4 className="descrip">{pronostico1.weather[0].description}</h4>
    <h4>{pronostico1.main.temp.toFixed(0)}°</h4>
    <h4>{pronostico1.main.temp_max.toFixed(1)}° / {pronostico1.main.temp_min.toFixed(1)}°</h4>
</div>

<div className="pronostico2">
    <h4 className="horaFecha">{pronostico2.dt_txt.slice(10,-3)} hs</h4>
    <p><img src={Icons(pronostico2.weather[0].main)} alt="" className='icono0' /></p>
    <h4 className="descrip">{pronostico2.weather[0].description}</h4>
    <h4>{pronostico2.main.temp.toFixed(0)}°</h4>
    <h4>{pronostico2.main.temp_max.toFixed(1)}° / {pronostico2.main.temp_min.toFixed(1)}°</h4>
</div>

</motion.div>) :null}

<div className='error'>
{noencontrado ? <motion.h2
transition={{type:'spring'}}
initial={{y:-252}}
animate={{y:0}}
>
ciudad no encontrada</motion.h2> : null }
</div>

        </>
    )
}

export { Card }