import { createContext, useContext, useReducer } from "react";

const HeaderContext = createContext();

const initialState = {
  departmentName: "",
  personInCharge1: "",
  isLoading: false,
  date: new Date(),
};

function reducer(state, action) {
  switch (action.type) {
  }
}

function HeaderProvider({ children }) {
  const [{ departmentName, personInCharge1, date, isLoading }, dispatch] =
    useReducer(reducer, initialState);

  //   async function insertIntoDatebase() {
  //     dispatch({ type: "loading" });
  //   }

  return (
    <HeaderContext.Provider
      value={{ departmentName, personInCharge1, isLoading, date }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);
  if (context === undefined)
    throw new Error("HeaderContext was used outside the HeaderProvider");
  return context;
}

export { HeaderProvider, useHeader };
