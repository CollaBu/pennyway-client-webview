import { useState } from 'react';

const DEFAULT_CLICKED_ID = 0;

export const useReportCategories = () => {
  const [clickedId, setClicked] = useState(DEFAULT_CLICKED_ID);
  const handleClickCategory = (id: number) => setClicked(id);

  return { clickedId, handleClickCategory };
};
