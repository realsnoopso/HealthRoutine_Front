import { Routines } from '@src/types/routines';

import Api from './apis';

export function getRoutines(id: string) {
  return Api.get<Routines[]>(`/routines`);
}

export function setRoutines(id: string, record: Routines) {
  Api.post(`/records?id=${id}`, record);
}
