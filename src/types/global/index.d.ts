import { ApplicationState } from '../../client/store/types';

declare type FieldsString = {
  [key in string]: {
    [key2 in string]: string
  }
};

declare global {
  interface Window {
    __INITIAL_STATE__?: ApplicationState;
  }
}
