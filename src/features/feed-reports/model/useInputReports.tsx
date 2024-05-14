import { useState } from 'react';

export const useInputReports = () => {
  const [content, setContent] = useState('');

  const handleInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return { content, handleInputContent };
};
