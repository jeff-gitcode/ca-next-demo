import { useQuery } from "react-query";
// import { container, registry } from "tsyringe";

import { ICustomerUseCase } from "../../../application/abstract/icustomer-usecase";
import { myContainer } from "../../../inversify.config";
import { TYPES } from "../../../types";

const useAllUsers = () => {
  const useCase = myContainer.get<ICustomerUseCase>(TYPES.CustomerUseCase);

  return useQuery(["users"], useCase.getCustomers);
};

export {
  useAllUsers
}
