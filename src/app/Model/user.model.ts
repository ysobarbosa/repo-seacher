export interface UserModel {
  login: string;
  avatar_url: string;
  repos_url: string;
}

export interface Repositories {
  id: number;
  name: string;
  description: string;
}
