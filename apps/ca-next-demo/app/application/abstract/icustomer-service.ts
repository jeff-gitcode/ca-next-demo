import { Customer } from "../../domain/customer";

export abstract class ICustomerService {
  abstract getAllUsers(): Promise<Customer[] | []>;
  // abstract getByUserId(): Promise<Customer>;
  // abstract addUser(): Promise<Customer>;
  // abstract updateUser(): Promise<Customer>;
  // abstract deleteUser(): Promise<Customer>;
}
