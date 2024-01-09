import { Container } from "inversify";
import { TYPES } from "./types";
import { ICustomerService } from "./application/abstract/icustomer-service";
import CustomerService from "./infrastructure/customer/customer-service";
import { ICustomerUseCase } from "./application/abstract/icustomer-usecase";
import { CustomerUseCase } from "./application/customers/customer-usecase";

const myContainer = new Container();

myContainer.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService);

myContainer.bind<ICustomerUseCase>(TYPES.CustomerUseCase).to(CustomerUseCase);

export { myContainer };
