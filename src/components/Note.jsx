import { FaInfoCircle, FaEdit, FaTrash } from "react-icons/fa"

const Note = ({ note, onDelete, getIdNote, onShowEdit }) => {
  const deleteHandler = () => {
    confirm('Yakin menghapus ?') && onDelete(note._id);
  }

  const editHandler = (e) => {
    e.preventDefault();
    onShowEdit();
    getIdNote(note._id);
    console.log(note._id);
  }

  return (
    <div className="box-border shadow-lg m-2 rounded p-6 relative">
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      <p className="text-base font-normal mb-4">{note.body}</p>
      {note.tags.map((tag, i) => (
        <span key={i} className="inline-block text-sm font-semibold bg-gray-200 text-gray-700 mr-2 px-3 py-1 rounded-full box-border">{tag}</span>
      ))}
      <div className="absolute top-2 right-2 flex">
        <FaEdit className="text-green-700 mr-2 cursor-pointer text-xl hover:text-slate-800"
          onClick={(e) => editHandler(e)}/>
        <FaTrash className="text-red-500 font-bold cursor-pointer text-xl hover:text-slate-800"
          onClick={deleteHandler} />
      </div>
      <button className="flex items-center mt-8 border border-solid border-slate-800 py-1 px-4 rounded-md font-medium hover:bg-slate-200">
        <span>Detail</span>
        <FaInfoCircle className="ml-1" />
      </button>
    </div>
  )
}

export default Note
