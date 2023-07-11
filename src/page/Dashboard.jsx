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
    const res = await fetch(import.meta.env.VITE_API_URL);
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
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote)
    }

    const res = await fetch(import.meta.env.VITE_API_URL, option);
    const data = await res.json();

    setNotes([...notes, data]);
    setShowAddTask(!showAddTask);
  }

  // delete notes
  const deleteNotes = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    });

    setNotes(notes.filter((note) => note.id !== id));
  }

  const getIdNote = (value) => {
    setId(value);
  }

  // edit note
  const editNote = async (value) => {
    const option = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,option);
    const data = await res.json();

    setNotes(notes.map((note) => note.id === id ? {
      ...note, title: data.title, tags: data.tags, body: data.body
    } : note));
    setShowEditTask(!showEditTask);
  }

  const layout = showAddTask || showEditTask ? 'lg:flex' : ''; 

  return (
    <div className="container px-8 lg:px-12 mx-auto box-border p-4">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} showEdit={showEditTask} />
      <div className={`${layout} justify-between`}>
        {showAddTask && <AddTask onAdd={addNotes} />}
        {showEditTask && <EditTask id={id} notes={notes} onEdit={editNote} onClose={() => setShowEditTask(!showEditTask)} />}
        <Notes notes={notes} layoutAdd={showAddTask} layoutEdit={showEditTask}
          onDelete={deleteNotes} getIdNote={getIdNote} onShowEdit={() => setShowEditTask(!showAddTask)} />
      </div>
    </div>
  )
}

export default Dashboard
