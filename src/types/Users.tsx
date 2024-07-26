// src/types/types.ts

export interface UserAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

export interface UserName {
  firstname: string;
  lastname: string;
}

export interface Users {
  id: number;
  email: string;
  username: string;
  password: string;
  name: UserName;
  address: UserAddress;
  phone: string;
}
// src/types/User.ts
export interface User {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export interface UserFormState {
  email: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  city: string;
  street: string;
  number: number;
  zipcode: string;
  lat: string;
  long: string;
  phone: string;
}
