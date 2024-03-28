const express = require("express");
const employee = require("./generators/employee");
const chance  = require('chance').Chance();
const employees = Object.freeze({
    'employees': Array.from({ length: 5 }, employee)
});

console.log(employees)