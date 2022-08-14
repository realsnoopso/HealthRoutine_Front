import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';

const Rest: NextPage = () => {
  return (
    <Cycle btnIcon="done" btnPath="doing">
      <h3>힙 아브덕션 이너타이</h3>
      <h1>1세트</h1>
    </Cycle>
  );
};

export default Rest;
