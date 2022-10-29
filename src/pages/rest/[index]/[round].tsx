import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import Cycle from '@src/components/templates/Cycle';
import { resourceLimits } from 'worker_threads';

const Rest: NextPage = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  
  let index = Number(router.query.index)
  let round = Number(router.query.round)
  const totalRounds = Number(workoutList[index]?.['totalRounds']);
  const actionButton: any = useRef();

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  useEffect(() => {
    actionButton.current.disabled = true;
  }, []);

  if (count > 1) {
    actionButton.current.disabled = false;
  }

  function startNewRound() {
    if (index >= workoutList.length) {
      return router.push('/');
    }
    if (round >= workoutList[index].totalRounds) {
      index = index + 1
      round = 1
    } else {
      round = round + 1
    }
    window.localStorage.setItem('currIndex', `${index}`)
    window.localStorage.setItem('currRound', `${round}`)
    router.push('/start');
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNewRound} ref={actionButton}>
      <h3>쉬는 시간</h3>
      <h1>{makeTimer(count, 'm:s')}</h1>
    </Cycle>
  );
};

export default Rest;
