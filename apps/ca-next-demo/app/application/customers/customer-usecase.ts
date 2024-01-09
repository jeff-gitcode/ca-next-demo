// import { inject, injectable, registry } from "tsyringe";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Customer } from "../../domain/customer";
import { ICustomerUseCase } from "../abstract/icustomer-usecase";
import { TYPES } from "../../types";
import * as icustomerService from "../abstract/icustomer-service";


@injectable()
export class CustomerUseCase implements ICustomerUseCase {
  constructor(
    @inject(TYPES.CustomerService)
    private readonly iCustomerService: icustomerService.ICustomerService
  ) {}

  getCustomers(): Promise<Customer[] | []> {
    return this.iCustomerService.getAllUsers();
  }
  getCustomer(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  createCustomer(customer: Customer): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  updateCustomer(customer: Customer): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
  deleteCustomer(id: string): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
}

// @injectable()
// export class CustomerUseCase implements ICustomerUseCase {
//   @inject(TYPES.ICustomerService) private iCustomerService: ICustomerService;

//   async createCustomer(customer: Customer): Promise<Customer> {
//     // Implementation logic goes here
//     return this.iCustomerService.addUser();
//   }

//   async getCustomer(id: string): Promise<Customer> {
//     // Implementation logic goes here
//     return this.iCustomerService.getByUserId();
//   }

//   async updateCustomer(customer: Customer): Promise<Customer> {
//     // Implementation logic goes here
//     return this.iCustomerService.updateUser();
//   }

//   async deleteCustomer(id: string): Promise<Customer> {
//     // Implementation logic goes here
//     return this.iCustomerService.deleteUser();
//   }

//   async getCustomers(): Promise<Customer[] | []> {
//     // Implementation logic goes here
//     return this.iCustomerService.getAllUsers();
//   }
// }
