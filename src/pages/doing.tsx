import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';
import { NumberInput } from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useState } from 'react';

const Doing: NextPage = () => {
  const [weight, setWeight] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <Cycle btnIcon="done" btnPath="rest">
      <h3>힙 아브덕션 이너타이</h3>
      <h1>1세트</h1>
      <NumberInput
        label="무게 (kg)"
        type="weight"
        value={weight}
        setValue={setWeight}
        style={css`
          margin-top: 24px;
          margin-bottom: 24px;
        `}
      />
      <NumberInput
        label="횟수"
        type="count"
        value={count}
        setValue={setCount}
      />
    </Cycle>
  );
};

export default Doing;
