"use client";

import { useAddUser, useAllUsers, useDeleteUser, useUpdateUser } from "./page.hook";
import { Customer } from "../../../domain/customer";
import Link from "next/link";

const CustomerList = () => {
  const { data: list, error, isLoading: isListLoading } = useAllUsers();
  const { mutate: addMutate, isLoading: isAddLoading, isError: isAddError } = useAddUser();
  const { mutate: updateMutate, isLoading: isUpdateLoading, isError: isUpdateError } = useUpdateUser();
  const { mutate: deleteMutate, isLoading: isDeleteLoading, isError: isDeleteError } = useDeleteUser();
  // console.log("data", data);

  const handleCreateEntity = async () => {
    const newEntity: Customer = {
      id: "2",
      name: "John Doe",
      email: "john.doe@test.com",
    };

    addMutate(newEntity);
  };

  const handleUpdateEntity = async (id: string) => {
    const newEntity: Customer = {
      id: id,
      name: "John Doe Updated",
      email: "john.doe@test.com",
    };

    updateMutate(newEntity);
  };

  const handleDeleteEntity = async (id: string) => {
    deleteMutate(id);
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
          <button onClick={() => handleUpdateEntity(item.id)}>Update</button>
          <button onClick={() => handleDeleteEntity(item.id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => handleCreateEntity()}>Create Entity</button>
    </div>
  );
};

export default CustomerList;

