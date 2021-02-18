export type UpdateProfileOptions = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone?: string,
};

export type UpdatePasswordOptions = {
  oldPassword: string,
  newPassword: string,
};

export type SearchUserByLoginOptions = {
  login: string;
};
