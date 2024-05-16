import { useState } from 'react';

import { DEFAULT_CLICKED_ID } from '../consts';

export const useReportCategories = () => {
  const [clickedId, setClicked] = useState(DEFAULT_CLICKED_ID);
  const handleClickCategory = (id: number) => setClicked(id);

  return { clickedId, handleClickCategory };
};
