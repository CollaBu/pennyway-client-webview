import { useState } from 'react';

import { UNCLICKED_STATUS_ID } from '../consts';

export const useReportCategories = () => {
  const [clickedId, setClicked] = useState<number>(UNCLICKED_STATUS_ID);
  const handleClickCategory = (id: number) => setClicked(id);

  return { clickedId, handleClickCategory };
};
