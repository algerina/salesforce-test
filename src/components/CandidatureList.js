import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Candidature from './Candidature';

const CandidatureList = () => {
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchCandidatures();
  }, []);

  const fetchCandidatures = async () => {
    try {
      const endpoint = 'https://your_instance.salesforce.com/services/data/v55.0/query/?q=SELECT+First_Name__c,Last_Name__c,Year__c,Year_Of_Experience__c+FROM+Candidature__c';
      const response = await axios.get(endpoint, {
        headers: { Authorization: 'Bearer your_access_token' },
      });
      setCandidatures(response.data.records);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Liste des candidatures</h2>
      <ul>
        {candidatures.map((candidature) => (
          <Candidature key={candidature.id} candidature={candidature} />
        ))}
      </ul>
    </div>
  );
};

export default CandidatureList;
