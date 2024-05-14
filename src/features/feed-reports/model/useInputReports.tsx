import { useState } from 'react';

export const useInputReports = () => {
  const [content, setContent] = useState('');
  const contentLength = content.length;

  const handleInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return { content, contentLength, handleInputContent };
};
