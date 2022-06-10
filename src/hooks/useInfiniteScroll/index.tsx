import { useCallback, useEffect, useRef } from 'react';

function useInfiniteScroll(cb: () => void) {
  const isWaiting = useRef(false);

  const onApproximatePageBottom = useCallback(() => {
    const windowHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (window.innerHeight + window.scrollY >= windowHeight) {
      cb();
      isWaiting.current = true;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        isWaiting.current = false;
      }, 600);
    }
  }, [cb]);

  useEffect(() => {
    window.addEventListener('wheel', onApproximatePageBottom, {
      passive: true
    });
    window.addEventListener('scroll', onApproximatePageBottom, {
      passive: true
    });

    return () => {
      window.removeEventListener('wheel', onApproximatePageBottom);
      window.removeEventListener('scroll', onApproximatePageBottom);
    };
  }, [onApproximatePageBottom]);
}

export default useInfiniteScroll;
