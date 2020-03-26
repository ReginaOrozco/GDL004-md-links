const fetch = require("node-fetch")

module.exports.validateLinks = (arrayObjLinks) => {
	return new Promise((resolve, reject) => {
	  arrayObjLinks.forEach((item) => {

      fetch(item.href).then((res) => {
		  	item.status = res.status
			  resolve(item)

		  })	.catch(( err ) => {
			  //console.log(err)
		  })
  	})
	})

};
