import {inject, injectable } from "tsyringe";
import { Customer } from "../../domain/customer";
import { ICustomerUseCase } from "../abstract/icustomer-usecase";
import { ICustomerService } from "../abstract/icustomer-service";

@injectable()
export class CustomerUseCase implements ICustomerUseCase {

  constructor(@inject(ICustomerService)
  private service: ICustomerService) {

  }

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
