import { Component , useEffect } from "react"
import { useLocalStorage } from "./hooks/UseLocalStorage";
import { useUser } from './context/UserContext';

const person = {
  id: crypto.randomUUID(),
  name: 'Harry Potter',
  email: 'harry@hogwarts.org'
}

export default function UserX({user}) {
  
  const [userH, setUserH] = useLocalStorage('2.HogwartsExpress', null);

  // ACCESS THE CONTEXT OBJECT FROM ANYWHERE LIKE THIS
  const [ userC, setUserC ] = useUser();  

  useEffect( () => {
    setUserC(person); // update the context object 3333
    setUserH(person); // update the custom hook and localstorage 2222
  }, []);
  
  return (
    <div>
      <p>
        {user.name} {user.email} {user.id}
      </p>
      <p>
        {userH && userH.name} 
        {userH && userH.email} 
        {userH && userH.id}
      </p>
      <p>
        {userC && userC.name} 
        {userC && userC.email} 
        {userC && userC.id}
      </p>
    </div>
  )
}

// 
// We need the user info in this ComponentHow?
// 1. Props
// 2. use a custom hook in both places
// 3. Context API