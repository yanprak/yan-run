import { Nullable } from '../../types';

// add task for fix
// eslint-disable-next-line import/prefer-default-export
export function prepareStringValue(propValue: Nullable<string>): string {
  return propValue || '';
}
