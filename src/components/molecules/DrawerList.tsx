import { css } from '@emotion/css';
import theme from '@src/styles/theme';

interface DrawerList {
  _onClick?: () => void;
  name: string;
  rounds: number;
  totalRounds: number;
}

export default function DrawerList(props: DrawerList) {
  const { _onClick, name, rounds, totalRounds } = props;

  return (
    <div className={styleRoot} onClick={_onClick}>
      <div className="listContents">
        <h5>{name}</h5>
        <p>
          {rounds}/{totalRounds} 세트
        </p>
      </div>
      {rounds === totalRounds ? (
        <span className="material-icons">done</span>
      ) : (
        ''
      )}
    </div>
  );
}

const styleRoot = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 15px;
  border-bottom: 1px solid ${theme.colors.divider};

  :hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primaryHover};
  }

  .listContents {
    flex-grow: 1;
  }
`;
