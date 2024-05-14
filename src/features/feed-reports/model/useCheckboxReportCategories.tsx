import { useState } from 'react';

import { REPORT_CATEOGRIES } from '../consts';

export const useCheckboxReportCategories = () => {
  const [categories, setCategories] = useState(
    new Map<number, boolean>(REPORT_CATEOGRIES.map((item) => [item.id, false])),
  );

  const handleClickCategory = (id: number) => {
    setCategories((prev) => {
      const newCheckedItem = new Map(prev);
      newCheckedItem.set(id, !newCheckedItem.get(id));
      return newCheckedItem;
    });
  };

  return { categories, handleClickCategory };
};
