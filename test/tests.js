// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';
import { divide } from '../calculations.js';
import { modulo } from '../calculations.js';

const test = QUnit.test;

test('test addition', (expect) => {
    const expected = 5;
    const actual = add(2,3) 
    expect.equal(actual, expected);
});

test('test subtraction', (expect) => {
    const expected = 2
    const actual = subtract(5,3)
    expect.equal(actual, expected);
});
test('test multiplication', (expect) => {
    const expected = 6
    const actual = multiply(2,3)
    expect.equal(actual, expected)
})
test('test division', (expect) => {
    const expected = 6;
    const actual = divide(18, 3);
    expect.equal(actual, expected)
})
test('test modulo', (expect) => {
    const expected = 1
    const actual = modulo(5, 2)
    expect.equal(actual, expected);
})

