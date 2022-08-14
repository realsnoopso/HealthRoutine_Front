import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/css';
import { Button } from '@src/components/atoms/Button';
import { useRouter } from 'next/router';
import { Ready } from '@src/components/templates/Ready';
import { useState } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  return (
    <div className={styleRoot}>
      <Head>
        <title>Routines</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isReady ? (
        <main>
          <p
            className={css`
              font-weight: 800;
              font-size: 64px;
              letter-spacing: -0.04em;
            `}
          >
            Routines
          </p>
          <Button _onClick={() => router.push('/start')}>구글로 로그인</Button>
        </main>
      ) : (
        <Ready />
      )}
    </div>
  );
};

export default Home;

const styleRoot = css`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
