import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Start: NextPage = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0)
  const [round, setRound] = useState(1)
  
  
  useEffect(()=> {
    const currindex = Number(window.localStorage.getItem('currIndex'))
    currindex && setIndex(currindex)
    const records = window.localStorage.getItem(workoutList[index].id)
    records && setRound(JSON.parse(records).length)
  },[])
  
  function stratNextRound() {
    router.push(`/doing/${index}/${round+1}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={stratNextRound}>
      <h3>{workoutList[index].name}</h3>
      <h1>시작</h1>
    </Cycle>
  );
};

export default Start;
