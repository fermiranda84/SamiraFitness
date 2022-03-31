import Image from 'react-bootstrap/Image'
import mainCirculo from'../images/mainCirculo.png'
import { MainBody } from './MainBody'

export const Main = () => {
    return(

       <>
        <div className="d-flex align-items-center container mainContainer justify-content-between">
            <div>
                    <h2 className="tituloMain fw-bold mb-4">Una meta sin un plan es solo un deseo</h2>
                
                    <div className='textMain'>
                        <p>Hola! Me llamo Samira y soy entrenadora.</p>
                        <p>Siempre me apasionó entrenar y tener una vida saludable, motivo por el cual quise aprender más acerca del entrenamiento y sobre distintas disciplinas.</p>
                        <p>Con el tiempo entendí que la alimentación, entrenamiento y descanso son parte de un todo, y por eso decidí certificarme también en nutrición deportiva.</p>
                    </div>
                    <button className="botonMain btn btn-light rounded-pill px-5 fw-bold mt-4">Ver programas</button>
            </div>
            <div>
            <Image className='mainCirculo' src={mainCirculo} fluid />
            </div>
        </div>

        <MainBody/>

       </>

    )
}