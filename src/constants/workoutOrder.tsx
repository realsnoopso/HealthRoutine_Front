import { useState, useEffect } from 'react';

export function useGetAndSetOrder() {
  const [order, setOrder] = useState(0);
  return { order: order, setOrder: () => setOrder(order + 1) };
}
