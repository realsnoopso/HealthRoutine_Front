import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { getCurrentRoutineInfo } from '@src/services/getCurrentInfo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Start: NextPage = () => {
  const router = useRouter();

  let metaData = {
    id: '',
    round: 1,
    index: 0,
  };

  useEffect(() => {
    (async () => {
      try {
        const { index, round } = await getCurrentRoutineInfo();
        metaData.index = index;
        metaData.round = round;
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  function stratNextRound() {
    router.push(`/doing/${metaData.index}/${metaData.round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h3>{workoutList[metaData.index].name}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
