import { ICustomerService } from "../../../application/customers/abstract/icustomer-service";
import { Customer } from "app/domain/customer";
import { TYPES } from "app/types";
import { Container } from "inversify";
import { useAllUsers } from "./page.hook";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from "@testing-library/react";

const user: Customer = {
  id: 'customer1',
  name: 'customer1',
  email: 'customer1',
  password: 'customer1',
  token: 'customer1',
  phone: 'customer1',
  website: 'customer1',
  company: 'customer1'
};

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue(({ data: {...user}, isLoading: false,error:{} }))
 }));

describe('CustomerListPageHook', () => {
  let iocContainer!: Container;
  let service: ICustomerService;

  beforeEach(() => {
    service = {
      getByUserId: jest.fn().mockResolvedValue('customer1'),
      getAllUsers: jest.fn().mockResolvedValue(['customer1', 'customer2']),
      addUser: jest.fn().mockResolvedValue(user),
      updateUser: jest.fn().mockResolvedValue(user),
      deleteUser: jest.fn().mockResolvedValue('customer1')
    };

    iocContainer = new Container();
    iocContainer.bind(TYPES.CustomerUseCase).to(service);
  });

  it('should ...', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useAllUsers(), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(user));
  });
});
