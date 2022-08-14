import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';

const Doing: NextPage = () => {
  return (
    <Cycle btnIcon="play_arrow" btnPath="rest">
      <h3>쉬는 시간</h3>
      <h1>00:00</h1>
    </Cycle>
  );
};

export default Doing;
