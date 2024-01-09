import { Customer } from "../../domain/customer";

export interface ICustomerService {
  getAllUsers(): Promise<Customer[] | []>;
  getByUserId(): Promise<Customer>;
  addUser(): Promise<Customer>;
  updateUser(): Promise<Customer>;
  deleteUser(): Promise<Customer>;
}
