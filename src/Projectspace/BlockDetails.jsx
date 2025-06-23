import React from 'react';
import styles from './BlockDetails.module.css';
import img1 from './Cotton_Bhavan1.jpg';
import img2 from './KLB1.jpeg';
import img3 from './Abdul Kalam Bhavan.png';
import img4 from './Bill Gates Bhavan1.jpg';
import candidate1 from './yoga.jpg';
import candidate2 from './yoga.jpg';
import candidate3 from './praveen.jpeg';
import candidate4 from './thubphotodj.jpg';

const studentData = [
  {
    hallticket: '24P31F0095',
    exam: 'ICET',
    block: 'COTTON BHAVAN',
    room: '101',
    imageUrl: img1,
    photoUrl: candidate1,
    name: 'Aarav Sharma',
  },
  {
    hallticket: '24P31F00E4',
    exam: 'NEET',
    block: 'KL RAO BHAVAN',
    room: '202',
    imageUrl: img2,
    photoUrl: candidate2,
    name: 'Priya Patel',
  },
  {
    hallticket: '24P31F0067',
    exam: 'ECET',
    block: 'ABDUL KALAM BHAVAN',
    room: '303',
    imageUrl: img3,
    photoUrl: candidate3,
    name: 'P.PRAVEEN',
  },
  {
    hallticket: '24M11MC036',
    exam: 'EAPCET',
    block: 'BILL GATES BHAVAN',
    room: '404',
    imageUrl: img4,
    photoUrl: candidate4,
    name: 'D.J.Surya',
  },
];

const BlockDetails = ({ hallticket }) => {
  const result = studentData.find(
    (student) => student.hallticket === hallticket
  );

  return (
    <div className={styles.detailsContainer}>
      {result ? (
        <div className={styles.detailsWrapper}>
          <div className={styles.textDetails}>
            <h3>Exam Details</h3>
            <p><strong>HallTicket Number:</strong> {result.hallticket}</p>
            <p><strong>Exam:</strong> {result.exam}</p>
            <p><strong>Block:</strong> {result.block}</p>
            <p><strong>Room Number:</strong> {result.room}</p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.candidateInfo}>
              <img
                src={result.photoUrl}
                alt={`Photo of ${result.name} with hall ticket ${result.hallticket}`}
                className={styles.candidatePhoto}
              />
              <p className={styles.candidateName}>{result.name}</p>
            </div>
            <img
              src={result.imageUrl}
              alt={`Reference image for ${result.block}`}
              className={styles.referenceImage}
            />
          </div>
        </div>
      ) : (
        <p className={styles.error}>No matching data found for <strong>{hallticket}</strong>.</p>
      )}
    </div>
  );
};

export default BlockDetails;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './blockkk.css';

// function App() {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:3000/students') // replace if deployed
//       .then(res => setStudents(res.data))
//       .catch(err => console.error("Error fetching:", err));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Student List</h1>
//       <div className="grid">
//         {students.map((s, idx) => (
//           <div className="card" key={idx}>
//             <img src={s.photoUrl} alt={s.name} />
//             <h3>{s.name}</h3>
//             <p><strong>Exam:</strong> {s.exam}</p>
//             <p><strong>Block:</strong> {s.block}</p>
//             <p><strong>Room:</strong> {s.room}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
