
import { useState } from 'react';
import './App.css';

const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">Password should have at least 8 characters</p> 
  ); 
 }; 

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getFormValid = () => {
    return (
      firstName &&
      email &&
      password.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: "false"
    });
    setRole("role");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your account is now created!");
    clearForm();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>First Name:</label>
            <input type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name:"
            />
          </div>
          <div className="Field">
            <label>Last Name:</label>
            <input type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name:"
            />
          </div>
          <div className="Field">
            <label>Email:</label>
            <input type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email:"
            />
          </div>
          <div className="Field"> 
           <label> 
             Password:
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password: " 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
          <div className="Field">
            <label>Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role:"
            >
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getFormValid()}>
            Create Account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
