import "reflect-metadata";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CustomerService from "./customer-service";

describe.each([
    ['customer1', 'customer1'],
    ['customer2', 'customer2'],
  ])('getCustomer', (customerId, expected) => {
    let customerService: CustomerService;

    beforeEach(() => {
      customerService = new CustomerService();
    });

    it(`should return ${expected}`, async () => {
      const mock = new MockAdapter(axios);
      mock.onGet(`https://jsonplaceholder.typicode.com/users/${customerId}`).reply(200, expected);

      const customer = await customerService.getByUserId(customerId);
      expect(customer).toBe(expected);
    });
  });

