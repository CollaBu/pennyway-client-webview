import { useState } from 'react';

import { REPORT_CATEOGRIES } from '../consts';

type ReportCategoryId = (typeof REPORT_CATEOGRIES)[number]['id'];

export const useReportCategories = () => {
  const [categories, setCategories] = useState(
    new Map<ReportCategoryId, boolean>(
      REPORT_CATEOGRIES.map((item) => [item.id, false]),
    ),
  );

  const handleClickCategory = (id: ReportCategoryId) => {
    setCategories((prev) => {
      const newCheckedItem = new Map(prev);
      newCheckedItem.set(id, !newCheckedItem.get(id));
      return newCheckedItem;
    });
  };

  return { categories, handleClickCategory };
};

export function getCategoryName(id: ReportCategoryId) {
  const category = REPORT_CATEOGRIES.find((item) => item.id === id);
  return category ? category.name : '';
}
