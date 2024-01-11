"use client";

import { useAddUser, useAllUsers, useDeleteUser, useUpdateUser } from "./page.hook";
import { Customer } from "../../../domain/customer";
import Link from "next/link";

const CustomerList = () => {
  const { data: list, error, isLoading: isListLoading } = useAllUsers();
  const { mutate: addMutate, isLoading: isAddLoading, isError: isAddError } = useAddUser();
  // console.log("data", data);

  const handleCreateEntity = async () => {
    const newEntity: Customer = {
      id: "2",
      name: "John Doe",
      email: "john.doe@test.com",
    };

    addMutate(newEntity);
  };



  if (isListLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;

  console.log("CustomerList", list);
  return (
    <div>
      <h1>Customers</h1>
      {list?.map((item: Customer) => (
        <div key={item.id}>
          <Link
            href={`/presentation/customer/item/${item.id}`}
            key={item.id}>
            <li>
              {item.name}
            </li>
          </Link>
        </div>
      ))}
      <button onClick={() => handleCreateEntity()}>Create Entity</button>
    </div>
  );
};

export default CustomerList;

