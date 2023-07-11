const Header = ({ onAdd, showAdd, showEdit }) => {
  return (
    <header className="flex justify-between p-4 box-border mb-4">
      <h1 className="text-2xl font-bold">Notes App</h1>
      <button className={`block px-5 py-2 font-semibold text-white rounded-md ${showEdit && 'opacity-50 cursor-not-allowed'}`}
        style={{ backgroundColor: `${showAdd ? 'red' : 'green'}` }}
        onClick={!showEdit && onAdd}>
        { showAdd ? 'Close' : 'Add' }
      </button>
    </header>
  )
}

export default Header
