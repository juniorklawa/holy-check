import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import getChapters from '../services/getChapters';
import deleteAllReadChapters from '../services/deleteAllReadChapters';

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

  /**
   * @TODO delete all prays
   */

  const deleteReadChapters = useCallback(async () => {
    await deleteAllReadChapters();
    setChapters([]);
  }, []);

  const updateChapters = useCallback(updatedChapters => {
    setChapters([...updatedChapters]);
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        chapters,
        loading,
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
