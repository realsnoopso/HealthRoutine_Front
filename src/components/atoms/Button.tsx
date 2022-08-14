import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  _onClick: () => void;
  shape?: 'round' | 'square';
  icon?: string;
}

export function Button(props: Button) {
  const { children, _onClick, shape, icon } = props;

  return (
    <StyledRoot
      className={`${shape === 'round' ? 'round' : 'squre'}`}
      onClick={_onClick}
    >
      <span className="material-icons">{icon}</span>
      {children}
    </StyledRoot>
  );
}

const StyledRoot = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  &.round {
    padding: 16px;
    min-width: inherit;
    border-radius: 50%;
  }

  &.squre {
    padding: 24px;
    border-radius: 20px;
    min-width: 160px;
  }

  .material-icons {
    font-size: 56px;
  }
`;
