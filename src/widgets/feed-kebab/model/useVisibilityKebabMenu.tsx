import { useCallback, useState } from 'react';

export const useVisibilityKebabMenu = () => {
  const [isVisibilityKebabMenu, setIsVisibilityKebabMenu] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisibilityKebabMenu((prevVisibility) => !prevVisibility);
  }, []);

  return { isVisibilityKebabMenu, toggleVisibility };
};
