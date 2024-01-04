import { container } from "tsyringe";
import CustomerService  from "./customer/customer-service";
import { ICustomerService } from "../application/abstract/icustomer-service";

container.registerSingleton<ICustomerService>(ICustomerService, CustomerService);
