import { useState } from "react"

const RegisterForm = () => {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const [repass, setRepass] = useState('');



const [error, setError] = useState('');

const validarDatos = (e) => {
    e.preventDefault()
    //Validación
    if (!email.trim() || !pass.trim() || !repass.trim()) {
    setError("Todos los campos son obligatorios");
        alert("Todos los campos son obligatorios");
    return;
}

if (pass.length < 6 || repass.length < 6) {
    setError("La contraseña debe tener al menos 6 caracteres");
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

   if (pass !== repass) {
    setError("Las contraseñas no coinciden");
    alert("Las contraseñas no coinciden");
    return;
  }

setError('');
alert("Autenticación exitosa");
setEmail('');
setPass('');
setRepass('');
};

  return (
    <>   
<form className="formulario my-3" onSubmit={validarDatos}>

<h1>Registro</h1>

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
<div className="form-group">
<label>Confirmar contraseña</label>
<input
type="password"
name="repass"
className="form-control"
onChange={(e) => setRepass(e.target.value)}
value={repass}
/>
</div>

<button type="submit" className="btn
btn-primary mt-3">Enviar</button>
</form>   
</>
  );
};

export default RegisterForm