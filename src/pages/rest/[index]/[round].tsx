import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import Cycle from '@src/components/templates/Cycle';

const Rest: NextPage = () => {
  const [count, setCount] = useState(0);

  const router = useRouter();
  const { index, round } = router.query;

  const metaData = (() => {
    const totalRounds = Number(workoutList[Number(index)]?.['totalRounds']);
    const _round = Number(round);
    const _index = Number(index);
    if (_round >= totalRounds) {
      return {
        index: _index + 1,
        round: 0,
      };
    } else {
      return {
        index: _index,
        round: _round,
      };
    }
  })();

  const actionButton: any = useRef();

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  useEffect(() => {
    actionButton.current.disabled = true;
  }, []);

  useEffect(() => { 
    window.localStorage.setItem('currIndex', `${metaData.index}`);
    window.localStorage.setItem('currRound', `${metaData.round}`);
  },[]);

  if (count > 1) {
    actionButton.current.disabled = false;
  }

  function startNewRound() {
    if (metaData.index >= workoutList.length) {
      router.push('/');
      // todo: 운동 종료 화면으로 보내기
    }
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
