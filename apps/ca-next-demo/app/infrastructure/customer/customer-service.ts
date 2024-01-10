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
  //  * Get all posts
  //  * @returns
  //  */
  async getAllUsers(): Promise<Customer[] | []> {
    const response = await axios.get<Customer[]>("https://jsonplaceholder.typicode.com/users");
    // const result: Customer = {
    //   id: "2",
    //   name: "John Doe Update",
    //   email: ""
    // };

    //return [result];
    // const response = await apiClient.get<Customer[]>("/users");
    return response.data;
  }

  // /**
  //  * Get By Id
  //  * @returns
  //  */
  // async getByUserId(): Promise<Customer> {
  //   const result: Customer = {
  //     id: "2",
  //     name: "John Doe Update",
  //     email: ""
  //   };

  //   return result;

  //   // return axios.get("https://jsonplaceholder.typicode.com/users/1");
  // }

  // /**
  //  *To Add a Post
  //  * @returns
  //  */
  // async addUser(): Promise<Customer> {
  //   const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: 2,
  //       name: "John Doe",
  //       username: "John",
  //       email: "john.doe@test.com",
  //       address: {}
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   const result: Customer = {
  //     id: "2",
  //     name: "John Doe Update",
  //     email: ""
  //   };

  //   return result;

  // }

  // /**
  //  *To Update a Post
  //  * @returns
  //  */
  // async updateUser(): Promise<Customer> {
  //   const res = await axios.put(
  //     "https://jsonplaceholder.typicode.com/posts/1",
  //     {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: 2,
  //         name: "John Doe Update",
  //         username: "John",
  //         email: "john.doe@test.com",
  //         address: {}
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     }
  //   );

  //   const result: Customer = {
  //     id: "2",
  //     name: "John Doe Update",
  //     email: ""
  //   };

  //   return result;
  // }

  // /**
  //  *To Delete a Post
  //  * @returns
  //  */
  // async deleteUser(): Promise<Customer> {
  //   const res = await axios.delete(
  //     "https://jsonplaceholder.typicode.com/posts/1",
  //     {
  //       method: "DELETE",
  //     }
  //   );

  //   const result: Customer = {
  //     id: "2",
  //     name: "John Doe Update",
  //     email: ""
  //   };

  //   return result;

  //   // return res;
  // }
}

export default CustomerService;
