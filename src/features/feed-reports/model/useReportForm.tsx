import { useState } from 'react';

import { useInput, useToggle } from '@/shared/hooks';

import { REPORT_CATEGORIES, UNCLICKED_STATUS_ID } from '../consts';

export const useReportForm = () => {
  const [clickedId, setClickedId] = useState<number>(UNCLICKED_STATUS_ID);
  const [content, handleInputContent] = useInput();
  const [isBlind, toggleBlind] = useToggle(false);

  const isValidReportForm = clickedId !== UNCLICKED_STATUS_ID;
  const isDisabledReportForm = !isValidReportForm;

  const handleClickCategory = (id: number) => setClickedId(id);
  const createReportBody = () => ({
    category: REPORT_CATEGORIES[clickedId],
    content,
    isBlind,
  });

  return {
    clickedId,
    content,
    isBlind,
    isDisabledReportForm,
    handleClickCategory,
    handleInputContent,
    toggleBlind,
    createReportBody,
  };
};
