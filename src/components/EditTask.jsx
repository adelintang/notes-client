import { useState } from "react";
import { FaTimes } from 'react-icons/fa';

const EditTask = ({ id, notes, onEdit, onClose }) => {
  const note = notes.find((elem) => elem._id === id);

  const [title, setTitle] = useState(note.title);
  const [tags, setTags] = useState(note.tags);
  const [body, setBody] = useState(note.body);

  const handleTags = (value) => {
    const newTags = value.split(/[\W|\s]/gi).filter((e) => Boolean(e)).map((e) => `#${e}`);
    setTags(newTags);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    onEdit({ title, tags, body });
  }

  const inputStyle = "block w-[100%] py-2 pl-2 rounded-sm text-black mb-4 font-normal focus:outline-none focus:ring focus:ring-blue-400 bg-slate-200"

  return (
    <form className="bg-slate-800 box-border m-2 p-4 mb-8 rounded-sm lg:order-last lg:w-[35%] lg:h-72 relative"
      onSubmit={submitHandler}
    >
      <input type="text" id="title" placeholder="masukkan title: my title"
        className={inputStyle}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" id="tags" placeholder="masukkan tags: tags1, tags2"
        className={inputStyle}
        style={{ color: '#bbb' }}
        disabled
        value={tags}
        onChange={(e) => handleTags(e.target.value)}
      />
      <input type="text" id="body" placeholder="masukkan body: this is body notes"
        className={inputStyle}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input type="submit" className="block w-[100%] mt-16 bg-blue-400 py-2 rounded-sm font-semibold cursor-pointer text-white" value="edit" />
      <div className="absolute -top-3 -right-3 bg-blue-400 rounded-full p-1"
        onClick={onClose}
      >
        <FaTimes className="text-white font-bold cursor-pointer text-xl" />
      </div>
    </form>
  )
}

export default EditTask
