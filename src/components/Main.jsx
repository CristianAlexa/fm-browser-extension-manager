import React from "react";
import Button from "./ui/Button";

const Main = () => {
  return (
    <main className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-semibold dark:text-white">
          Extension List
        </h1>
        <div className="flex gap-4 items-center">
          <Button>All</Button>
          <Button>Active</Button>
          <Button>Inactive</Button>
        </div>
      </div>
      <div>cards here</div>
    </main>
  );
};

export default Main;
