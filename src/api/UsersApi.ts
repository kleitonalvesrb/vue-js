import axios from 'axios'
import VueAxios from 'vue-axios'

import User, { UserDTO } from "@/models/User";

interface RequestInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDTO[];
}
export abstract class UserApi {
  private static usersAxios = axios.create();

  static async getAllUsers(): Promise<User[]> {
    const response = await this.usersAxios.get<RequestInterface>(
      "https://reqres.in/api/users"
    );
    console.log(response);
    return response.data.data.map((UserDTO) => new User(UserDTO));
  }
}
