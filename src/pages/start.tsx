import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getRoutines } from '@src/apis/routines';
import { fetchData, useFetch } from '@src/apis';

const Start: NextPage = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [round, setRound] = useState(0);

  const data = useFetch(getRoutines);

  function getIndexAndRound() {
    const currentRoutine = window.localStorage.getItem('current');
    const { id, name } = currentRoutine
      ? JSON.parse(currentRoutine)
      : data
      ? data[0]
      : { id: '', name: '' };
    const currentRound = window.localStorage.getItem('current-rounds')
      ? Number(window.localStorage.getItem('current-round'))
      : 1;
    return { _id: id, _name: name, _round: currentRound };
  }

  useEffect(() => {
    const { _id, _name, _round } = getIndexAndRound();
    setId(_id);
    setName(_name);
    setRound(_round);
  }, [data]);

  function startNextRound() {
    router.push(`/doing/${id}/${round}`);
  }

  return (
    <Cycle btnIcon="play_arrow" _onClick={startNextRound}>
      <h3>{name}</h3>
      <h1>{round}세트 시작</h1>
    </Cycle>
  );
};

export default Start;
