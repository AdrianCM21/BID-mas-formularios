import React from "react";

const VistaFormulario = props =>{
    return(
        <div className="vistaformulario">
            <p>First Name: {props.Primer}</p>
            <p>Last Name: {props.Segundo}</p>
            <p>Email: {props.Correo}</p>
            <p>Password: {props.Contraseña}</p>
            <p>Password Confirm: {props.Confirmacion}</p>
        </div>
    )
}

export default VistaFormulario