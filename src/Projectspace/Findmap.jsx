import React, { useState } from 'react';
import BlockDetails from './BlockDetails';
import styles from './Findmap.module.css';

const Findmap = () => {
  const [hallticket, setHallticket] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ hallticket: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedHallticket = hallticket.trim();
    if (!/^[A-Za-z0-9]{8,}$/.test(trimmedHallticket)) {
      setError('Hall ticket must be at least 8 characters long and contain only letters and numbers.');
      return;
    }
    setError('');
    setSubmittedData({ hallticket: trimmedHallticket });
    setSubmitted(true);
    setHallticket('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.formCard}>
          <h2>Find Your Exam Block</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="hallticket">Enter Your Hall Ticket Number</label>
            <input
              id="hallticket"
              type="text"
              placeholder="e.g., 24p31f0095"
              value={hallticket}
              onChange={(e) => setHallticket(e.target.value)}
              required
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={error ? 'hallticket-error' : undefined}
              className={error ? styles.inputError : ''}
            />
            {error && (
              <p id="hallticket-error" className={styles.error}>
                {error}
              </p>
            )}
            <button type="submit" aria-label="Search exam block">
               Search
            </button>
          </form>
        </div>
        {submitted && !error && (
          <div className={styles.resultsCard}>
            <BlockDetails hallticket={submittedData.hallticket} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Findmap;