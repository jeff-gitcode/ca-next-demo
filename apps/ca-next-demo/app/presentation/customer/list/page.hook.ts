import { useQuery } from "react-query";
import { container } from "tsyringe";

import { ICustomerUseCase } from "../application/abstract/icustomer-usecase";

const useAllUsers = () => {
  const usecase: ICustomerUseCase = container.resolve(ICustomerUseCase);

  return useQuery(["users"], usecase.getAllUsers());
};

export {
  useAllUsers
}
