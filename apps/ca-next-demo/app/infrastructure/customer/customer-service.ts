import axios from 'axios';

import { ICustomerService } from '../../application/abstract/icustomer-service';
import { ICustomerUseCase } from '../../application/abstract/icustomer-usecase';
import { Customer } from '../../domain/customer';

class CustomerService implements ICustomerService {
  /**
   * Get all posts
   * @returns
   */
  async getAllUsers(): ICustomerUseCase.outputs {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    const result: Customer = {
      id: "2",
      name: "John Doe Update",
      email: ""
    };

    return [result];
  }

  /**
   * Get By Id
   * @returns
   */
  async getByUserId(): ICustomerUseCase.output {
    const result: Customer = {
      id: "2",
      name: "John Doe Update",
      email: ""
    };

    return result;

    // return axios.get("https://jsonplaceholder.typicode.com/users/1");
  }

  /**
   *To Add a Post
   * @returns
   */
  async addUser(): ICustomerUseCase.output {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        id: 2,
        name: "John Doe",
        username: "John",
        email: "john.doe@test.com",
        address: {}
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result: Customer = {
      id: "2",
      name: "John Doe Update",
      email: ""
    };

    return result;

  }

  /**
   *To Update a Post
   * @returns
   */
  async updateUser(): ICustomerUseCase.output {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify({
          id: 2,
          name: "John Doe Update",
          username: "John",
          email: "john.doe@test.com",
          address: {}
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const result: Customer = {
      id: "2",
      name: "John Doe Update",
      email: ""
    };

    return result;
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteUser(): ICustomerUseCase.output {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    const result: Customer = {
      id: "2",
      name: "John Doe Update",
      email: ""
    };

    return result;

    // return res;
  }
}

export default CustomerService;
