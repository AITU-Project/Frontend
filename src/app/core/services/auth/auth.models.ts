export interface SignInResponse {
  access_token: string;
}

export interface SignUpResponse {
  message: string;
}

export interface SignUpDto {
  email: string;
  firstname: string;
  surname: string;
  password: string;
  role: string;
  region: string;
  sex: 'male' | 'female';
}

export interface User {
  id: string;
  email: string;
  firstname: string;
  surname: string;
  password: string;
  role: string;
  region: string;
  sex: 'male' | 'female';
}
