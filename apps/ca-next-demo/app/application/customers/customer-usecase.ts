// import { inject, injectable, registry } from "tsyringe";
import { inject, injectable } from "inversify";
import { Customer } from "../../domain/customer";
import { ICustomerUseCase } from "../abstract/icustomer-usecase";
import { TYPES } from "../../types";
import { ICustomerService } from "../abstract/icustomer-service";


@injectable()
class CustomerUseCase implements ICustomerUseCase {
  constructor(
    @inject(TYPES.CustomerService) private service: ICustomerService
  ) {
    console.log("CustomerUseCase constructor");
    console.log("iCustomerService: ", service);
  }

  async getCustomers(): Promise<Customer[] | []> {
    return await this.service.getAllUsers();
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

export default CustomerUseCase;

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
