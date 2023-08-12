import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [body, setBody] = useState('');

  const handleTags = (value) => {
    const result = value.split(/[\W|\s]/gi).filter((e) => Boolean(e)).map((e) => `#${e}`);
    setTags(result);
  }  

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd({ title, tags, body });
  }

  const inputStyle = "block w-[100%] py-2 pl-2 rounded-sm text-black mb-4 font-normal focus:outline-none focus:ring focus:ring-blue-400 bg-slate-200"

  return (
    <form className="bg-slate-800 box-border p-4 m-2 mb-8 rounded-sm lg:order-last lg:w-[35%] lg:h-72" onSubmit={submitHandler}>
        <input type="text" id="title" placeholder="masukkan title: my title"
          className={inputStyle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" id="tags" placeholder="masukkan tags: tags1, tags2"
          className={inputStyle}
          onChange={(e) => handleTags(e.target.value)}
        />
        <input type="text" id="body" placeholder="masukkan body: this is body notes"
          className={inputStyle}
          onChange={(e) => setBody(e.target.value)}
        />
      <input type="submit" className="block w-[100%] mt-16 bg-blue-400 py-2 rounded-sm font-semibold cursor-pointer text-white" value="save" />
    </form>
  )
}

export default AddTask
