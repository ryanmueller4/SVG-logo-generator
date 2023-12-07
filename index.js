const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 letter text.',
      },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color will the text be?',
      },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color will the shape be?',
      },
    {
        type: 'list',
        name: 'shape',
        message: 'Chose one of the following shapes.',
        choices: ['square', 'triangle', 'circle']
      },
])
.then(data => {
    let svg = ""
    if (data.shape === 'circle') {
        const circle = new Circle(data.text, data.textColor, data.shapeColor, data.shape)
        svg = circle.render();
    } else if (data.shape === 'square') {
        const square = new Square(data.text, data.textColor, data.shapeColor, data.shape)
        svg = square.render();
    } else if (data.shape === 'triangle') {
        const triangle = new Triangle(data.text, data.textColor, data.shapeColor, data.shape)
        svg = triangle.render();
    }
    fs.writeFileSync("./output/logo.svg", svg)
 });