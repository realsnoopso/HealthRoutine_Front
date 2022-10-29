import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Start: NextPage = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(1);  

  const getIndexAndRound = ()=> {
    let _index = Number(window.localStorage.getItem('currIndex')) ?? 0;
    let _round = Number(window.localStorage.getItem('currRound')) ?? 1;
    return {_index, _round}
  }
  
  useEffect(()=> {
    const {_index, _round} = getIndexAndRound()
    _index && setIndex(Number(window.localStorage.getItem('currIndex')));
    _round && setRound(Number(window.localStorage.getItem('currRound')));

    console.log(round);
  },[])
  
  function startNextRound() {
    router.push(`/doing/${index}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNextRound}>
      <h3>{workoutList[index]?.name}</h3>
      <h1>{round}세트 시작</h1>
    </Cycle>
  );
};

export default Start;
