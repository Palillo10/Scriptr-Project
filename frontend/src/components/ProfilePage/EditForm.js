import { useState } from "react"
import { useDispatch } from "react-redux"

import { updatePicture } from '../../store/pictures'


const EditForm = ({ picture }) => {
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(picture.name)
  const [description, setDescription] = useState(picture.description)
  const [showEdit, setShowEdit] = useState(false)


  const editSubmit = async (e) => {
    e.preventDefault();
    const pictureInfo = {
      name: editName,
      description
    }
    // console.log(pictureInfo)

    let res = await dispatch(updatePicture(picture.id, pictureInfo))
    if (res) {
      setShowEdit(false)
      setEditName(res.name)
      setDescription(res.description)
    }

  }

  const cancelEdit = () => {
    setShowEdit(false)
    setEditName(picture.name)
    setDescription(picture.description)
  }

  return (<>
    {showEdit && <div className="EditForm">
      <fieldset>
        <button
          style={{ color: "red", borderColor: "red", cursor: "pointer" }}
          onClick={cancelEdit}>X</button>
        <form
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "flex-start",
          }}
          onSubmit={editSubmit}>
          <label htmlFor="editName">Edit Name</label>
          <div>
            <input type="text"
              id="editName"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              required
            />
          </div>
          <label htmlFor="editDescription">Edit Description</label>
          <div>
            <textarea type="text"
              rows="3"
              cols="40"
              id="editDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button
            style={{
              backgroundColor: "rgb(1, 173, 173)", cursor: "pointer"
            }}
          >Submit Edit</button>
        </form>
      </fieldset>
    </div>}
    {!showEdit && <button className="editPictureButton" onClick={() => setShowEdit(true)}>Edit Picture</button>}
  </>)
}

export default EditForm
