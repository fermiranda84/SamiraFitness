import Image from 'react-bootstrap/Image'
import line from '../images/line.svg'
import data from '../programas.json'
import { CardProgramas } from './CardProgramas'
import { ArrowUp } from 'react-bootstrap-icons'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Programas = () => {


    console.log(data)

    return (

        <div id='header' className='bg-white'>
            <div className='container mainContainer'>
                    <h2 className="tituloMain pt-5 text-center fw-bold">Programas a tu medida</h2>
                    <Image className='mainBody--line my-2' src={line} fluid />
                    <h5 className='text-center'>Elegí tu plan de entrenamiento</h5>
                    
                    <div className='d-flex flex-column justify-content-center'>
                        <div>
                            <h4 className='programas__categoria mt-5'>Programas personalizados</h4>
                            <div className='d-flex flex-wrap justify-content-between'>
                                { data.programas.map(item=> <CardProgramas key={item.id} item={item}/>) } 
                            </div>
                        </div>

                        <div>
                            <h4 className='programas__categoria'>Clases Online</h4>
                            <div className='d-flex flex-wrap justify-content-between'>
                                { data.clases.map(item=> <CardProgramas key={item.id} item={item}/>) } 
                            </div>
                        </div>

                        <div>
                            <h4 className='programas__categoria'>Extras</h4>
                            <div className='d-flex flex-wrap justify-content-start'>
                                { data.extras.map(item=> <CardProgramas key={item.id} item={item}/>) } 
                            </div>
                        </div>
                    </div>

            </div>
            <div className="text-end container"><a href='#header'><ArrowUp className='footer__arrow' size={25} /></a></div>
            <Footer />
        </div>

    )
}