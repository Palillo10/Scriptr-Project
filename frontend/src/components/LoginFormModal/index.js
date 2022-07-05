// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { csrfFetch } from '../../store/csrf';
import LoginForm from './LoginForm';
import * as sessionActions from "../../store/session";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()

  // const demoLogin = async () => {
  //   const res = await csrfFetch('/api/session/demo', {
  //     method: "POST"
  //   })
  //   console.log(res)
  // }

  const handleSubmit = (e) => {
    let credential = "Demo-lition"
    let password = "password"
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();

      }
    );
  };

  return (
    <>
      <button onClick={handleSubmit} style={{
        position: "absolute", right: "12vw", borderColor: "rgb(1, 182, 182)", color: "black",
        borderRadius: "5px", cursor: "pointer"
      }}>Demo</button>
      <button style={{
        position: "absolute", right: "7vw", borderColor: "rgb(1, 182, 182)", color: "rgb(1, 182, 182)",
        borderRadius: "5px", cursor: "pointer"
      }} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
