import './header.css'
import React, { useState } from "react";
import Modal from "./header-modal";
export default function Header() {
    const [abierto, setabierto] = useState(false);

    const handleOpenModal = () => {
        setabierto(true);
    };
    const handleCloseModal = () => {
        setabierto(false);
    };

    return (
        <div className="Header">

            <h1 className='copy'>Federico Del Rio | Bootcamp matea 2022</h1>

            <button onClick={handleOpenModal} className="Boton_Login">Login</button>

            <Modal title="" abierto={abierto} closeModal={handleCloseModal} >
                <label>
                    Usuario: <input type="text" name="name" placeholder='Nombre' /> 
                </label>

                <label>
                    Contraseña: <input type="password" name="clave" placeholder='Contraseña'/>
                </label>

                <button className='Enviar'>Enviar</button>
            </Modal>
            
        </div>
    );
}