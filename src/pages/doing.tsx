import type { NextPage } from 'next';
import { Cycle } from '@src/components/templates/Cycle';
import { NumberInput } from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';

const Doing: NextPage = () => {
  return (
    <Cycle btnIcon="play_arrow" btnPath="rest">
      <h3>힙 아브덕션 이너타이</h3>
      <h1>1세트</h1>
      <NumberInput
        label="무게 (kg)"
        style={css`
          margin-top: 24px;
          margin-bottom: 24px;
        `}
      />
      <NumberInput label="횟수" />
    </Cycle>
  );
};

export default Doing;
