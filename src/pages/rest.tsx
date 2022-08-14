import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';

const Rest: NextPage = () => {
  return (
    <Cycle btnIcon="done" btnPath="doing">
      <h3>쉬는 시간</h3>
      <h1>00:00</h1>
    </Cycle>
  );
};

export default Rest;
