const { dayOfTheWeek } = require('./app');
const { monthOfTheYear } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns month of the year', () => {
    const month = monthOfTheYear( new Date('2/11/2020') );
    expect(month).toBe('Februrary');
});

test('month of the year return correct month of the year', () => {
    const month = monthOfTheYear( new Date('3/10/2020') );
    expect(month).toBe('March');
});