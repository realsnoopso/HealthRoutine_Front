import { useState, useEffect } from 'react';

export function useGetAndSetOrder() {
  const [currOrder, setCurrOrder] = useState(0);

  return currOrder;
}
