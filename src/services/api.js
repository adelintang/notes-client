// get all notes
export const getNotesRequest = async (token) => {
  const res = await fetch(import.meta.env.VITE_NOTES_API_URL, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await res.json();
  console.log(data);
  return data;
}

// add note
export const addNoteRequest = async (token, newNote) => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(newNote)
  }

  const res = await fetch(import.meta.env.VITE_NOTES_API_URL, option);
  const data = await res.json();
  return data;
}

// delete note
export const deleteNoteRequest = async (token, id) => {
  const res = await fetch(`${import.meta.env.VITE_NOTES_API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }      
  });

  const data = await res.json();
  return data;
}

// edit note
export const updateNoteRequest = async (token, id, value) => {
  const option = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(value)
  }

  const res = await fetch(`${import.meta.env.VITE_NOTES_API_URL}/${id}`, option);
  const data = await res.json();
  return data;
}
