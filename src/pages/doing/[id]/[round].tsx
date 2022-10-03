import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useState, useEffect } from 'react';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';

const Doing: NextPage = () => {
  const router = useRouter();
  const { id, round } = router.query;
  const currentRoutine = workoutList.find((v) => v.id === id);

  const weightInput = useRef();
  const countInput = useRef();

  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');

  function finishRoutine() {
    const prevResult = window.localStorage.getItem('result');
    const _prevResult = prevResult ? JSON.parse(prevResult) : null;
    const score = prevResult
      ? [
          ..._prevResult,
          {
            id: id,
            round: round,
            weight: weight,
            count: count,
          },
        ]
      : [
          {
            id: id,
            round: round,
            weight: weight,
            count: count,
          },
        ];
    window.localStorage.setItem('result', JSON.stringify(score));
    router.push(`/rest`);
  }

  return (
    <Cycle btnIcon="done" _onClick={finishRoutine}>
      <h3>{currentRoutine?.name}</h3>
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
