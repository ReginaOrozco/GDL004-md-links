module.exports.getOkLinks = (arrayLinks) => {
    let cont = 0
    const results = arrayLinks.map((objeto) => {
      if(objeto.status >= 200 && objeto.status < 300){
        cont ++
      }
    })
    return cont
}

module.exports.getBrokenLinks = (arrayLinks) => {
  let cont = 0
  const results = arrayLinks.map((objeto) => {
    if(objeto.status > 200 && objeto.status >= 300){
      cont ++
    }
  })
  return cont
}

/*module.exports.getUniqueLinks = (arrayLinks) => {
  let res = {}
  let counter = 0

  // Recorremos cada elemento en el array
  	 // checamos si el link ya está en el objeto
     		// Si está, aumentamos el contador del registro de ese objeto
        // Si no, creamos el registro dentro del objeto (res) e inicializamos en 1

  // recorremos los campos de contador
  	// Si el valor es 1 aumentamos el contador

  return counter
}*/


/*module.exports.getRepeatedLinks = (arrayLinks) => {
  let res = {}
  let counter = 0

  // Recorremos cada elemento en el array
  	 // checamos si el link ya esta en el objeto
     		// Si esta aumentamos el contador del registro de ese objeto
        // Si no creamos el registro dentro del objeto (res) e inicializamos en 1

  // recorremos los campos de contador
  	// Si el valor es diferente de 1 aumentamos el contador

  return counter
}*/

