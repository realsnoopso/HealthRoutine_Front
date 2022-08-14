import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';

const Start: NextPage = () => {
  return (
    <Cycle btnIcon="play_arrow" btnPath="doing">
      <h3>힙 아브덕션 이너타이</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
