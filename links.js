const fetch = require("node-fetch");

const counters = (objLinks) => {
    let okCounter = 0;
    let failCounter = 0;
    let uniqueCounter = 0;
    let totalCounter = 0;

    objLinks.forEach((link) => {

        if (link.statusText == "OK") {
            okCounter++
        }
        if (link.statusText == "FAIL") {
            failCounter++
        }
        totalCounter++
    })
    const counter = {
        Ok: okCounter,
        Broken: failCounter,
        Unique: uniqueCounter,
        Total: totalCounter,
    }
    return counter
}
const responseHttp = (array) => {
    let arrayPromises = array.map(async(obj) => {
        let response;
        try {
            response = await fetch(obj.link);
            response = {
                ...obj,
                statusText: "OK",
            }
        } catch (error) {
            response = {
                ...obj,
                statusText: "FAIL",

            }
        }
        return response

    });
    return Promise.all(arrayPromises)

}
module.exports = {
    http: responseHttp,
    counters: counters,
}
