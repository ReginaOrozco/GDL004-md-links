const fetch = require("node-fetch")

module.exports.validateLinks = (arrayObjLinks) => {
    const arrayPromises = arrayObjLinks.map((item) => {
      return new Promise((resolve, reject) => {
          fetch(item.href).then((res) => {
            item.status = res.status
            resolve(item)

          })	.catch(( err ) => {
              resolve(item)
          })
        })
      })
    return Promise.all(arrayPromises)


};
