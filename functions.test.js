const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions')


test('function returnTwo should equal 2', () => {
    expect(returnTwo()).toEqual(2);
});

describe('greeting functions', () => {

    test('greeting function', () => {
        expect(greeting('James')).toBe('Hello, James.');
    });

    test('greeting function', () => {
        expect(greeting('Jill')).toBe('Hello, Jill.');
    });
});

describe('add function', () => {

    test('add function', () => {
        expect(add(1, 2)).toEqual(3);
    });

    test('add function', () => {
        expect(add(5, 9)).toEqual(14);
    });
});

describe('math functions', () => {

    test('multiply function', () => {
        expect(multiply(3, 4)).toEqual(12);
    });

    test('Multiply function', () => {
        expect(multiply(5, 2)).toEqual(10);
    });

    test('divide function', () => {
        expect(divide(9, 3)).toEqual(3);
    });

    test('divide function', () => {
        expect(divide(20, 5)).toEqual(4);
    });

    test('subtract function', () => {
        expect(subtract(7, 2)).toEqual(5);
    });

    test('subtract function', () => {
        expect(subtract(14, 8)).toEqual(6);
    });
});