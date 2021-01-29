import {transformHoursToMinutes} from './utils.js';

test('La transformacion de horas a minutos es correcta', () => {
    expect (transformHoursToMinutes(1)).toBe('60 Minutos')
});

