import { Record } from '@src/types/records';

import Api from './apis';

export function getRecords(id: string) {
  return Api.get<Record[]>(`/records?id=${id}`);
}

export async function setRecords(id: string, record: Record) {
  try {
    await Api.post(`/records?id=${id}`, record);
  } catch (err) {
    console.log(err);
  }
}
