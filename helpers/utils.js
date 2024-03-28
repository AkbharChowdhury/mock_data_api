module.exports = {
    log: (response, data) =>{
        response.json(data);
        console.log(data)
    },
};