import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useState, useEffect } from 'react';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';

const Doing: NextPage = () => {
  const router = useRouter();
  const { index, round } = router.query;

  const name = workoutList[Number(index)]?.name;

  const weightInput = useRef();
  const countInput = useRef();

  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');

  const isWorkoutFinished = (()=> {
    const _round = Number(round);
    const _index = Number(index);

    if (_index === workoutList.length-1 && _round === workoutList[workoutList.length-1]['totalRounds'] ) {      
      return true
    }
    return false
  })()

  function finishRoutine() {
    console.log(isWorkoutFinished)
    if (isWorkoutFinished) {
      debugger;
      return router.push(`/done`);
    }
    router.push(`/rest/${index}/${round}`);
  }

  return (
    <Cycle btnIcon="done" _onClick={finishRoutine}>
      <h3>{name}</h3>
      <h1>{round}세트</h1>
      <NumberInput
        ref={weightInput}
        label="무게 (kg)"
        type="weight"
        placeholder={0}
        value={weight}
        setValue={setWeight}
        style={css`
          margin-top: 24px;
          margin-bottom: 24px;
        `}
      />
      <NumberInput
        ref={countInput}
        label="횟수"
        type="count"
        placeholder={0}
        value={count}
        setValue={setCount}
      />
    </Cycle>
  );
};

export default Doing;
