import axios from 'axios';

let ACCESS_TOKEN = null;
let INST_URI = null;
const PARAMS = {
  grant_type: 'password',
  client_id:
    '3MVG9I9urWjeUW051PumYX1mbS5HkS3kpZsbCEzYWjgivRyDno1MjvM08EfVf2be52s0vrthHamsgMpQCrm5Z',
  client_secret:
    'EC97DAFBF9F6F2399DE5E7BADA2E9BBEF6B3B6E832DC435668AA452940AD9501',
  username: 'soljit_algeria2@soljit.com',
  password: 'entretient_1235zoLmTaUDLiouUaOAN6WhOQPi',
};
const URL = 'https://login.salesforce.com/services/oauth2/token';
const HEADERS = {
  'Content-Type': 'application/json',
};

const api = axios.create({
  baseURL: 'https://na123.salesforce.com/services/data/v55.0', // Replace na123 with your instance name
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

async function getAccess(params) {
  try {
    const response = await axios.post(URL, params);
    INST_URI = response.data.instance_url || '';
    ACCESS_TOKEN = response.data.access_token || '';
    console.log('*********connecting to API*********');
    console.log(`access token: ${ACCESS_TOKEN}`);
    console.log(`instance URL: ${INST_URI}`);
    api.defaults.headers.common.Authorization = `Bearer ${ACCESS_TOKEN}`;
  } catch (error) {
    console.error('Error getting access:', error);
  }
}

export function fetchCandidatures() {
  // Export the function
  return api.get('/sobjects/Candidature__c');
}

export function createCandidature(candidatureData) {
  // Export the function
  return api.post('/sobjects/Candidature__c', candidatureData);
}

getAccess(PARAMS).then(() => {
  fetchCandidatures()
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error fetching candidatures:', error);
    });

  // Example usage of createCandidature function
  const newCandidatureData = {
    First_Name__c: 'John',
    Last_Name__c: 'Doe',
    Year_Of_Experience__c: 3,
    Type__c: 'Développeur', // Add the Type__c field
  };

  createCandidature(newCandidatureData)
    .then((response) => {
      console.log('Candidature created successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error creating candidature:', error);
    });
});
