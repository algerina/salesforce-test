import React, { useState } from 'react';
import axios from 'axios';

const AddCandidatureForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [yearOfExperience, setYearOfExperience] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCandidature = {
      First_Name__c: firstName,
      Last_Name__c: lastName,
      Year_Of_Experience__c: yearOfExperience,
      Type__c: type,
    };

    try {
      const endpoint = 'https://your_instance.salesforce.com/services/data/v55.0/sobjects/Candidature__c';
      const response = await axios.post(endpoint, newCandidature, { headers: { Authorization: 'Bearer your_access_token' } });
      console.log('Nouvelle candidature créée avec succès', response.data);
      // Réinitialiser les champs du formulaire après la création réussie
      setFirstName('');
      setLastName('');
      setYearOfExperience('');
      setType('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Ajouter une candidature</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">
            Prénom:
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Nom:
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="yearOfExperience">
            Années d expérience:
            <input
              type="number"
              id="yearOfExperience"
              value={yearOfExperience}
              onChange={(e) => setYearOfExperience(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="type">
            Type:
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Sélectionnez un type</option>
              <option value="Développeur">Développeur</option>
              <option value="Analyste">Analyste</option>
              <option value="Designer">Designer</option>
            </select>
          </label>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddCandidatureForm;
