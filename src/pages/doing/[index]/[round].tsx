import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useRef, useState } from 'react';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';

const Doing: NextPage = () => {
  const router = useRouter();

  let index = Number(router.query.index)
  let round = Number(router.query.round)
  
  const name = workoutList[index]?.name;
  const id = workoutList[index]?.id;

  const [weight, setWeight] = useState('');
  const [count, setCount] = useState('');
  
  const weightInput = useRef();
  const countInput = useRef();

  const isWorkoutFinished = (()=> {
    if (index === workoutList.length-1 && round === workoutList[workoutList.length-1]['totalRounds'] ) {      
      return true
    }
    return false
  })()

  function SaveRecord () {
    const record = {weight, count}
    const getResult = window?.localStorage.getItem(id)
    const pastResult = getResult && JSON.parse(getResult)
    let newRecord;
    if (pastResult) {
      newRecord = [...pastResult, record]
    } else {
      newRecord = [record]
    }
    newRecord = JSON.stringify(newRecord)
    window?.localStorage.setItem(id, newRecord)
  }
    
  function finishRoutine() {
    SaveRecord()
    if (isWorkoutFinished) {
      return router.push(`/done`);
    }
    router.push(`/rest/${index}/${round}`);
  }

  return (
    <Cycle btnIcon="done" _onClick={finishRoutine}>
      <h3>{name}</h3>
      <h1>{round}세트</h1>
      <NumberInput
        ref={weightInput}
        label="무게 (kg)"
        type="weight"
        placeholder={0}
        value={weight}
        setValue={setWeight}
        style={css`
          margin-top: 24px;
          margin-bottom: 24px;
        `}
      />
      <NumberInput
        ref={countInput}
        label="횟수"
        type="count"
        placeholder={0}
        value={count}
        setValue={setCount}
      />
    </Cycle>
  );
};

export default Doing;
