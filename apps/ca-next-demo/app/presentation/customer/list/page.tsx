"use client";

import { useAddUser, useAllUsers, useDeleteUser, useUpdateUser } from "./page.hook";
import { Customer } from "../../../domain/customer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const CustomerList = () => {
  const router = useRouter();
  const { data: list, error, isLoading: isListLoading } = useAllUsers();
  const { mutate: addMutate, isLoading: isAddLoading, isError: isAddError } = useAddUser();
  // const [data, setData] = useState<Customer[]>(list as Customer[] || []);
  // console.log("data", data);

  const handleCreateEntity = async () => {
    const newEntity: Customer = {
      id: "2",
      name: "John Doe",
      email: "john.doe@test.com",
    };

    router.push('/presentation/customer/item/new');
    // addMutate(newEntity);
  };

  const columnHelper = createColumnHelper<Customer>();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("email", {
      header: "Email",
      cell: (info) => info.getValue(),
    }),
  ];

  // const columns: ColumnDef<Customer>[] = [];
  const table = useReactTable({
    data: list as Customer[],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });


  if (isListLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;


  console.log("CustomerList", list);

  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">>
        <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}  scope="col" className="px-6 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}  className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td>
                <Link
                  href={`/presentation/customer/item/${row.original.id}`}
                  key={row.id}>
                  <li>
                    Edit
                  </li>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
    </table>
    <button className="mt-4 w-auto bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"  onClick={() => handleCreateEntity()}>Create Entity</button>
    </div>
  );

  // return (
  //   <div>
  //     <h1>Customers</h1>
  //     {list?.map((item: Customer) => (
  //       <div key={item.id}>
  //         <Link
  //           href={`/presentation/customer/item/${item.id}`}
  //           key={item.id}>
  //           <li>
  //             {item.name}
  //           </li>
  //         </Link>
  //       </div>
  //     ))}
  //     <button onClick={() => handleCreateEntity()}>Create Entity</button>
  //   </div>
  // );
};

export default CustomerList;

