"use client";

import { useParams } from 'next/navigation';
import { useDeleteUser, useGetUserById, useUpdateUser } from "../../list/page.hook";
import { Customer } from "../../../../domain/customer";
import Link from 'next/link';

const CustomerItem = () => {
  const params = useParams();
  const item = useGetUserById(params.id as string);
  const { mutate: updateMutate, isLoading: isUpdateLoading, isError: isUpdateError } = useUpdateUser();
  const { mutate: deleteMutate, isLoading: isDeleteLoading, isError: isDeleteError } = useDeleteUser();

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

  if (item.isLoading || isUpdateLoading || isDeleteLoading) return <div>Fetching data...</div>;
  if (item.error || isUpdateError || isDeleteError) return <div>An error occurred</div>;

  const { data: user } = item;
  const { id } = params;
  return (
    <div className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg p-4`}>
      <h1>CustomerItem</h1>
      <div className="flex items-center">{user?.name}</div>
      <button onClick={() => handleUpdateEntity(id)}>Update</button>
      <button onClick={() => handleDeleteEntity(id)}>Delete</button>
      <button>
        <Link href="/presentation/customer/list">Back</Link>
      </button>
    </div>
  );
};

export default CustomerItem;
