import type { NextPage } from 'next';
import { css } from '@emotion/css';

const Start: NextPage = () => {
  return (
    <div className={style}>
      <h1>Start</h1>
    </div>
  );
};

export default Start;

const style = css`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
