import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { useState, useEffect, useRef } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';

const Rest: NextPage = () => {
  const [count, setCount] = useState(0);
  const actionButton: any = useRef();

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  useEffect(() => {
    actionButton.current.disabled = true;
  }, []);

  if (count === 10) {
    actionButton.current.disabled = false;
  }

  return (
    <Cycle btnIcon="play_arrow" btnPath="doing" ref={actionButton}>
      <h3>쉬는 시간</h3>
      <h1>{makeTimer(count, 'm:s')}</h1>
    </Cycle>
  );
};

export default Rest;
