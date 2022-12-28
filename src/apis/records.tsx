import { Record } from '@src/types/records';

import { fetchData } from './index';

export function getRecords(id: string) {
  return fetchData(`/records?id=${id}`, { method: 'get' });
}

export async function setRecords(id: string, record: Record) {
  return fetchData(`/records?id=${id}`, { method: 'post', data: record });
}
