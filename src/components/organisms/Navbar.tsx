import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { runSetCount, makeTimer } from '@src/services/makeTimer';

interface Navbar {}

export default function Navbar(props: Navbar) {
  const router = useRouter();

  const [count, setCount] = useState(0);

  useEffect(() => {
    runSetCount(count, setCount);
  }, [count]);

  return (
    <StyledRoot>
      <span className="timer">{makeTimer(count, 'h:m:s')}</span>
      <button onClick={() => router.push('/')}>
        <span className="material-icons">power_settings_new</span>
      </button>
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  position: fixed;
  width: 100%;
  padding: 24px;
  background-color: ${theme.colors.background};
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;

  .timer {
    flex-grow: 1;
  }
  .material-icons {
    font-size: 28px;
    color: ${theme.colors.secondary};
  }
`;
