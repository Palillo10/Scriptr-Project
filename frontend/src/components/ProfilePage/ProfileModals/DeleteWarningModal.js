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
        <h3 style={{ textAlign: "center" }}>Delete Picture</h3>
        <h4 style={{ textAlign: "center" }}>You cannot reverse this action. Are you sure you want to delete this picture?</h4>
        <button style={{ position: "absolute", top: 0, cursor: "pointer", backgroundColor: "rgb(1, 173, 173)" }} id="XButton"
          onClick={() => {
            deletePictureWarning.style.display = 'none';
          }}
        >X</button>
        <button style={{ position: 'absolute', right: 0, cursor: "pointer", borderColor: "darkred", color: "darkred" }}
          onClick={() => {
            deletePictureWarning.style.display = 'none';
            dispatch(deletePicture(picture.id)
            )
          }
          }>Delete</button>
      </div>
    </div>

    <div>
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
