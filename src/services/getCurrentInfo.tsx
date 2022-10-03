import { workoutList } from '@src/constants/mockData';

export function getCurrentRoutineInfo() {
  let id = window.localStorage.getItem('currId') ?? '';
  let round = Number(window.localStorage.getItem('currRound')) ?? 1;
  let index = Number(window.localStorage.getItem('currIndex')) ?? 0;

  if (!id && !round) {
    id = '1';
    round = 0;
    index = 0;
  }

  if (round === Number(workoutList[index]['totalRounds'])) {
    id = workoutList[index + 1]['id'];
    round = 0;
    index = index + 2;
  }

  round = round + 1;

  return { id, round, index };
}
