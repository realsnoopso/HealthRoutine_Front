import type { NextPage } from 'next';
import Cycle from '@src/components/templates/Cycle';
import NumberInput from '@src/components/molecules/NumberInput';
import { css } from '@emotion/css';
import { useEffect, useRef, useState } from 'react';
import { workoutList } from '@src/constants/mockData';
import { useRouter } from 'next/router';
import { unfinishedWorkoutRecords } from '@src/services/unfinishedWorkoutRecords';
import { Record, Log } from '@src/types/records';
import { setRecord } from '@src/apis/records';

const Doing: NextPage = () => {
  const router = useRouter();

  let id = `${router.query.id}`;
  let round = Number(router.query.round);
  let name = workoutList.find((v) => v.id === id)?.name;

  const [weight, setWeight] = useState(0);
  const [count, setCount] = useState(0);

  const weightInput = useRef();
  const countInput = useRef();

  function finishRoutine() {
    SaveRecord();
    if (unfinishedWorkoutRecords().length === 0) {
      return router.push(`/done`);
    }
    router.push(`/rest/${id}/${round}`);
  }

  function SaveRecord() {
    const log: Log = { weight, count };
    let record: Record;

    if (pastLogs) {
      record = { round, logs: [...pastLogs, log] };
    } else {
      record = { round, logs: [log] };
    }

    setRecord(id, record);
    // window?.localStorage.setItem(id, JSON.stringify(record));
  }

  const getRecord = id && window?.localStorage.getItem(id);
  const pastLogs = getRecord && JSON.parse(getRecord).logs;

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
