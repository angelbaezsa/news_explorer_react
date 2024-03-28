//From now on you need to pack the whole markup of each modal in it's own file
//(you shouldn't have only inputs in AddItemModal.js). Everything should be in AddItemModal.js
//including handleSubmit and so on.
import "./ModalWithForm.css";
import React from "react";
import { useState } from "react";

function ModalWithForm({ children, onCloseModal, submitEvent, name, isValid }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="content">
        <button className="modal__close-button" onClick={onCloseModal}></button>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
