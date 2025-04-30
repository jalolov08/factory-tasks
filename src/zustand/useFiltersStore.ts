import { formatDate } from '@utils/formatDate.util';
import { create } from 'zustand';

const getStartAndEndOfMonth = () => {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate),
  };
};

interface FiltersState {
  status: string;
  startDate: string;
  endDate: string;
  page: number;
  limit: number;
  sortBy: string;
  order: 'asc' | 'desc';
  clientId: string;
  produceId: string;

  setFilters: (filters: Partial<FiltersState>) => void;
  resetFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => {
  const { startDate, endDate } = getStartAndEndOfMonth();

  return {
    status: '',
    startDate,
    endDate,
    page: 1,
    limit: 10,
    sortBy: 'admissionDate',
    order: 'desc',
    clientId: '',
    produceId: '',

    setFilters: (filters) => set((state) => ({ ...state, ...filters })),

    resetFilters: () =>
      set(() => ({
        status: '',
        startDate,
        endDate,
        page: 1,
        limit: 10,
        sortBy: 'admissionDate',
        order: 'desc',
        clientId: '',
        produceId: '',
      })),
  };
});
