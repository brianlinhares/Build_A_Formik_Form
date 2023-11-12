import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: values =>{
      console.log('form',values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Username should be an email";
      if(!values.password) errors.password = 'Required';
      if(values.password & values.email) errors.submit = "Login Successful";
      return errors;
    }
    
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>emailField:</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/> 
        {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>pswField:</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>  
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div>: null}          
        <button type="submitBtn">Submit</button>
      </form>   
    </div>
  );
}

export default App;
