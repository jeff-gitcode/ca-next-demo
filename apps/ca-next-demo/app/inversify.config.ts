import { Container } from "inversify";
import { TYPES } from "./types";
import { ICustomerService } from "./application/abstract/icustomer-service";
import CustomerService from "./infrastructure/customer/customer-service";
import { ICustomerUseCase } from "./application/abstract/icustomer-usecase";
import CustomerUseCase from "./application/customers/customer-usecase";

// const myContainer = new Container();

// myContainer.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService).inSingletonScope();

// myContainer.bind<ICustomerUseCase>(TYPES.CustomerUseCase).to(CustomerUseCase).inSingletonScope();

// console.log("myContainer: ", myContainer);

// export { myContainer };

const myContainer = new Container();

configRepositories(myContainer);
configUseCases(myContainer);

export { myContainer };

function configRepositories(container: Container) {
    container.bind<ICustomerService>(TYPES.CustomerService).to(CustomerService);
}

function configUseCases(container: Container) {
    container.bind<ICustomerUseCase>(TYPES.CustomerUseCase).to(CustomerUseCase);
}
