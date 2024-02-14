import "reflect-metadata";

import { ICustomerService } from '../abstract/icustomer-service';
import CustomerUsecase from './customer-usecase';
import { Customer } from '../../domain/customer';

const user : Customer  ={
  id: 'customer1',
  name: 'customer1',
  email: 'customer1',
  password: 'customer1',
  token: 'customer1',
  phone: 'customer1',
  website: 'customer1',
  company: 'customer1'
};

describe('CustomerUsecase', () => {
  let customerUsecase: CustomerUsecase;
  let service: ICustomerService;

  beforeEach(() => {
    service = {
      getByUserId: jest.fn().mockResolvedValue('customer1'),
      getAllUsers: jest.fn().mockResolvedValue(['customer1', 'customer2']),
      addUser: jest.fn().mockResolvedValue(user),
      updateUser: jest.fn().mockResolvedValue(user),
      deleteUser: jest.fn().mockResolvedValue('customer1')
    };

    customerUsecase = new CustomerUsecase(service);
  });

  it('should return result when getCustomer', async () => {
    const customer = await customerUsecase.getCustomer('customer1');
    expect(customer).toBe('customer1');
  });

  it('should return result when getCustomers', async () => {
    const customers = await customerUsecase.getCustomers();
    expect(customers).toEqual(['customer1', 'customer2']);
  });

  it('should return result when createCustomer', async () => {
    const customer = await customerUsecase.createCustomer(user);
    expect(customer).toBe(user);
  });

  it('should return result when updateCustomer', async () => {
    const customer = await customerUsecase.updateCustomer(user);
    expect(customer).toBe(user);
  });

  it('should return result when deleteCustomer', async () => {
    const customer = await customerUsecase.deleteCustomer('customer1');
    expect(customer).toBe('customer1');
  });
});
