import React from "react";
import { useForm } from "react-hook-form";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./RegisterModal.css";

const RegisterModal = ({ onCloseModal, onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Destructure isValid from formState
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    // console.log(data);
  };

  return (
    <ModalWithForm onCloseModal={onCloseModal} name={"Sign Up"}>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Sign Up</h2>
        {/* Email input */}
        <fieldset className="form__input-fieldset input-fieldset">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            type="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, // Email regex pattern
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="error">Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="error">
              Please enter a valid email address (email@example.com)
            </span>
          )}
        </fieldset>

        <fieldset className="form__input-fieldset input-fieldset">
          {/* Password input */}
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <span className="error">
              Password is required (min. 6 characters)
            </span>
          )}
        </fieldset>

        <fieldset className="form__input-fieldset input-fieldset">
          <label className="form__label" htmlFor="username">
            Username
          </label>
          <input
            className="form__input"
            type="username"
            placeholder="Enter username"
            {...register("username", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.username && (
            <span className="error">
              username is required (min. 6 characters)
            </span>
          )}
        </fieldset>

        {/* Disable the submit button if form is invalid */}
        <button
          type="submit"
          className={`${
            isValid ? "form__button-submit" : "form__button-submit_invalid"
          }`}
          disabled={!isValid}
        >
          Register
        </button>
        <p className="form__text">
          Or&nbsp;
          <a tabindex="0" className="form__url" onClick={onSignIn}>
            Signin
          </a>
        </p>
      </form>
    </ModalWithForm>
  );
};

export default RegisterModal;
