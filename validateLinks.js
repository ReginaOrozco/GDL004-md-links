module.exports.validateLinks = (urls) => {
  return new Promise((resolve, reject) => {
      let response = []
      let i = 1
      for (let link of urls){
      response.push(fetch(link))
  }

      Promise.allSettled(response).then((res)=>{
          const newArray = res.map((item,index)=>{
              if (!item.value) {
                  urls[index].status = 400
                  urls[index].statusText = "Fail"
              } else {
                  urls[index].status = item.value.status
                  urls[index].statusText = item.value.statusText
              }

              return urls[index];

          })

          resolve(newArray);


      }).catch(err => {
          reject(err);

      })
  })
}
