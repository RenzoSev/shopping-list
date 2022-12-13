import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function useWillMountRedirect({
  url,
  condition,
}: {
  url: string;
  condition: boolean;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) navigate(url);
  }, [navigate]);
}
