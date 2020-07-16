import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import getBookProgress from '../services/getBookProgress';
import deleteAllReadChapters from '../services/deleteAllReadChapters';

const ProgressContext = createContext({});

export const ProgressProvider = ({children}) => {
  const [bookProgressList, setBookProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const storagedBookProgress = await getBookProgress();
      setBookProgress([...storagedBookProgress]);
      setLoading(false);
    }
    loadData();
  }, []);

  const deleteReadChapters = useCallback(async () => {
    await deleteAllReadChapters();
    setBookProgress([]);
  }, []);

  const updateBookProgress = updatedBooks => {
    setBookProgress([...updatedBooks]);
  };

  return (
    <ProgressContext.Provider
      value={{
        bookProgressList,
        loading,
        deleteReadChapters,
        updateBookProgress,
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
