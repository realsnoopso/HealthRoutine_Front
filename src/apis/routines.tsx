import { Routines } from '@src/types/routines';

import { fetchData } from './index';

export async function getRoutines() {
  const result = await fetchData(`/routines`, { method: 'get' });
  if (result?.data) {
    return result.data;
  } else {
    console.log('error');
    return null;
  }
}

export function setRoutines(id: string, record: Routines) {
  // Api.post(`/records?id=${id}`, record);
}
