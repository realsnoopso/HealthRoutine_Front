import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export function useGetAndSetOrder() {
  const [order, setOrder] = useState(0);
  const router = useRouter();

  return {
    order: order,
    setOrder: () => {
      setOrder(order + 1);
      console.log(order);
    },
  };
}
