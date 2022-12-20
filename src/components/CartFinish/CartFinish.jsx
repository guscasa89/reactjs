import React from 'react';
import Table from 'react-bootstrap/Table';
import { useContext, useState } from "react";
import { CartContext } from '../../Context/CartContext';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CartFinish.scss";

import { collection, addDoc, getFirestore } from "firebase/firestore"

const CartFinish = () => {

  const { count, cartList, removeItem, clear } = useContext(CartContext);
  const [fName, setfName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  let costoTotal = 0;

  const addMonto = (num) => {
    costoTotal = costoTotal + num;
  };


  const onRemove = (id) => {

    removeItem(id);
    //console.log(context)

  };

  const onClear = () => {

    clear();
    //console.log(context)

  };

  const toastyAdd = ({id}) => {

    toast.success(`Se genero la orden ${id}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendOrder = () => {



    const order = {
      buyer: { name: fName, phone: phone, email: email },
      items: cartList,
      total: costoTotal
    }

    const db = getFirestore();
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(({ id }) => {
      toastyAdd({id})
      //alert(`Se genero la orden ${id}`);
      clear();
      setfName("")
      setPhone("")
      setEmail("")
    })
  }



  return (

    <div className="box3">
      <div className="formularios">
        <form>
          <fieldset>
            <legend>Resumen de tu pedido:</legend>

            <div className="form-group">
              <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Nombre Completo</label>
              <input className="form-control form-control-sm" type="text" placeholder="Nombre Apellido"
                value={fName} onChange={e => setfName(e.target.value)} />
              <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Telefono</label>
              <input className="form-control form-control-sm" type="text" placeholder="09xxxxxxx"
                value={phone} onChange={e => setPhone(e.target.value)} />
              <label className="col-form-label col-form-label-sm mt-4" for="inputSmall">Mail</label>
              <input className="form-control form-control-sm" type="text" placeholder="mail@mail.com"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>


            <div className="form-group space">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Articulo</th>
                    <th>Precio por Unidad</th>
                    <th>Cantidad</th>
                    <th>Precio Total</th>
                    <th>Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map((item) => {
                    //puedo generar mis propias llaves, por ejemplo let key = item+"-"+id
                    const costoNum = Number(item.costo.replace("$", ""));
                    let total = item.cantidad * costoNum;
                    addMonto(total);
                    return <tr><td>{item.titulo}</td><td>{item.costo}</td><td>{item.cantidad}</td><td> ${total}</td>
                      <td><Button onClick={() => { onRemove(item.id); }} variant="warning">Eliminar item</Button></td></tr>;

                  })}
                  {cartList.length > 0 && <tr><td colSpan={3}>COSTO TOTAL: </td><td colSpan={2}>$ {costoTotal}</td></tr>}
                  {cartList.length === 0 && <tr><td colSpan={3}>No hay productos en tu carrito</td><td colSpan={2}><Link to={`/inicio`}><Button variant="success">Agregar productos</Button></Link></td></tr>}


                </tbody>
              </Table>
              <Button disabled={count === 0} onClick={() => { onClear(); }} variant="danger">Vaciar carrito</Button>
              <Button disabled={count === 0} onClick={() => { sendOrder(); }} variant="warning">Confirmar Compra</Button>

            </div>


          </fieldset>
        </form>
        <ToastContainer />
      </div>
    </div>





  )
}

export default CartFinish