"use client";

import { useAllUsers } from "./page.hook";

const CustomerList = async () => {
  const { data, status } = await useAllUsers();
  console.log("data", data);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Customers</h1>
    </div>
  );
};

export default CustomerList;

