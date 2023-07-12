export enum Routes {
  USER = 'users',
}

export enum Services {
  USERS = 'USER_SERVICE',
}

export type CreateUserDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
