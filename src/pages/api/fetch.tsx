export function fetch() {
  (async () => {
    try {
      const { id, round, index } = await getCurrentRoutineInfo();
      return {
        id,
        round,
        index,
      };
    } catch (err) {
      console.error(err);
    }
  })();
}
