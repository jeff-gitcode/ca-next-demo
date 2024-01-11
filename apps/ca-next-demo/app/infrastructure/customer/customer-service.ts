import { injectable } from 'inversify';
import axios from 'axios';

import { ICustomerService } from '../../application/abstract/icustomer-service';
import { Customer } from '../../domain/customer';

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});

@injectable()
class CustomerService implements ICustomerService {
  // /**
  //  * Get all users
  //  * @returns
  //  */
  async getAllUsers(): Promise<Customer[] | []> {
    const response = await axios.get<Customer[]>("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }

  /**
   * Get By Id
   * @returns
   */
  async getByUserId(id: string): Promise<Customer> {
    const response = await axios.get<Customer>("https://jsonplaceholder.typicode.com/users/" + id);

    return response.data;
  }

  /**
   *To Add a user
   * @returns
   */
  async addUser(user: Customer): Promise<Customer> {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return response.data;
  }

  /**
   *To Update a user
   * @returns
   */
  async updateUser(user: Customer): Promise<Customer> {
    const response = await axios.put(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    return response.data;
  }

  /**
   *To Delete a user
   * @returns
   */
  async deleteUser(): Promise<Customer> {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        method: "DELETE",
      }
    );

    return response.data;
  }
}

export default CustomerService;
