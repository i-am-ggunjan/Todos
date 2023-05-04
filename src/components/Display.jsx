import React, { useContext } from "react";
import { Store } from "../Store/TodoStore";

const Display = () => {
  const data = useContext(Store);

  return (
    <>
      <section className="shadow-sky-200 p-[2vw] mt-[2vw]">
        <article>
          {data.todo.map((value) => {
            return (
              <div
                className="border-[3px] rounded-lg shadow-lg shadow-sky-200 p-[2vw] flex flex-col gap-4"
                key={value.id}
              >
                <div>
                  <p className="">Title : {value.title}</p>
                  <p className="">Description : {value.description}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="border-2 px-2 rounded-md hover:bg-red-200 "
                    onClick={() => data.handleDelete(value.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="border-2 px-2 rounded-md hover:bg-red-200 "
                    onClick={() => data.handleUpdate(value.id)}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default Display;
