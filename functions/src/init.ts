import { credential, initializeApp } from "firebase-admin";

var serviceaccountkey = require('/Users/oyeneyebolaji/Documents/developement/personnal-project/cloud-function/firecast/functions/src/serviceaccountkey.json');

export class InitialApp {
    static initialize() {
        initializeApp({
            credential: credential.cert(serviceaccountkey),
            databaseURL: 'https://teach-learning.firebaseio.com'
        });
    }
}

export default InitialApp;