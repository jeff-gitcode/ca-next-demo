import { useQuery } from "react-query";
// import { container, registry } from "tsyringe";

import { ICustomerUseCase } from "../../../application/abstract/icustomer-usecase";
import { myContainer } from "../../../inversify.config";
import { TYPES } from "../../../types";
// import { Customer } from "../../../domain/customer";
// import { useState } from "react";

// const [getResult, setGetResult] = useState<string | null>(null);

// const fortmatResponse = (res: any) => {
//   return JSON.stringify(res, null, 2);
// };

const useAllUsers = async () => {

  return useQuery({
    queryKey: ['groups'], queryFn: async () => {
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

export {
  useAllUsers
}
