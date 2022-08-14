import type { NextPage } from 'next';
import { css } from '@emotion/css';

const Start: NextPage = () => {
  return (
    <div className={style}>
      <h3>힙 아브덕션 이너타이</h3>
      <h1>시작</h1>
      <div className="play">
        <span className="material-icons">play_arrow</span>
      </div>
    </div>
  );
};

export default Start;

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
