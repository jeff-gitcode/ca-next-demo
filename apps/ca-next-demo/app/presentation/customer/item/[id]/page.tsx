"use client";

import { useParams } from 'next/navigation';
import { useGetUserById } from "../../list/page.hook";

const CustomerItem = () => {
  const params = useParams();
  const item = useGetUserById(params.id as string);


  if (item.isLoading) return <div>Fetching posts...</div>;

  return (
    <div>
      <h1>CustomerItem</h1>
      <div>{item?.data?.name}</div>
    </div>
  );
};

export default CustomerItem;
