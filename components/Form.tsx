"use client";

import { inputs } from "@/constants";
import CustomInput from "./ui/CustomInput";
import { useReducer } from "react";
import { reducer } from "@/utils";

const Form = () => {
  const [state, dispatch] = useReducer(reducer, {
    name1: "",
    name2: "",
    name3: "",
  });

  return (
    <div>
      <form className="flex flex-col gap-7">
        {inputs.map((el) => {
          return (
            <CustomInput
              name={el.name}
              placeholder={el.placeholder}
              required={el.required}
              value={state[el.name]}
              handleChange={(e) =>
                dispatch({
                  type: `change_${el.name}`,
                  newVal: e.target.value,
                })
              }
              key={el.name}
            />
          );
        })}
      </form>
    </div>
  );
};

export default Form;
