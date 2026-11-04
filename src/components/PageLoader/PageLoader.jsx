
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageLoader.scss';

export default function PageLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader__content">
        <div className="page-loader__dots">
          <span />
          <span />
          <span />
        </div>

        <p>Loading your experience...</p>
      </div>
    </div>
  );
}
