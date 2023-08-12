import Note from "./Note"

const Notes = ({ notes, onDelete, layoutAdd, layoutEdit, onShowEdit, getIdNote }) => {
  const layout = layoutAdd || layoutEdit ? 'lg:grid-cols-2 lg:w-[65%]' : 'lg:grid-cols-3';

  return (
    <div className={`grid sm:grid-cols-1 md:grid-cols-2 ${layout}`} >
      {notes.map((note, i) => (<Note
        key={i}
        note={note}
        onDelete={onDelete}
        onShowEdit={onShowEdit}
        getIdNote={getIdNote}
      />))}
    </div>
  )
}

export default Notes
