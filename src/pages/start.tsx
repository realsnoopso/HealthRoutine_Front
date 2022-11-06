import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Start: NextPage = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [round, setRound] = useState(1);  

  const getIndexAndRound = ()=> {
    let _id = window?.localStorage.getItem('currId') ?? workoutList[0].id
    let _round = Number(window?.localStorage.getItem('currRound'));
    return {_id, _round}
  }
  
  useEffect(()=> {
    const {_id, _round} = getIndexAndRound()
    _id && setId(_id);
    _round && setRound(_round);
  },[])
  
  function startNextRound() {
    router.push(`/doing/${id}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNextRound}>
      <h3>{workoutList.find(v => v.id === id)?.name}</h3>
      <h1>{round}세트 시작</h1>
    </Cycle>
  );
};

export default Start;
