import { User, UserState } from './user/types';

const sampleUser: User = {
  id: 12345,
  login: 'john.doe',
  email: 'john.doe@gmail.com',
  phone: '+71234567890',
  first_name: 'John',
  second_name: 'Doe',
  display_name: '1337_H@ck3r',
  avatar: '/api/v2/uploads/d0f3f01c-ea63-40c6-a4bf-6d511fb21319/photo_2020-10-30_18-12-48.jpg',
};

const initialState: UserState = {
  user: sampleUser,
};

export default initialState;
