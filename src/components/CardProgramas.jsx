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


export const CardProgramas = (data) => {

    let imgUrl

     switch(data.item.imagen) {

            case 'programaMensual':
             imgUrl = programaMensual;
            break;

            case 'EightWeeksProgram':
             imgUrl = EightWeeksProgram;
            break;

            case 'TwelveWeeksProgram':
                imgUrl = TwelveWeeksProgram;
            break;

            case 'clasesAdvance':
                imgUrl = clasesAdvance;
            break;

            case 'TwelveClasesOnline':
                imgUrl = TwelveClasesOnline;
            break;

            case 'TwentyClasesOnline':
                imgUrl = TwentyClasesOnline;
            break;

            case 'recetario':
                imgUrl = recetario;
            break;

            case 'giftCard':
                imgUrl = giftCard;
            break;

     }

    return(

       <div className='d-flex flex-column me-5 mt-2'>
            <div className='cardProgramas__card m-2 p-2'>
                    <div className='mainBody--card--text rounded p-1 text-center fw-bold mb-2'>{data.item.titulo}</div>
                    <Image className='mainBody--card--img' src={imgUrl} fluid />
                    <div className='mainBody--card--text rounded p-1 text-center fw-bold mt-2'>
                        <h2>${data.item.precio}</h2>
                        <div className='cardProgramas__card--sizeTexto'>{data.item.duracion}</div>
                        <div className='cardProgramas__card--sizeTexto'>{data.item.descripcion}</div>
                    </div>
            </div>
            <Button className='botonMain btn-light rounded-pill px-3 fw-bold mt-4' variant="primary" type="submit">
                            Agregar al carrito
            </Button>
       </div>

    )
}