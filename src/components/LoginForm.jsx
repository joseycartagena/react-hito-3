import { useState } from "react"

const LoginForm = () => {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');



const [error, setError] = useState('');

const validarDatos = (e) => {
    e.preventDefault()
    //Validación
    if (!email.trim() || !pass.trim()) {
    setError("Todos los campos son obligatorios");
        alert("Todos los campos son obligatorios");
    return;
}

if (pass.length < 6) {
    setError("La contraseña debe tener al menos 6 caracteres");
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }


setError('');
alert("Autenticación exitosa");
setEmail('');
setPass('');
};

  return (
    <>   
<form className="formulario my-3" onSubmit={validarDatos}>

<h1>Login</h1>

<div className="form-group">
<label>Email</label>
<input
type="email"
name="email"
className="form-control"
onChange={(e) => setEmail(e.target.value)}
value={email}
/>
</div>
<div className="form-group">
<label>Contraseña</label>
<input
type="password"
name="pass"
className="form-control"
onChange={(e) => setPass(e.target.value)}
value={pass}
/>
</div>


<button type="submit" className="btn
btn-primary mt-3">Enviar</button>
</form>   
</>
  );
};

export default LoginForm