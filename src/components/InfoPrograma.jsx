import * as React from 'react'
import { Footer } from './Footer'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Boton from './Boton'
import imagen from '../images/programa-1.jpg'
import { CardProgramas } from './CardProgramas'
import data from '../programas.json'
import { MainContacto } from './MainContacto'

const InfoPrograma = ({ titulo, deQueSeTrata, aQuienVa, beneficios, img }) => {
    return (
        <Container>
            <Row className="d-flex flex-column align-items-start">
                <h2 className="titulo fw-bold">Titulo</h2>
                <hr style={{ width: '100%' }} />
            </Row>
            <Row>
                <Col xs={12} lg={7}>
                    <Row>
                        <h3>¿De que se trata?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </Row>
                    <Row>
                        <h3>¿A quién va dirigido?</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </Row>
                    <Row>
                        <h3>Beneficios</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </Row>
                </Col>
                <Col xs={12} lg={5} className="d-flex flex-column align-items-center justify-content-start">
                    <img src={imagen} alt="la fotito" width={380} height={380} className="mb-4" />
                    <Boton />
                </Col>
            </Row>
            <Row className="my-5">
                <h3>También te puede interesar:</h3>
                <hr />
                <Stack direction="horizontal" gap={3}>
                    {data?.programas.map((programa, index) =><CardProgramas key={index} item={programa} />)}
                </Stack>
            </Row>
            <hr style={{ width: '100%' }} />
            <Row>
                <MainContacto />
            </Row>
            <Footer />
        </Container>
    )
}

export default InfoPrograma