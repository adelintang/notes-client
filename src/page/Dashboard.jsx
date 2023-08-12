import { useState, useEffect } from "react"
import Header from "../components/Header"
import Notes from "../components/Notes"
import AddTask from "../components/AddTask"
import EditTask from "../components/EditTask"
import Logout from "../components/Logout"
import { getNotesRequest, addNoteRequest, deleteNoteRequest, updateNoteRequest } from "../services/api"
import { signOutRequest } from "../services/auth"

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
  }, []);

  // get all notes
  const fetchNotes = async () => {
    const data = await getNotesRequest(localStorage.getItem('token'));
    return data.data.notes;
  }

  // get single note
  // const fetchNote = async (id) => {
  //   const res = await fetch(`http://localhost:5000/notes/${id}`);
  //   const data = await res.json();
  //   return data;
  // }

  // add new notes
  const addNotes = async (newNote) => {
    const data = await addNoteRequest(localStorage.getItem('token'), newNote);
    console.log(data);

    setNotes([...notes, data.data.note]);
    setShowAddTask(!showAddTask);
  }


  // delete notes
  const deleteNotes = async (id) => {
    const data = await deleteNoteRequest(localStorage.getItem('token'), id);
    console.log(data);

    setNotes(notes.filter((note) => note._id !== id));
  }

  const getIdNote = (value) => {
    setId(value);
  }

  // edit note
  const editNote = async (value) => {
    const data = await updateNoteRequest(localStorage.getItem('token'), id, value);
    
    setNotes(notes.map((note) => note._id === id ? {
      ...note, title: value.title, tags: value.tags, body: value.body
    } : note));
    setShowEditTask(!showEditTask);
  }

  // sign out
  const signOut = async () => {
    const data = await signOutRequest();
    console.log(data);
  }
  

  const layout = showAddTask || showEditTask ? 'lg:flex' : '';

  return (
    <div className="container px-8 lg:px-12 mx-auto box-border py-4">
      <Logout signOut={signOut} />
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        showEdit={showEditTask}
      />
      <div className={`${layout} justify-between`}>
        {showAddTask && <AddTask onAdd={addNotes} />}
        {showEditTask && <EditTask
          id={id}
          notes={notes}
          onEdit={editNote}
          onClose={() => setShowEditTask(!showEditTask)}
        />}
        <Notes
          notes={notes}
          layoutAdd={showAddTask}
          layoutEdit={showEditTask}
          onDelete={deleteNotes}
          getIdNote={getIdNote}
          onShowEdit={() => setShowEditTask(!showAddTask)}
        />
      </div>
    </div>
  )
}

export default Dashboard
