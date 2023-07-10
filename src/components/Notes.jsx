import Note from "./Note"

const Notes = ({ notes, onDelete, layout, onShowEdit, getIdNote }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ width: `${layout}` ? "100%" : "60%"}}>
      {notes.map((note) =>  (<Note key={note.id} note={note} onDelete={onDelete} onShowEdit={onShowEdit} getIdNote={getIdNote} />))}
    </div>
  )
}

export default Notes
