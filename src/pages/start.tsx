import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { getCurrentRoutineInfo } from '@src/services/getCurrentInfo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Start: NextPage = () => {
  const router = useRouter();

  interface MetaData {
    id: string;
    round: number;
    index: number;
  }

  let metaData: MetaData = {
    id: '',
    round: 1,
    index: 0,
  };

  useEffect(() => {
    const { id, round, index } = getCurrentRoutineInfo();

    metaData.id = id;
    metaData.round = round;
    metaData.index = index;
  }, []);

  function stratNextRound() {
    window.localStorage.setItem('currId', `${metaData.id}`);
    window.localStorage.setItem('currRound', `${metaData.round}`);
    window.localStorage.setItem('currIndex', `${metaData.index}`);

    router.push(`/doing/${metaData.id}/${metaData.round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h3>{metaData.index}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
