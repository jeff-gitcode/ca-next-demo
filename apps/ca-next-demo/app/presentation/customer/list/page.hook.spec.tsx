import { Customer } from "app/domain/customer";
import { TYPES } from "app/types";
import { Container } from "inversify";
import { useAddUser, useAllUsers, useGetUserById, useUpdateUser } from "./page.hook";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from "@testing-library/react";
import { ICustomerUseCase } from "@/app/application/abstract/icustomer-usecase";
import * as ReactQuery from "@tanstack/react-query";

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

jest.mock("@tanstack/react-query", () => {
  const original: typeof ReactQuery = jest.requireActual("@tanstack/react-query");

  return {
    ...original,
    useQuery: () => ({ isLoading: false, error: {}, data: [user] }),
  };
});

describe('CustomerListPageHook', () => {
  let iocContainer!: Container;
  let service: ICustomerUseCase;

  beforeEach(() => {
    service = {
      getCustomers: jest.fn().mockResolvedValue([user]),
      getCustomer: jest.fn().mockResolvedValue(user),
      createCustomer: jest.fn().mockResolvedValue(user),
      updateCustomer: jest.fn().mockResolvedValue(user),
      deleteCustomer: jest.fn().mockResolvedValue(user)
    };

    iocContainer = new Container();
    iocContainer.bind(TYPES.CustomerUseCase).to(service);
  });

  it('should return when useAllUsers', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useAllUsers(), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual([user]));
  });

  it('should return when useGetUserById', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useGetUserById('customer1'), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(user));
  });

  it('should return when useAddUser', async () => {
    const queryClient = new QueryClient();

    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

    const { result } = renderHook(() => useAddUser(), { wrapper });

    await waitFor(() => expect(result.current.data).toEqual(user));
  });
});
