import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Start: NextPage = () => {
  const router = useRouter();
  let index:number;
  let round:number;
  
  useEffect(()=> {
    index = Number(window.localStorage.getItem('currIndex')) ?? 0;
    round = Number(window.localStorage.getItem('currRound')) ?? 1;
  },[])
  
  function stratNextRound() {
    router.push(`/doing/${index}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h3>{workoutList[index].name}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
