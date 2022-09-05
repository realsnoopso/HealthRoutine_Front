import { useEffect, useRef, useState } from 'react';

export function useTimer() {
  const startTime = useRef(Date.now());
  const [sec, setSec] = useState(0);
}
