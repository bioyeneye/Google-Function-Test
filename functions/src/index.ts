import { https } from 'firebase-functions';
import { firestore } from 'firebase-admin'
import { InitialApp } from './init'
  

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

InitialApp.initialize();

export const getContacts = https.onRequest((request, response) => {
    const promise = firestore().doc('users/nomH3L7x3WrURGNCfkK2').get();
    const promiseCatch = promise.then(snapshot => {
        const data = snapshot.data();
        console.log(data);
        response.send(data);
    })
    
    promiseCatch.catch(error => {
        console.log(error);
        response.status(500).send(error)
    });

});
