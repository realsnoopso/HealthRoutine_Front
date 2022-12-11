import { Record, Log } from '@src/types/records';

import Api from './apis';

export function setRecord(id: string, record: Record) {
  Api.post(`/records:${id}`, record);
}
