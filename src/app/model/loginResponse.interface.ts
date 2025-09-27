
export interface LoginResponseModel{
  message:string;
  user:User;
}

export interface User {
  _id: string
  name: any
  email: string
  username: string
  password: string
  role: string
  status: any
  created_at: string
  updated_at: string
}
