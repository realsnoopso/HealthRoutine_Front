import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { useGetAndSetOrder } from '@src/constants/workoutOrder';
import { workoutList } from '@src/constants/mockData';

const Start: NextPage = () => {
  const { order } = useGetAndSetOrder();

  return (
    <Cycle btnIcon="play_arrow" btnPath={`doing/1/1`}>
      <h3>{workoutList[order].name}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
