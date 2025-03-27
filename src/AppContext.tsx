import React, { ReactNode, useCallback, useState } from "react";
import opentype from "opentype.js";
import Papa from "papaparse";

interface AppContextState {
  msg: string;
}

interface AppContextValue extends AppContextState {
  setFile: (
    fileType: "baseFontFile" | "annotationFontFile" | "mappingCsv",
    file: File | null,
  ) => void;
  setMsg: (msg: string) => void;
}

const AppContext = React.createContext({} as AppContextValue);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppContextState>(DEFAULT_STATE);

  const setFile = useCallback(
    (
      fileType: "baseFontFile" | "annotationFontFile" | "mappingCsv",
      file: File | null,
    ) => {
      setState((prev) => ({
        ...prev,
        [fileType]: file,
      }));
      if (
        file &&
        (fileType === "baseFontFile" || fileType === "annotationFontFile")
      ) {
        file
          .arrayBuffer()
          .then((buffer) => opentype.parse(buffer))
          .then((font) => {
            setState((prev) => ({
              ...prev,
              [fileType === "baseFontFile" ? "baseFont" : "annotationFont"]:
                font,
            }));
          });
      }
      if (file && fileType === "mappingCsv") {
        file.text().then((csv) => {
          setState((prev) => ({
            ...prev,
            mapping: Papa.parse(csv).data.reduce(
              (acc: Record<string, string>, cur) => {
                const [key, value] = cur as [string, string];
                acc[key] = value;
                return acc;
              },
              {} as Record<string, string>,
            ),
          }));
        });
      }
    },
    [],
  );

  const setMsg = useCallback((msg: string) => {
    setState((prev) => ({ ...prev, msg: msg }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setFile,
        setMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

const DEFAULT_STATE: AppContextState = {
  msg: "",
};
