import { Customer } from "../../domain/customer";

export interface ICustomerUseCase {
  getCustomers(): ICustomerUseCase.outputs;
  getCustomer(id: string): ICustomerUseCase.output;
  createCustomer(customer: Customer): ICustomerUseCase.output;
  updateCustomer(customer: Customer): ICustomerUseCase.output;
  deleteCustomer(id: string): ICustomerUseCase.output;
}

export namespace ICustomerUseCase {
  export type output = Promise<Customer | null>;
  export type outputs = Promise<Customer[] | []>;
}
