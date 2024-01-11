import { Customer } from "../../domain/customer";

export abstract class ICustomerService {
  abstract getAllUsers(): Promise<Customer[] | []>;
  abstract getByUserId(id: string): Promise<Customer>;
  abstract addUser(user: Customer): Promise<Customer>;
  abstract updateUser(user: Customer): Promise<Customer>;
  abstract deleteUser(id: string): Promise<Customer>;
}
