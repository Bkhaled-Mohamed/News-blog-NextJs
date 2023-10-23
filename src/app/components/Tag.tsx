import React from "react";
import { news } from "../types";

const Tag = ({ data }: { data: string }) => {
  return (
    <div className="bg-black  flex flex-row  rounded-md px-2 py-1 shadow-md text-xs text-white">
      {data}
    </div>
  );
};

export default Tag;
