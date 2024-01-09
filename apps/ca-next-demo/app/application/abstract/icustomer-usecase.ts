import { Customer } from "../../domain/customer";

export interface ICustomerUseCase {
  getCustomers(): Promise<Customer[] | []>;
  getCustomer(id: string): Promise<Customer>;
  createCustomer(customer: Customer): Promise<Customer>;
  updateCustomer(customer: Customer): Promise<Customer>;
  deleteCustomer(id: string): Promise<Customer>;
}

// export namespace ICustomerUseCaseNameSpace {
//   export type output = Promise<Customer | null>;
//   export type outputs = Promise<Customer[] | []>;
// }
