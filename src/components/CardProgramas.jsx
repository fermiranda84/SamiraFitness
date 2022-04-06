import Image from 'react-bootstrap/Image'
import programaMensual from '../images/programa-1.jpg'
import EightWeeksProgram from '../images/programa-2.jpg'
import TwelveWeeksProgram from '../images/programa-3.jpg'
import clasesAdvance from '../images/programa-4.jpg'
import TwelveClasesOnline from '../images/programa-5.jpg'
import TwentyClasesOnline from '../images/programa-6.jpg'
import recetario from '../images/programa-7.jpg'
import giftCard from '../images/programa-8.jpg'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'


export const CardProgramas = (data) => {
    
const [imagen, setImagen] = useState('')


useEffect(() => {
    

    switch(data.item.imagen) {
    
           case 'programaMensual':
            setImagen(programaMensual)
           break;
    
           case 'EightWeeksProgram':
            setImagen(EightWeeksProgram)
           break;
    
           case 'TwelveWeeksProgram':
            setImagen(TwelveWeeksProgram)
           break;
    
           case 'clasesAdvance':
            setImagen(clasesAdvance)
           break;
    
           case 'TwelveClasesOnline':
             setImagen(TwelveClasesOnline)
           break;
    
           case 'TwentyClasesOnline':
              setImagen(TwentyClasesOnline)
           break;
    
           case 'recetario':
             setImagen(recetario)
           break;
    
           case 'giftCard':
             setImagen(giftCard)
           break;
    
           default:
               setImagen(programaMensual)
           break;
    
    }
}, [data.item.imagen])


    return(

       <div className='d-flex flex-column me-xl-5 mt-2 mb-5'>
            <div className='cardProgramas__card m-2 p-2'>
                    <div className='mainBody--card--text rounded p-1 text-center fw-bold mb-2'>{data.item.titulo}</div>
                    <Image className='mainBody--card--img' src={imagen} fluid />
                    <div className='mainBody--card--text rounded p-1 text-center fw-bold mt-2'>
                        <div className='cardProgramas__card--sizePrecio'>${data.item.precio}</div>
                        <div className='cardProgramas__card--sizeTexto'>{data.item.duracion}</div>
                        <div className='cardProgramas__card--sizeTexto'>{data.item.descripcion}</div>
                    </div>
            </div>
            <Button className='botonMain btn-light rounded-pill px-3 fw-bold mt-2' variant="primary" type="submit">
                            Agregar al carrito
            </Button>
       </div>

    )
}