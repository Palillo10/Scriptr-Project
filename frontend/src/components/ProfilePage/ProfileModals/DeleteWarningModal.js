import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { deletePicture } from "../../../store/pictures";
import EditForm from "../EditForm";


const DeleteWarning = ({ picture, user, currUser }) => {
  const dispatch = useDispatch()

  const [deletePictureWarning, setDeletePictureWarning] = useState(null)

  useEffect(() => {
    const ele = document.getElementById(`BG${picture.id}`)
    setDeletePictureWarning(ele)
  }, [picture.id])


  return (<div>
    <div className='warningBackground' id={`BG${picture.id}`}>
      <div className='deleteModal'>
        <h3>Delete Picture</h3>
        <h4>You cannot reverse this action. Are you sure you want to delete this picture?</h4>
        <button
          onClick={() => {
            deletePictureWarning.style.display = 'none';
            // document.body.style.overflow = "hidden scroll"
          }}
        >X</button>
        <button onClick={() => {
          deletePictureWarning.style.display = 'none';
          // document.body.style.overflow = "hidden scroll"
          dispatch(deletePicture(picture.id)
          )
        }
        }>Delete</button>
      </div>
    </div>
    <div>{picture.description}
      {currUser && currUser.username === user.username &&
        <button className="deleteButtons"
          onClick={() => {
            deletePictureWarning.style.display = "flex";
            // document.body.style.overflow = "hidden hidden"
          }}>Delete Picture</button>}
      {currUser && currUser.username === user.username && <EditForm picture={picture} />}
    </div>

  </div >

  )
}

export default DeleteWarning
