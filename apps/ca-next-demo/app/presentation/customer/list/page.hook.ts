import { useMutation, useQuery } from "react-query";
// import { container, registry } from "tsyringe";

import { ICustomerUseCase } from "../../../application/abstract/icustomer-usecase";
import { myContainer } from "../../../inversify.config";
import { TYPES } from "../../../types";
import { Customer } from "../../..//domain/customer";
// import { Customer } from "../../../domain/customer";
// import { useState } from "react";

// const [getResult, setGetResult] = useState<string | null>(null);

// const fortmatResponse = (res: any) => {
//   return JSON.stringify(res, null, 2);
// };

const useAllUsers = () => {

  return useQuery({
    queryKey: ['useAllUsers'], queryFn: async () => {
      const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
      return await useCase.getCustomers();
    }
  });

  // return data;
  // const { isLoading: isLoadingTutorials, refetch: getAllTutorials } = useQuery<Customer[], Error>(
  //   "query-customers",
  //   async () => {
  //     const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
  //     return await useCase.getCustomers();
  //   },
  //   {
  //     enabled: false,
  //     onSuccess: (res) => {
  //       setGetResult(fortmatResponse(res));
  //     },
  //     onError: (err: any) => {
  //       setGetResult(fortmatResponse(err.response?.data || err));
  //     },
  //   }
  // );

  // return getResult;

  // const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
  // const result = await useCase.getCustomers();
  // console.log("result: ", result);
  // return result;
  // return useQuery(["users"], result.data);
};

const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: ['useGetUserById', id], queryFn: async () => {
      const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
      return await useCase.getCustomer(id);
    }
  });
}

const useAddUser = () => {
  return useMutation(async (values: Customer) => {
    console.log("values: ", values);
    const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
    return await useCase.createCustomer(values);
  },
    {
      onError: (error: any) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log("success", data);
      },
    })

  // return useMutation({
  //   queryKey: ['useAddUser', user], queryFn: async () => {
  //     const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
  //     return await useCase.createCustomer(user);
  //   }
  // });
}

const useUpdateUser = () => {
  return useMutation(
    async (values: Customer) => {
      const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
      return await useCase.updateCustomer(values);
    },
    {
      onError: (error: any) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log("success", data);
      },
    }
  );
}

const useDeleteUser = () => {
  return useMutation(
    async (id: string) => {
      const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);
      return await useCase.deleteCustomer(id);
    },
    {
      onError: (error: any) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log("success", data);
      },
    }
  );
}

export {
  useAllUsers,
  useGetUserById,
  useAddUser,
  useUpdateUser,
  useDeleteUser
}
