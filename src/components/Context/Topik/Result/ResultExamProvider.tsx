import {createContext, ReactNode, useContext, useState} from 'react';

interface ResultContextType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  idxPart: number;
  setIdxPart: React.Dispatch<React.SetStateAction<number>>;
  idxQuestion: number;
  setIdxQuestion: React.Dispatch<React.SetStateAction<number>>;
  typeSection: number | null;
  setTypeSection: React.Dispatch<React.SetStateAction<number | null>>;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultValue: ResultContextType = {
  data: null,
  setData: () => {},
  idxPart: 0,
  setIdxPart: () => {},
  idxQuestion: 0,
  setIdxQuestion: () => {},
  typeSection: null,
  setTypeSection: () => {},
  isShow: false,
  setIsShow: () => {},
};

const ResultContext = createContext<ResultContextType>(defaultValue);
export const useDataResult = () => useContext(ResultContext);
export const ResultExamProvider = ({children}: {children: ReactNode}) => {
  const [data, setData] = useState<any>(null);
  const [idxPart, setIdxPart] = useState<number>(0);
  const [idxQuestion, setIdxQuestion] = useState<number>(0);
  const [typeSection, setTypeSection] = useState<number | null>(null);
  const [isShow, setIsShow] = useState(false);
  return (
    <ResultContext.Provider
      value={{
        data,
        setData,
        idxPart,
        setIdxPart,
        idxQuestion,
        setIdxQuestion,
        typeSection,
        setTypeSection,
        isShow,
        setIsShow,
      }}>
      {children}
    </ResultContext.Provider>
  );
};
