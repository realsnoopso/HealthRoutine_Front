import styled from '@emotion/styled';

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Button) {
  const { children } = props;
  return <StyledRoot>{children}</StyledRoot>;
}

const StyledRoot = styled.button``;
