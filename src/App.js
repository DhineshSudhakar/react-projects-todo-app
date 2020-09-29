import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import ToDo from './ToDo';
import db from './firebase';
import firebase from 'firebase'

function App() {

  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([])

  // When the app loads, we need to listen to the database and fetch new todo added/removed

  useEffect( ()=> {
      // this code fire when the app loads
      db.collection("toDos").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setToDos(snapshot.docs.map( doc => ({id: doc.id, toDo: doc.data().toDo}) ))
      })
  }, [])


  const addToDo = (event) => {
    // this code will work when click the submit button
    event.preventDefault()

    db.collection("toDos").add({
      toDo: newToDo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setNewToDo("");
  }

  return (
    <div className="app">
      <h1 className="title">To Do App</h1>
      <form>
      <FormControl>
      <InputLabel>Add your new to do</InputLabel>
      <Input type="text" value={newToDo} onChange={event => setNewToDo(event.target.value)} className="text"/>
      </FormControl>
      <Button disabled={!newToDo} type="submit" variant="contained" onClick={addToDo}>Submit</Button>
      </form>

      <ul>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} ToDo={toDo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
