document.getElementById("nombre").addEventListener("keyup", function(e) {
    const value = e.target.value

    const hidden = value.length < 1
    
    if(hidden) document.getElementById("titulo-nombre").classList.add('hidden')
    else document.getElementById("titulo-nombre").classList.remove('hidden')
    document.getElementById("titulo-nombre").innerHTML = `Hola ${value}!`;
}) 
// const nombreInput = document.getElementById("nombre")
// const emailInput = document.getElementById("email")
// const contrasenaInput = document.getElementById("contrasena")
// const edadInput = document.getElementById("edad")
// const telefonoInput = document.getElementById("telefono")
// const direccionInput = document.getElementById("direccion")
// const ciudadInput = document.getElementById("ciudad")
// const cpInput = document.getElementById("cp")
// const dniInput = document.getElementById("dni")