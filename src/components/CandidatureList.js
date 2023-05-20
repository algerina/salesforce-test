import React { useEffect, useState } from 'react';
import axios from 'axios';

const CandidatureList = () => {
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    fetchCandidatures();
  }, []);

  const fetchCandidatures = async () => {
    const { data } = await axios.get('/api/candidatures');
    setCandidatures(data);
    };
    return (
      <div>
        <h1>Candidatures</h1>
        <ul>
          {candidatures.map((candidature) => (
            <li key={candidature._id}>
              <h2>{candidature.First_Name_ _c}</h2>
              <p>{candidature.Last_Name_ _ c}</p>
              <p>{candidature.Year_Of_Experience}</p>
              </li>
          ))}
               </ul>
               </div>
               );
               }

               export default CandidatureList;