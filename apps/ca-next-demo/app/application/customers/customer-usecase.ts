import { Customer } from "../../domain/customer";
import { ICustomerUseCase } from "../abstract/icustomer-usecase";

export class CustomerUseCase implements ICustomerUseCase {
  async createCustomer(customer: Customer): ICustomerUseCase.output {
    // Implementation logic goes here
    return null;
  }

  async getCustomer(id: string): ICustomerUseCase.output {
    // Implementation logic goes here
    return null;
  }

  async updateCustomer(customer: Customer): ICustomerUseCase.output {
    // Implementation logic goes here
    return null;
  }

  async deleteCustomer(id: string): ICustomerUseCase.output {
    // Implementation logic goes here
    return null;
  }

  async getCustomers(): ICustomerUseCase.outputs {
    // Implementation logic goes here
    return [];
  }
}
