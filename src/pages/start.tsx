import type { NextPage } from 'next';
import { css } from '@emotion/css';
import { Button } from '@src/components/atoms/Button';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const router = useRouter();
  return (
    <div className={style}>
      <h3>힙 아브덕션 이너타이</h3>
      <h1>시작</h1>
      <Button
        shape="round"
        icon="play_arrow"
        _onClick={() => {
          router.push('/doing');
        }}
      />
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

  Button {
    position: absolute;
    bottom: 56px;
  }
`;
