import { useState } from 'react';

import { REPORTS } from '../consts';

export const useCheckbox = () => {
  const [checkedItemMap, setCheckedItemMap] = useState(
    new Map<number, boolean>(REPORTS.map((item) => [item.id, false])),
  );

  const handleClickItem = (id: number) => {
    setCheckedItemMap((prev) => {
      const newCheckedItem = new Map(prev);
      newCheckedItem.set(id, !newCheckedItem.get(id));
      return newCheckedItem;
    });
  };

  return { checkedItemMap, handleClickItem };
};
