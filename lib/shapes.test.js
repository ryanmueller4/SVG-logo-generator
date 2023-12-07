const Shape = require('../lib/shapes');
const shape = new Shape('RMM', 'black', 'red');

const Circle = require('../lib/circle');
const circle = new Circle('ABC', 'blue', 'orange');

const Square = require('../lib/square');
const square = new Square('DEF', 'red', 'green');

const Triangle = require('../lib/triangle');
const triangle = new Triangle('GHI', 'yellow', 'purple');

describe('Shape', () => {
    describe('text', () => {
        it('input text', () => {
            expect(shape.text).toEqual('RMM'); 
        });
    });
    describe('textColor', () => {
        it('text color', () => {
            expect(shape.textColor).toEqual('black'); 
        });
    });
    describe('shapeColor', () => {
        it('shape color', () => {
            expect(shape.shapeColor).toEqual('red'); 
        });
    });
});

describe('Circle', () => {
    describe('text', () => {
        it('input text', () => {
            expect(circle.text).toEqual('ABC'); 
        });
    });
    describe('textColor', () => {
        it('text color', () => {
            expect(circle.textColor).toEqual('blue'); 
        });
    });
    describe('shapeColor', () => {
        it('shape color', () => {
            expect(circle.shapeColor).toEqual('orange'); 
        });
    });
});

describe('Square', () => {
    describe('text', () => {
        it('input text', () => {
            expect(square.text).toEqual('DEF'); 
        });
    });
    describe('textColor', () => {
        it('text color', () => {
            expect(square.textColor).toEqual('red'); 
        });
    });
    describe('shapeColor', () => {
        it('shape color', () => {
            expect(square.shapeColor).toEqual('green'); 
        });
    });
});

describe('Triangle', () => {
    describe('text', () => {
        it('input text', () => {
            expect(triangle.text).toEqual('GHI'); 
        });
    });
    describe('textColor', () => {
        it('text color', () => {
            expect(triangle.textColor).toEqual('yellow'); 
        });
    });
    describe('shapeColor', () => {
        it('shape color', () => {
            expect(triangle.shapeColor).toEqual('purple'); 
        });
    });
});