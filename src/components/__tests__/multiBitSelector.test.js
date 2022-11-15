import test from 'node:test';
import {createSignalTest} from './testUtils.js';
import {multiBitSelector} from '../multiBitSelector.js'

test('components:base:multiBitSelector', async (t) => {
    const testCases = [
        [0, 2n ** 4n - 1n, 0, 4, 0],
        [0, 2n ** 4n - 1n, 1, 4, 2n ** 4n - 1n],
        [2n ** 4n - 1n, 0, 0, 4, 2n ** 4n - 1n],
        [2n ** 4n - 1n, 0, 1, 4, 0],

        [0, 2n ** 8n - 1n, 0, 8, 0],
        [0, 2n ** 8n - 1n, 1, 8, 2n ** 8n - 1n],
        [2n ** 8n - 1n, 0, 0, 8, 2n ** 8n - 1n],
        [2n ** 8n - 1n, 0, 1, 8, 0],

        [0, 2n ** 16n - 1n, 0, 16, 0],
        [0, 2n ** 16n - 1n, 1, 16, 2n ** 16n - 1n],
        [2n ** 16n - 1n, 0, 0, 16, 2n ** 16n - 1n],
        [2n ** 16n - 1n, 0, 1, 16, 0],

        [0, 2n ** 32n - 1n, 0, 32, 0],
        [0, 2n ** 32n - 1n, 1, 32, 2n ** 32n - 1n],
        [2n ** 32n - 1n, 0, 0, 32, 2n ** 32n - 1n],
        [2n ** 32n - 1n, 0, 1, 32, 0],

        [0, 2n ** 64n - 1n, 0, 64, 0],
        [0, 2n ** 64n - 1n, 1, 64, 2n ** 64n - 1n],
        [2n ** 64n - 1n, 0, 0, 64, 2n ** 64n - 1n],
        [2n ** 64n - 1n, 0, 1, 64, 0],
    ]
    for (const [d0, d1, s, length, expected] of testCases) {
        await t.test(`should show reslut ${'' +expected} for 0:${d0} 1:${d1} s:${s}`, () => {
            createSignalTest(({createBusSignals, createSignal, checkBusSignal}) => {
                const result = multiBitSelector(createBusSignals(d0), createBusSignals(d1), createSignal(s), length)
                checkBusSignal(result).toBe(expected)
            })
        });
    }
});