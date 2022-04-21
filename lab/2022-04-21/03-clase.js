
function saludar(){
    const mensaje = "hola"
    
    return function hola(){
        console.log(mensaje)
    }
    
}

const saludo = saludar();

const miFunction = function(){
    console.log("my function")
}
saludo()
miFunction()