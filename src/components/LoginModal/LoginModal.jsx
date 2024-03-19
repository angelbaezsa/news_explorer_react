import { useFormValidation } from "../FormValidation/FormValidation";
import { ModalWithForm } from "../ModalWithForm/ModalWithForm.jsx";

const LoginModal = ({ onLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return <ModalWithForm></ModalWithForm>;
};
