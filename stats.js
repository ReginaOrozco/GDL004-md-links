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
  let cont = 0
  const results = arrayLinks.map((objeto) => {
    if(objeto.status > 200 && objeto.status >= 300){
      cont ++
    }
  })
  return cont


module.exports.getRepeatedLinks = (arrayLinks) => {
  let cont = 0
  const results = arrayLinks.map((objeto) => {
    if(objeto.status > 200 && objeto.status >= 300){
      cont ++
    }
  })
  return cont
}*/
