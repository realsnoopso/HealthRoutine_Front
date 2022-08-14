import styled from '@emotion/styled';
import theme from '@src/styles/theme';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  _onClick: () => void;
}

export function Button(props: Button) {
  const { children, _onClick } = props;
  return <StyledRoot onClick={_onClick}>{children}</StyledRoot>;
}

const StyledRoot = styled.button`
  padding: 24px;
  min-width: 160px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  border-radius: 20px;
`;
