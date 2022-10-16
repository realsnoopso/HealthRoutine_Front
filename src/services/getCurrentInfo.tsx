import { workoutList } from '@src/constants/mockData';

interface Result {
  id: string;
  round: number;
  index: number;
}

export function getCurrentRoutineInfo() {
  let index = Number(window.localStorage.getItem('currIndex')) ?? 0;
  let id = window.localStorage.getItem('currId') ?? '1';
  let round = Number(window.localStorage.getItem('currRound')) ?? 1;

  return {id, round, index}
}
