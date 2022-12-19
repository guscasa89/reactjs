import { React, useState, useContext } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Container from 'react-bootstrap/Container';

import { CartContext } from '../../Context/CartContext';

const Checkout = () => {

    const { count, cartList, removeItem, clear } = useContext(CartContext);

    let costoTotal = 0;

    const addMonto = (num) => {
        costoTotal = costoTotal + num;
    };

    //const [loading, setLoading] = useState(true)

    return (<Container>
        <Form>
            <Form.Group controlId="form.Name">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Nombre y Apellido" />
            </Form.Group>
            <Form.Group controlId="form.Phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Telefono" />
            </Form.Group>
            <Form.Group controlId="form.Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.Cart">
                {
                    cartList && cartList.map((item) => {
                        //puedo generar mis propias llaves, por ejemplo let key = item+"-"+id
                        const costoNum = Number(item.costo.replace("$", ""));
                        let total = item.cantidad * costoNum;
                        addMonto(total);
                        return <><Form.Label column sm="2">{item.titulo}</Form.Label>
                            <Col sm="5"><Form.Control plaintext readOnly />{item.cantidad}</Col>
                            <Col sm="5"> <Form.Control plaintext readOnly />{item.precio}</Col></>

                    })

                }
                <Form.Label column sm="2">Costo Total</Form.Label><Col sm="10"><Form.Control plaintext readOnly />${costoTotal}</Col>
            </Form.Group>

        </Form>
    </Container>)
                

}

export default Checkout