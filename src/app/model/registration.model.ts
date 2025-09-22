export type UserRole = 'student' | 'instructor';

export class RegistrationModel{
  email:string=""
  username:string=""
  password:string=""
  role:UserRole='student'
}

