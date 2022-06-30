import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createPicture } from "../../store/pictures";


const PictureModal = ({ user, currUser }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [modalBackground, setModalBackground] = useState(null);

  useEffect(() => {
    const ele = document.getElementsByClassName('modalBackground')[0]
    setModalBackground(ele)
  }, [user])


  const pictureSubmit = (e) => {
    e.preventDefault()
    const newPictureInfo = {
      name,
      imageUrl,
      userId: user.id
    }
    dispatch(createPicture(newPictureInfo))

    setName('')
    setImageUrl('')
    modalBackground.style.display = "none"
  }

  const handleClick = () => {
    modalBackground.style.display = "flex"
    // modalBackground.addEventListener("click", () => {
    //   console.log("hello")
    //   modalBackground.style.display = "none"
    // })
  }


  return (<div>
    <div className="modalBackground">
      <div className="modal">
        <button onClick={() => modalBackground.style.display = "none"}>X</button>
        <fieldset>
          <form onSubmit={pictureSubmit}>
            <div>
              <label htmlFor="name">Name </label>
              <input type="text" id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Picture URL </label>
              <input type="text" id="imageUrl"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>
            <button>Upload</button>
          </form>
        </fieldset>
      </div>
    </div>
    <div>
      {currUser && currUser.username === user.username && <button onClick={() => handleClick()}>Upload Picture</button>}
    </div>
  </div>)
}


export default PictureModal
