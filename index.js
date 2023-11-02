document.addEventListener("DOMContentLoaded", function() {
    let consultarBtn = document.querySelector("button[type='submit']");
    let precioSeguro = document.getElementById("precioSeguro");
    let selectSeguro = document.getElementById("seguro");

    let precios = {
        basico: 500,
        intermedio: 1000,
        premium: 1500
    };

    consultarBtn.addEventListener("click", function() {
        let tipoSeguro = selectSeguro.value;
        if (tipoSeguro) {
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let dni = document.getElementById("dni").value;
            let telefono = document.getElementById("telefono").value;

            if(!nombre || !apellido || !dni || !telefono || selectSeguro.value === ""){
                alert("Complete los datos obligatorios.")
                return;
            } else {
                let precio = precios[tipoSeguro];
                precioSeguro.textContent = "Precio de seguro " + tipoSeguro + ": $" + precio;
            } 
        } else {
            alert("Seleccione el tipo de seguro.")
        }
    });
});
