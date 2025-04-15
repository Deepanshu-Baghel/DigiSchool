// dataService.js
import { db } from '../config/firebaseConfig';
import { ref, set, onValue } from 'firebase/database';

export const writeUserData = (userId, name, email, password, role) => {
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    password: password,
    role: role,
  });
};



export const readUserData = (userId) => {
  const userRef = ref(db, 'users/' + userId);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log("User data:", data);
  });
};
