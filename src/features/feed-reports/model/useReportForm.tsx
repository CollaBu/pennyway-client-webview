import { useState } from 'react';

import { useInput, useToggle } from '@/shared/hooks';

import { REPORT_CATEGORIES, UNCLICKED_STATUS_ID } from '../consts';
import { getFeedReportForm } from '../store/report-store';

export const useReportForm = (feedId: number) => {
  const {
    clickedId: prevClickedId,
    content: prevContent,
    isBlind: prevIsBlind,
  } = getFeedReportForm(feedId);

  const [clickedId, setClickedId] = useState<number>(prevClickedId);
  const [content, handleInputContent] = useInput(prevContent);
  const [isBlind, toggleBlind] = useToggle(prevIsBlind);

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
