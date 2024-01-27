import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

export type OnlineContextState = {
  name: string;
  setName: Dispatch<SetStateAction<string>>,
}

export const OnlineContext = createContext<OnlineContextState>({
  name: '',
  setName: () => {},
});

export const OnlineContextProvider = (props: PropsWithChildren) => {
  const [name, setName] = useState<string>('');

  return (
    <OnlineContext.Provider
      value={{
        name,
        setName
      }}
    >
      {props.children}
    </OnlineContext.Provider>
  )
}

export const useOnlineContext = () => {
  return useContext(OnlineContext)
}
