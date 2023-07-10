import { useState, useEffect } from "react"
import Header from "../components/Header"
import Notes from "../components/Notes"
import AddTask from "../components/AddTask"
import EditTask from "../components/EditTask"

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes();
      setNotes(notesFromServer);
    }
    
    getNotes();
  }, [])

  // get all notes
  const fetchNotes = async () => {
    const res = await fetch(`http://localhost:5000/notes`);
    const data = await res.json();
    return data;
  }

  // get single note
  // const fetchNote = async (id) => {
  //   const res = await fetch(`http://localhost:5000/notes/${id}`);
  //   const data = await res.json();
  //   return data;
  // }

  // add new notes
  const addNotes = async (newNote) => {
    const res = await fetch(`http://localhost:5000/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote)
    });

    const data = await res.json();

    setNotes([...notes, data]);
  }

  // delete notes
  const deleteNotes = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'DELETE'
    });

    setNotes(notes.filter((note) => note.id !== id));
  }

  const getIdNote = (value) => {
    setId(value);
  }

  // edit note
  const editNote = async (value) => {
    const res = await fetch(`http://localhost:5000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });

    const data = await res.json();

    setNotes(notes.map((note) => note.id === id ? { 
        ...note, title: data.title, tags: data.tags, body: data.body 
      } : note));
    setShowEditTask(!showEditTask);
  }

  return (
    <div className="w-[80%] mx-auto border border-solid border-slate-800 box-border p-4">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <div className="">
        {showAddTask && <AddTask onAdd={addNotes} />}
        {showEditTask && <EditTask id={id} notes={notes} onEdit={editNote} />}
        <Notes notes={notes} layout={showAddTask}
          onDelete={deleteNotes} getIdNote={getIdNote} onShowEdit={() => setShowEditTask(!showAddTask)} />
      </div>
    </div>
  )
}

export default Dashboard
