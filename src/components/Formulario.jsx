import React,{useState} from "react";
import VistaFormulario from "./VistaFormulario";

const Formulario =()=>{
    const [FirstName,setFirstName]= useState('');
    const [LastName,setLastName]= useState('');
    const [Email,setEmail]= useState('');
    const [Password,setPassword]= useState('');
    const [PasswordConfirm,setPasswordConfirm]= useState('');
    return (<div className="container">
        <div className="inputs">
            <label htmlFor="FirstName">First Name: </label>
            <input type="text" id="FirstName" onChange={e=>{
                setFirstName(e.target.value)
            }} />            
        </div>
        <div className="campo-error">
            {(FirstName.length<3&&FirstName.length>0)&&<p className="error">First name most be af least 2 character</p>}
        </div>
        <div className="inputs">
            <label htmlFor="LastName">Last Name: </label>
            <input type="text" id="LastName"onChange={e=>{
                setLastName(e.target.value)
            }}/>
        </div>
        <div className="campo-error">
            {(LastName.length<3&&LastName.length>0)&&<p className="error">Last name most be af least 2 character</p>}
        </div>
        <div className="inputs">
            <label htmlFor="Email">Email: </label>
            <input type="email" id="Email" onChange={e=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <div className="campo-error">
            {(Email.length<6&&Email.length>0)&&<p className="error">Email most be af least 5 character</p>}
        </div>
        <div className="inputs">
            <label htmlFor="Password">Password: </label>
            <input type="password" id="Password" onChange={e=>{
                setPassword(e.target.value)
            }}/>
        </div>
        <div className="campo-error">
            {(Password.length<9&&Password.length>0)&&<p className="error">Password most be af least 8 character</p>}
        </div>

        <div className="inputs">
            <label htmlFor="PasswordConfirm">Password Confirm: </label>
            <input type="password" id="PasswordConfirm" onChange={e=>{
                setPasswordConfirm(e.target.value)
            }}/>
        </div>
        <div className="campo-error">
            {Password!==PasswordConfirm&&<p className="error">Password must match</p>}
        </div>
        <VistaFormulario Primer={FirstName} Segundo={LastName} Correo={Email} Contraseña={Password} Confirmacion = {PasswordConfirm}/>

    </div>)
}

export default Formulario