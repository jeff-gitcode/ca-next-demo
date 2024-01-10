"use client";

import { useAllUsers } from "./page.hook";

const CustomerList = () => {
  const { data, error, isLoading } = useAllUsers();
  // console.log("data", data);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;

  console.log("CustomerList", data);
  return (
    <div>
      <h1>Customers</h1>
    </div>
  );
};

export default CustomerList;

