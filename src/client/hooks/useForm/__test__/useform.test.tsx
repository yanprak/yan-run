import { Field } from '../types';
import checkField from '../checkField';

test('useForm util test checkField', () => {
  const field: Field = {
    type: 'email',
    value: '',
  };
  expect(checkField(field).test).toBeTruthy();
});

describe('Validation of input values', () => {
  const positive:Field[] = [
    { type: 'email', value: 'frash@talk.com' },
    { type: 'tel', value: '+74441113355' },
    { type: 'text', value: 'frash-talk' },
  ];
  const negative = [
    { type: 'email', value: 'frash-talk.com' },
    { type: 'tel', value: '+z444@1113355' },
    { type: 'text', value: '' },
  ];

  function examin(arr: Field[], check: boolean) {
    arr.forEach(field => {
      test(`Verification for "${field.type}" should be "${String(check)}"`, () => {
        expect(checkField(field).test).toEqual(check);
      });
    });
  }
  examin(positive, false);
  examin(negative, true);
});
