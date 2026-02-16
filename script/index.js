let info_campers = [
  {
    id: "001",
    nombre: "Carlos",
    apellido: "Ramírez",
    direccion: "Calle 12 #45-67",
    acudiente: "María Ramírez",
    telefonoCelular: "3001234567",
    telefonoFijo: "6012345678",
    estado: "Activo",
    riesgo: "N/A"
  },
  {
    id: "002",
    nombre: "Laura",
    apellido: "Gómez",
    direccion: "Carrera 8 #23-45",
    acudiente: "Jorge Gómez",
    telefonoCelular: "3012345678",
    telefonoFijo: "6023456789",
    estado: "Activo",
    riesgo: "N/A"
  },
  {
    id: "003",
    nombre: "Andrés",
    apellido: "Martínez",
    direccion: "Av. Siempre Viva 742",
    acudiente: "Patricia Martínez",
    telefonoCelular: "3023456789",
    telefonoFijo: "6034567890",
    estado: "Inactivo",
    riesgo: "N/A"
  },
  {
    id: "004",
    nombre: "Sofía",
    apellido: "López",
    direccion: "Calle 50 #10-20",
    acudiente: "Ricardo López",
    telefonoCelular: "3034567890",
    telefonoFijo: "6045678901",
    estado: "Activo",
    riesgo: "N/A"
  },
  {
    id: "005",
    nombre: "Miguel",
    apellido: "Hernández",
    direccion: "Carrera 15 #30-55",
    acudiente: "Ana Hernández",
    telefonoCelular: "3045678901",
    telefonoFijo: "6056789012",
    estado: "Activo",
    riesgo: "N/A"
  }
]

let notas_campers = [
  {
    id: "001",
    nombre: "Carlos",
    Python: "Ramírez",
    Java: "Calle 12 #45-67",
    Git: "María Ramírez"
  },
]
function login () {

    let name = prompt("Ingrese su nombre")
    let user = prompt("Ingrese su usuario \n\n\n 1. Coordinador \n\n 2. Trainer \n\n 3. Camper");
    switch (user) {
      case "1":
        let password_Coordi = prompt("Ingrese su contraseña");
        let contador = 2;
        while (password_Coordi !== "Admon321" && contador > 0 ){
          alert ("Te quedan " + contador + " intentos.");
          password_Coordi = prompt("Contraseña no reconocida. Intente nuevamente")
          contador --
        };
        if (password_Coordi == "Admon321") {
          let option_admin = prompt("--- Bienvenido al perfil de coordinador --- \n\n 1. Ver lista de Campers \n 2. Añadir nuevo Camper \n 3. Editar info Camper \n 0. SALIR")
          switch (option_admin) {
            case "1":
              console.table(info_campers);
            break;
            case "2":
              let new_id = prompt("Ingrese el nuevo id");
              let exist = info_campers.find(c => c.id === new_id);
              if (exist) {
                alert("Ya exister un camper con el mismo ID");
              break;
              }
            
              let nombre = prompt("Ingrese el nombre:");
              let apellido = prompt("Ingrese el apellido:");
              let direccion = prompt("Ingrese la dirección:");
              let acudiente = prompt("Ingrese el nombre del acudiente:");
              let telefonoCelular = prompt("Ingrese el teléfono celular:");
              let telefonoFijo = prompt("Ingrese el teléfono fijo:");
            
              let nuevoCamper = {
                id: new_id,
                nombre: nombre,
                apellido: apellido,
                direccion: direccion,
                acudiente: acudiente,
                telefonoCelular: telefonoCelular,
                telefonoFijo: telefonoFijo,
                estado: "Activo",
                riesgo: "N/A"
              };
            
              info_campers.push(nuevoCamper)
            
              alert("Nuevo Camper añadido correctamente")
            break;
            case "3":
              let id_ask = prompt("Ingrese el id del Camper...");
              let edit_camper = info_campers.find(camper => camper.id === id_ask);
            
              if (!edit_camper) {
                alert("No se encontró un camper con ese ID ");
                break;
              }
            
              alert("Deje vacío si no desea cambiar el dato.");
            
              let nuevoNombre = prompt("Nuevo nombre:", edit_camper.nombre);
              let nuevoApellido = prompt("Nuevo apellido:", edit_camper.apellido);
              let nuevaDireccion = prompt("Nueva dirección:", edit_camper.direccion);
              let nuevoAcudiente = prompt("Nuevo acudiente:", edit_camper.acudiente);
              let nuevoCelular = prompt("Nuevo teléfono celular:", edit_camper.telefonoCelular);
              let nuevoFijo = prompt("Nuevo teléfono fijo:", edit_camper.telefonoFijo);
            
              if (nuevoNombre) edit_camper.nombre = nuevoNombre;
              if (nuevoApellido) edit_camper.apellido = nuevoApellido;
              if (nuevaDireccion) edit_camper.direccion = nuevaDireccion;
              if (nuevoAcudiente) edit_camper.acudiente = nuevoAcudiente;
              if (nuevoCelular) edit_camper.telefonoCelular = nuevoCelular;
              if (nuevoFijo) edit_camper.telefonoFijo = nuevoFijo;
            
              alert("Camper actualizado correctamente");
              console.table(info_campers);
            
            break;
            
            case "0":
              alert("Salindo del perfil");
            break;
          }
            

        }  
        
      break;
      case "2":
        console.log("Bienvenido Trainer");
      break;
      case "3":
        console.log("Bienvenido Camper");
      break;
    }
}

login ();
// let password = prompt("Ingrese su contraseña")
// const num = parseFloat(password, 10);
// console.log(typeof num)
// console.log(password)
