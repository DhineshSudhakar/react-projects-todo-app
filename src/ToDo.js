import React, { useState } from 'react'
import { ListItem, List } from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './ToDo.css'

function ToDo(props) {
  const [task, setTask] = useState(props.ToDo.toDo);

  const updateTask = (event) => {
    // updating the task directly from the database
    if(event.key === "Enter"){

      db.collection("toDos").doc(props.ToDo.id).set({
        toDo: task
      }, { merge: true});
    }
    
  }
    return (
        <div>
        <List className="list">
        <ListItem>
          <p><input type="text" 
          value={task} 
          onChange={event => setTask(event.target.value)}
          onKeyPress={updateTask}
          /></p>
        </ListItem>
        <DeleteForeverIcon onClick={event => db.collection('toDos').doc(props.ToDo.id).delete()}></DeleteForeverIcon>
        </List>

       
        </div>
    )
}

export default ToDo
