import {transformHoursToMinutes} from './utils.js';

test('La transformacion de horas a minutos es correcta', () => {
    expect (transformHoursToMinutes(1)).toBe('60 Minutos')
    expect (transformHoursToMinutes(2)).toBe('120 Minutos')
});
