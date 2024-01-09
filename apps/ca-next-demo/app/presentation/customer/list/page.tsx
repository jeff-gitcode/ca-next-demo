"use client";

import { useAllUsers } from "./page.hook";

const CustomerList = () => {
  const { data } = useAllUsers();
  console.log("data", data);

  return (
    <div>
      <h1>Customers</h1>
    </div>
  );
};

export default CustomerList;

