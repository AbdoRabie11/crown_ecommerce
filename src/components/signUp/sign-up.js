import { useState } from "react";
import FormInput from "../form-input/form-input.comp";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPasword,
  createUserDocumentFormAuth,
} from "../../utils/firebase/firebase.util";
import './sign-up.style.scss'
const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Singup = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaulFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPasword(email, password);

      await createUserDocumentFormAuth(user, { displayName });
      resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Do not have account</h2>
      <span>sign up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="cofirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button  type="submit">sign up</Button>
      </form>
    </div>
  );
};
export default Singup;
