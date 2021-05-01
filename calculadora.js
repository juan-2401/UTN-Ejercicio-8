var numero_1;
var numero_2;
var total;

function inicio() {
    numero_1 = prompt("Ingrese un número");
    numero_2 = prompt("Ingrese un número");
    numero_1 = parseFloat(numero_1);
    numero_2 = parseFloat(numero_2);
}

function suma() {
    if (typeof numero_1 === 'number' || typeof numero_2 === 'number'){
        total = numero_1 + numero_2;
        document.getElementById("resultado").innerHTML = "El resultado de la suma de " + numero_1 + " y " + numero_2 + " es: " + total;
    } else {
        alert("Debe ingresar números")
    }
}

function resta() {
    if (typeof numero_1 === 'number' || typeof numero_2 === 'number'){
        total = numero_1 - numero_2;
        document.getElementById("resultado").innerHTML = "El resultado de la resta de " + numero_1 + " y " + numero_2 + " es: " + total;    } else {
        alert("Debe ingresar números")
    }
}

function multiplica() {
    if (typeof numero_1 === 'number' || typeof numero_2 === 'number'){
        total = numero_1 * numero_2;
        document.getElementById("resultado").innerHTML = "El resultado de la multiplicación de " + numero_1 + " y " + numero_2 + " es: " + total;    } else {
        alert("Debe ingresar números")
    }
}

function divide() {
    if (typeof numero_1 === 'number' || typeof numero_2 === 'number'){
        total = numero_1 / numero_2;
        document.getElementById("resultado").innerHTML = "El resultado de la división de " + numero_1 + " y " + numero_2 + " es: " + total;    } else {
        alert("Debe ingresar números")
    }
}