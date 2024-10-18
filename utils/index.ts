import { FormReducerAction, FormValues } from "@/types";

function reducer(state: FormValues, action: FormReducerAction) {
  switch (action.type) {
    case "change_name1": {
      return {
        name1: action.newVal,
        name2: state.name2,
        name3: state.name3,
      };
    }
    case "change_name2": {
      return {
        name1: state.name1,
        name2: action.newVal,
        name3: state.name3,
      };
    }
    case "change_name3": {
      return {
        name1: state.name1,
        name2: state.name2,
        name3: action.newVal,
      };
    }
    default:
      return state;
  }
  throw Error("Unknown action: " + action.type);
}

export { reducer };
