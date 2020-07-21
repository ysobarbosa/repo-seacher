export interface UserModel {
  login: string;
  avatar_url: string;
  repos_url: string;
  html_url: string;
  name: string;
  location: string;
  public_repos: string;
  followers: number;
}

export interface Repositories {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  }
  followers_url: string,
  organizations_url: string;
  repos_url: string
  description: string;
}
