import React from "react";
import './header.css'

const Modal = ({ title, children, abierto, closeModal }) => {
    return (
      abierto && (
        <div className="modal">

          <div className="modal-title">{title}</div>
          {/*Hijo de modal*/}

          <div className="modal-body">{children}</div>
          {/*cerrar modal,*/}

          <button className="X" onClick={closeModal}> x </button>

        </div>
      )
    );
  };
  
  export default Modal;