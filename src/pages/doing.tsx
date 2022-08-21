import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useState, useEffect } from 'react';

const Doing: NextPage = () => {
  const weightInput = useRef();
  const countInput = useRef();

  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');

  return (
    <Cycle btnIcon="done" btnPath="rest">
      <h3>힙 아브덕션 이너타이</h3>
      <h1>1세트</h1>
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
