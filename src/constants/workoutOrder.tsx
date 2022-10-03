import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurrentRoutineInfo } from '@src/services/getCurrentInfo';
import { workoutList } from '@src/constants/mockData';

export function useGetAndSetOrder() {
  const [order, setOrder] = useState(0);
  const router = useRouter();

  return {
    order: order,
    setOrder: () => {
      setOrder(order + 1);
      console.log(order);
    },
    resetOrder: () => {
      setOrder(0);
    },
  };
}

export function useGetAndSetRound() {
  const [round, setRound] = useState(1);

  return {
    round: round,
    setRound: () => {
      setRound(round + 1);
    },
    resetRound: () => {
      setRound(0);
    },
  };
}
