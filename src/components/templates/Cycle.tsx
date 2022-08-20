import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import { ActionButton } from '@src/components/molecules/ActionButton';

interface Cycle {
  children: React.ReactNode;
  btnPath?: string;
  _onClick?: () => void;
  btnIcon?: string;
  style?: any;
}

export function Cycle(props: Cycle) {
  const router = useRouter();
  const { children, _onClick, btnIcon, btnPath, style } = props;

  return (
    <div className={`${styleRoot} ${style}`}>
      {children}
      <ActionButton
        style={buttonStyle}
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

const styleRoot = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 48px;
`;

const buttonStyle = css`
  position: fixed;
  bottom: 32px;
`;
