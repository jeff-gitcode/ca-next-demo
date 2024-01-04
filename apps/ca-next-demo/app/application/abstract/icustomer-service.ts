import { ICustomerUseCase } from "./icustomer-usecase";

export interface ICustomerService {
  getAllUsers(): ICustomerUseCase.outputs;
  getByUserId(): ICustomerUseCase.output;
  addUser(): ICustomerUseCase.output;
  updateUser(): ICustomerUseCase.output;
  deleteUser(): ICustomerUseCase.output;
}
