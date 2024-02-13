"use client";

import { useParams } from 'next/navigation';
import { useAddUser, useDeleteUser, useGetUserById, useUpdateUser } from "../../list/page.hook";
import { Customer } from "../../../../domain/customer";
import Link from 'next/link';
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-field-data";
import { DynamicControl } from './dynamic-control';

interface FormProps {
  fields: DynamicFieldData[];
}

const CustomerItem = () => {
  const params = useParams();
  const item = params?.id > 0 ? useGetUserById(params.id as string) : {};
  const formMethods = useForm<Customer>();
  const {
    handleSubmit,
    formState: { isSubmitting, errors }
  } = formMethods;

  const fields: DynamicFieldData[] = [
    {
      fieldName: "id",
      inputType: "text",
      label: "id",
      defaultValue: item.data?.id,
      config: {
        required: "Required"
      }
    },
    {
      fieldName: "name",
      inputType: "text",
      label: "Name",
      defaultValue: item.data?.name,
      config: {
        required: "Required"
      }
    },
    {
      fieldName: "email",
      inputType: "text",
      label: "Email",
      defaultValue: item.data?.email,
      config: {
        required: "Required"
      }
    }
  ];

  const { mutate: updateMutate, isLoading: isUpdateLoading, isError: isUpdateError } = useUpdateUser();
  const { mutate: deleteMutate, isLoading: isDeleteLoading, isError: isDeleteError } = useDeleteUser();
  const { mutate: addMutate, isLoading: isAddLoading, isError: isAddError } = useAddUser();

  const handleUpdateEntity = async (data: SubmitHandler<Customer>) => {
    const newEntity: Customer = {
      id: params?.id > 0 ? data.id : "",
      name: data.name,
      email: data.email,
    };
    await params?.id > 0 ? updateMutate(newEntity) : addMutate(newEntity);
  };

  const handleDeleteEntity = async (data: SubmitHandler<Customer>) => {
    await deleteMutate(data.id);
  };

  if (item.isLoading || isUpdateLoading || isDeleteLoading || isAddLoading) return <div>Fetching data...</div>;
  if (item.error || isUpdateError || isDeleteError || isAddError) return <div>An error occurred</div>;

  const buttonName = params?.id > 0 ? "Update" : "Create";
  return (
    <div className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg p-4`}>
      <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border">
        <h1 className="block text-gray-700 text-sm font-bold mb-2">CustomerItem</h1>
        <FormProvider {...formMethods}>
          {fields.map((item, ind) => (
            <>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3" key={ind}>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={item.fieldName}>{item.label}</label>
                </div><div className="md:w-2/3" key={ind}>
                  <DynamicControl {...item} />
                  {errors[item.fieldName] && (
                    <div className="mb-3 text-normal text-red-500">
                      {errors[item.fieldName].message}
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </FormProvider>
        {/* <button type="submit">Submit</button> */}
        <div className="inline-flex">
          <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" onClick={handleSubmit(handleUpdateEntity)}>{buttonName}</button>
          <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" onClick={handleSubmit(handleDeleteEntity)}>Delete</button>
          <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded" >
            <Link href="/presentation/customer/list">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerItem;
