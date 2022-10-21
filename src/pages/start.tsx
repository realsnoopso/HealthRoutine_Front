import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { getCurrentRoutineInfo } from '@src/services/getCurrentInfo';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const router = useRouter();
  const { index, round } = getCurrentRoutineInfo()

  function stratNextRound() {
    router.push(`/doing/${index}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h3>{workoutList[index].name}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
