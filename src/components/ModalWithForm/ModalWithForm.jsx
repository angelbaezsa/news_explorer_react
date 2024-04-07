// From now on you need to pack the whole markup of each modal in it's own file
// (you shouldn't have only inputs in AddItemModal.js). Everything should be in AddItemModal.js
// including handleSubmit and so on.
import "./ModalWithForm.css";
import React from "react";

function ModalWithForm({ children, onCloseModal }) {
  return (
    <div className={`modal`}>
      <div className="content">
        <button className="modal__close-button" onClick={onCloseModal}></button>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
