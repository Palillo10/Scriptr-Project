import { useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import { deletePicture } from "../../../store/pictures";



const DeleteWarning = ({ picture, user, currUser }) => {
  console.log(picture)
  const dispatch = useDispatch()

  const [deletePictureWarning, setDeletePictureWarning] = useState(null)

  useEffect(() => {
    const ele = document.getElementsByClassName('warningBackground')[0]
    setDeletePictureWarning(ele)
  }, [])
  return (<div>
    <div className='warningBackground'>
      <div className='deleteModal'>
        <button
          onClick={() => {
            deletePictureWarning.style.display = 'none';
            document.body.style.overflow = "hidden scroll"
          }}
        >X</button>
        <button onClick={() => dispatch(deletePicture(picture.id))}>Confirm</button>
      </div>
    </div>
    <div>{picture.description}
      {currUser && currUser.username === user.username &&
        <button className="deleteButtons"
          onClick={() => {
            deletePictureWarning.style.display = "flex";
            document.body.style.overflow = "hidden hidden"
          }}>Delete Picture</button>}
    </div>

  </div >

  )
}

export default DeleteWarning
