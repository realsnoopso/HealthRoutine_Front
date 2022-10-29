export interface Log {
  weight: number,
  count: number
}

export interface Record {
  round: number,
  logs: Array<Log>
}