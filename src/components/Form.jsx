import React, { useContext, useEffect, useRef, useState } from "react";
import { Store } from "../Store/TodoStore";

const Form = () => {
  const data = useContext(Store);
  let [title, setTitle] = useState();
  let [description, setDescription] = useState();

  let titleRef = useRef();
  let descriptionRef = useRef();
  // console.log(titleRef)

  useEffect(() => {
    data.setTitleRefStore(titleRef);
    data.setDescriptionRefStore(descriptionRef);
  }, []);

  return (
    <>
      <section className="flex justify-center pt-[3vw]">
        <form
          className="flex justify-center gap-4 max-sm:flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            data.handleCreate(title, description);
          }}
        >
          <input
            type="text"
            placeholder="Title"
            className="border-[3px] rounded-lg p-[0.5vw]   border-sky-500"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
          <input
            type="text"
            className="border-[3px] rounded-lg p-[0.5vw]   border-sky-500"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            ref={descriptionRef}
          />

          <button className="border-[3px] rounded-lg p-[0.5vw]   border-sky-500 bg-sky-200  hover:bg-sky-300">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
