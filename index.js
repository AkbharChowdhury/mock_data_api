const port = 3_000;
const express = require("express");
const employee = require("./generators/employee");
const app = express();

const log = (response, data) => {
    response.json(data);
    console.log(data)
}
const mockData = (request, response, employee) => {
    const count = Number(request.query.count) || 5;
    const employees = Object.freeze({
        'employees': Array.from({ length: count }, employee)
    });
    log(response, employees);
}
app.get('/employees', (request, response) =>  mockData(request, response, employee));
app.listen(port, () => console.log(`server running at ${port}`))
// http://localhost:3000/employees