export function getRecordsLength(id:string) {
  const record = window.localStorage.getItem(id)
  if (record) {
    return JSON.parse(record).logs.length
  } else {
    return 0
  }
}