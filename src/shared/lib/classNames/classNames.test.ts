import { classNames } from './classNames';

describe('Classnames', () => {
  test('with first param', () => {
    expect(classNames('class')).toBe('class');
  });
  test('with three params', () => {
    const expected = 'class class1 class3';
    expect(classNames('class', {}, ['class1', 'class3'])).toBe(expected);
  });
  test('with mods', () => {
    expect(
      classNames('class', { selected: true, highlight: true }, [
        'class1',
        'class3',
      ]),
    ).toBe('class class1 class3 selected highlight');
  });
  test('with mods false', () => {
    expect(
      classNames('class', { selected: false, highlight: false }, [
        'class1',
        'class3',
      ]),
    ).toBe('class class1 class3');
  });
  test('with mods undefined', () => {
    expect(
      classNames('class', { selected: false, highlight: undefined }, [
        'class1',
        'class3',
      ]),
    ).toBe('class class1 class3');
  });
});
