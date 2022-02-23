const config = {
  apiKey: "",//Fill up and change name for firebase-config.js!
  authDomain: "friendlychat-12121.firebaseapp.com",
  projectId: "friendlychat-12121",
  storageBucket: "friendlychat-12121.appspot.com",
  messagingSenderId: "235398661911",
  appId: "1:235398661911:web:0abb705b045b8bed939952"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}