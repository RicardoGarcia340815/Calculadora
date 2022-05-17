//Calculadora
const botonNumeros = document.getElementsByName("data-number");
const botonOperacion = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var resultado = document.getElementById("resultados");
var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;


botonNumeros.forEach(function(boton){//Crea una iteración de todos los botones
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
        
    })

});

botonOperacion.forEach(function(boton){//Itera todos los botones operadores
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
        
    })
});

botonIgual.addEventListener("click", function(){//Realiza la operacion y actualiza el display
    calcular();
    actualizaDisplay();
});

botonDelete.addEventListener("click", function(){ //Limpia y actualiza
    clear();
    actualizaDisplay();
});

//Operaciones
function selectOperacion(op){
    if(operacionActual === "") return;
    if(operacionAnterior !== ""){
        calcular();
    }

    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "*":
           calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;

        default: alert("No coincidio");
        return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = "";
}



//Agregar Numero
function agregarNumero(numero){
    operacionActual = operacionActual.toString() + numero.toString();
    actualizaDisplay(); //Se van añadiendo los numeros
}

//Limpiar Pantalla
function clear(){
    operacionActual = "";
    operacionAnterior = "";
    operacion = undefined;
}


//Actualizar Display
function actualizaDisplay(){
    resultado.value = operacionActual;
}

clear();//Se borrara todo cuando se actualice