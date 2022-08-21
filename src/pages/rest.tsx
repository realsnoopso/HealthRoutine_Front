import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';
import { useState, useEffect } from 'react';
import { runSetCount, makeMinutesTimer } from '@src/services/makeTimer';

const Rest: NextPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  return (
    <Cycle btnIcon="done" btnPath="doing">
      <h3>쉬는 시간</h3>
      <h1>{makeMinutesTimer(count)}</h1>
    </Cycle>
  );
};

export default Rest;
