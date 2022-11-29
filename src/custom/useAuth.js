import { onAuthStateChanged } from 'firebase/auth';

import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

const Auth = () => {
    const [currentUser, setcurrentUser] = useState({})
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setcurrentUser(user)
            }
            else{
                setcurrentUser(null)
            }
        })
    })
  return {
    currentUser,
  };
};

export default Auth;