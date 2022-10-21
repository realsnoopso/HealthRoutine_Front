import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { resetData } from '@src/services/resetData';
import { useRouter } from 'next/router';

const Start: NextPage = () => {
  const router = useRouter();

  function finishRoutines() {
    resetData()
    router.push(`/`); 
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={finishRoutines}>
      <h3>ㅊㅋㅊㅋ 끗</h3>
    </Cycle>
  );
};

export default Start;
