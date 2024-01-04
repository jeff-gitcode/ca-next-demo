import axios from 'axios';

export interface ICustomerService {
  getAllUsers(): Promise<any>;
  getByUserId(): Promise<any>;
  addUser(): Promise<any>;
  updateUser(): Promise<any>;
  deleteUser(): Promise<any>;
}

class CustomerService {
  /**
   * Get all posts
   * @returns
   */
  getAllUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  /**
   * Get By Id
   * @returns
   */
  getByUserId() {
    return axios.get("https://jsonplaceholder.typicode.com/users/1");
  }

  /**
   *To Add a Post
   * @returns
   */
  async addUser() {
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
    return res;
  }

  /**
   *To Update a Post
   * @returns
   */
  async updateUser() {
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
    return res;
  }

  /**
   *To Delete a Post
   * @returns
   */
  async deleteUser() {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );
    return res;
  }
}

export default new CustomerService();
