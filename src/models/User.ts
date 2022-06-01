export interface UserInterface {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class UserDTO implements UserInterface {
  id?: number;
  avatar!: string;
  email!: string;
  first_name!: string;
  last_name!: string;
}

export default class User extends UserDTO {
  constructor(dto: UserDTO) {
    super();
    Object.assign(this, dto);
  }

  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
