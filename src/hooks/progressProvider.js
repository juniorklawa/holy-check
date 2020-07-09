import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import getChapters from '../services/getChapters';

const ProgressContext = createContext({});

export const ProgressProvider = ({children}) => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const storagedChapters = await getChapters();
      setChapters(storagedChapters);
      setLoading(false);
    }
    loadData();
  }, []);

  const deletePrays = useCallback(async () => {}, []);

  const deleteReadChapters = useCallback(async () => {}, []);

  const updateChapters = updatedChapters => {
    console.log(updatedChapters);
    setChapters([...updatedChapters]);
  };

  return (
    <ProgressContext.Provider
      value={{
        chapters,
        loading,
        deletePrays,
        deleteReadChapters,
        updateChapters,
      }}>
      {children}
    </ProgressContext.Provider>
  );
};

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within an ProgressProvider');
  }

  return context;
}
