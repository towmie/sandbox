import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

function TasksContextProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "task/checked":
        return [
          ...state.map((task) =>
            task.id === action.payload
              ? { ...task, status: !task.status }
              : task
          ),
        ];
      case "task/deleted":
        return [...state.filter((task) => task.id !== action.payload)];

      case "task/added": {
        return [...state, action.payload];
      }
      case "task/updated": {
        return [
          ...state.map((item) =>
            item.id === +action.payload.id
              ? { ...item, value: action.payload.value }
              : item
          ),
        ];
      }
      default:
        throw new Error("Action unkonwn");
    }
  }
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TaskContext);
  if (context === "undefined") console.log("ssss");
  return context;
}

export { TasksContextProvider, useTasks };
