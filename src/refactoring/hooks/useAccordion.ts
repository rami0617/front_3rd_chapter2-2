import { useState } from 'react';

export const useAccordion = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItems = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return {
    openItems,
    toggleItems,
  };
};
