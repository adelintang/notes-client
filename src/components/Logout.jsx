import { FaSignOutAlt } from "react-icons/fa"

const Logout = ({ signOut }) => {
  const deleteHandler = (e) => {
    e.preventDefault();
    signOut();
  }

  return (
    <button className="flex items-center bg-red-500 py-1 px-4 rounded-md font-medium hover:bg-slate-400"
      onClick={(e) => deleteHandler(e)}
    >
      <span className="text-white">Sign Out</span>
      <FaSignOutAlt className="ml-1 text-white" />
    </button>
  )
}

export default Logout
