import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Ruler, HardHat } from 'lucide-react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <div className={styles['bg-shapes']}>
        <Building2 className={`${styles.shape} ${styles['shape-1']}`} size={120} style={{ '--rotation': '-15deg' }} />
        <Ruler className={`${styles.shape} ${styles['shape-2']}`} size={100} style={{ '--rotation': '15deg' }} />
        <HardHat className={`${styles.shape} ${styles['shape-3']}`} size={80} style={{ '--rotation': '30deg' }} />
        <Building2 className={`${styles.shape} ${styles['shape-4']}`} size={90} style={{ '--rotation': '-30deg' }} />
      </div>

      <div className={styles.content}>
        <div className={styles['error-code']}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          Oops! The page you're looking for seems to have been misplaced in our architectural plans.
          Let's get you back to the main blueprint.
        </p>
        <Link to="/" className={styles['home-button']}>
          <Home size={20} />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
