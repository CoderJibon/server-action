"use client";

import { deleteData } from "@/actions/DevsForm.js";

function Button({ dataId }) {
  const deleteDeves = async (id) => {
    await deleteData(id);
  };
  return (
    <>
      <button onClick={() => deleteDeves(dataId)} className="p-4 bg-red-700">
        x
      </button>
    </>
  );
}

export default Button;
