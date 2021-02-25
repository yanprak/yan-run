export type ResultCheckField = {
  test: boolean,
  message: string
};

export type Field = {
  value: string,
  type: string,
  name?: string
  errorMessage?: string
};

export type FormState = {
  [key in string]: Field
};

export type FormSubmitHandler = (data: FormState) => void;
