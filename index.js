const port = 3_000;
const express = require("express");
const employee = require("./generators/employee");
const app = express();
const mockData = (request, response, generator) => {

    const count = request.query.count || 30;
    const data = [];
    // for (let i = 0; i < count; i++) {
    //     data.push(generator())
    // }
    for(let _ in count){
        data.push(generator())
    }

  

   

    response.json(data);

}

app.get('/employees', (request, response) => mockData(request, response, employee));


app.listen(port, () => console.log(`server running at ${port}`))

// http://localhost:3000/employees