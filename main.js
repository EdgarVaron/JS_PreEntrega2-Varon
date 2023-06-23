let nombre = prompt("Ingresa tu nombre:")
let edad = prompt("Ingresa tu edad:")
let mail = prompt("Ingresa tu mail:")


function opciones() {
    let opcion
    
    do{
        opcion = prompt("Selecciona la tutoria deseada: 1) Desarrollo web 2) JavaScript 3) React 4) Node.JS")
    }while(opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4")
  
    
    switch (opcion) {
      case "1":
        alert("Has elegido Desarrollo web")
        break
      case "2":
        alert("Has elegido JavaScript")
        break
      case "3":
        alert("Has elegido React")
        break
      case "4":
        alert("Has elegido Node.JS")
        break
      default:
        alert("Opción inválida")
        break
    }
}

opciones()

continuar = confirm("deseas solicitar un turno para la tutoria elegida?")
if(continuar == true) {
    function opcionesTurnos() {
        let opcionesTurnos
        
        do{
            opcionesTurnos = prompt("Elegir Dia : 1) Lunes 2) Martes 3) Miercoles 4) Jueves 5) Viernes")
        }while(opcionesTurnos != "1" && opcionesTurnos != "2" && opcionesTurnos != "3" && opcionesTurnos != "4" && opcionesTurnos != "5")
      
        
        switch (opcionesTurnos) {
            case "1":
                alert("tu turno fue agendado para el dia Lunes")
                break
            case "2":
                alert("tu turno fue agendado para el dia Martes")
                break
            case "3":
                alert("tu turno fue agendado para el dia Miercoles")
                break
            case "4":
                alert("tu turno fue agendado para el dia Jueves")
                break
            case "5":
                alert("tu turno fue agendado para el dia Viernes")
                break
            default:
                alert("Opción inválida")
                break
            
        }
    }


opcionesTurnos()

}else if(continuar == false){
    alert("gracias por visitar nuestra pagina, vuelva pronto! ")
}

let servicios = [
  { nombre: "Desarrollo web", duracion: 90, precio: 30 },
  { nombre: "JavaScript", duracion: 30, precio: 10 },
  { nombre: "React", duracion: 120, precio: 35 },
  { nombre: "Node.JS", duracion: 60, precio: 20 }
];

function buscarServicio(servicios, nombre) {
  return servicios.find(servicio => servicio.nombre === nombre);
}

function filtrarPorDuracion(servicios, duracionMinima, duracionMaxima) {
  return servicios.filter(servicio => servicio.duracion >= duracionMinima && servicio.duracion <= duracionMaxima);
}

function filtrarPorPrecio(servicios, precioMaximo) {
  return servicios.filter(servicio => servicio.precio <= precioMaximo);
}