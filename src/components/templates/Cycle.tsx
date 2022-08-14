import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import { ActionButton } from '@src/components/molecules/ActionButton';

interface Cycle {
  children: React.ReactNode;
  btnPath?: string;
  _onClick?: () => void;
  btnIcon?: string;
}

export function Cycle(props: Cycle) {
  const router = useRouter();
  const { children, _onClick, btnIcon, btnPath } = props;

  return (
    <div className={style}>
      {children}
      <ActionButton
        icon={btnIcon}
        _onClick={
          btnPath
            ? () => {
                router.push(`/${btnPath}`);
              }
            : _onClick
        }
      />
    </div>
  );
}

const style = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    position: absolute;
    bottom: 56px;
  }
`;
