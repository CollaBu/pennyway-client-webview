import { useState } from 'react';

import { useInput, useToggle } from '@/shared/hooks';

import { UNCLICKED_STATUS_ID } from '../consts';

export const useReportForm = () => {
  const [clickedId, setClickedId] = useState<number>(UNCLICKED_STATUS_ID);
  const [content, handleInputContent] = useInput();
  const [isBlind, toggleBlind] = useToggle(false);

  const handleClickCategory = (id: number) => setClickedId(id);

  return {
    clickedId,
    content,
    isBlind,
    handleClickCategory,
    handleInputContent,
    toggleBlind,
  };
};
