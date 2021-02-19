import { Nullable } from '../../types';

export function prepareStringValue(propValue: Nullable<string>): string {
  return propValue || '';
}
