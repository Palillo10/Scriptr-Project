import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { createPicture } from "../../../store/pictures";


const UploadForm = ({ user, currUser }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [modalBackground, setModalBackground] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState();


  useEffect(() => {
    const ele = document.getElementsByClassName('modalBackground')[0]
    setModalBackground(ele)
  }, [])

  useEffect(() => {
    const errors = []
    if (!name.length) errors.push('Album name cannot be blank');
    if (!imageUrl.endsWith('png') && !imageUrl.endsWith('img')
      && !imageUrl.endsWith('jpg') && !imageUrl.endsWith("jpeg")) errors.push('Image url must be an image')
    setValidationErrors(errors);
  }, [name, imageUrl])

  const pictureSubmit = (e) => {
    e.preventDefault()
    const newPictureInfo = {
      name,
      imageUrl,
      userId: user.id
    }

    setHasSubmitted(true);
    if (validationErrors.length) return null
    dispatch(createPicture(newPictureInfo))

    setName('')
    setImageUrl('')
    setValidationErrors([])
    setHasSubmitted(false);
    modalBackground.style.display = "none"
  }

  const handleClick = () => {
    modalBackground.style.display = "flex"
    modalBackground.style.overflow = "hidden"
  }


  return (<>
    <div>
      <div>
        {currUser && currUser.username === user.username && <button className="uploadButton" onClick={() => handleClick()}>
          <i className="fas thin fa-plus" />
          Upload Picture</button>}
      </div>

      <div className="modalBackground">
        <div className="modal">


          <fieldset className="uploadFieldSet">
            <button className="cancelUpload" onClick={() => {
              setValidationErrors([])
              setHasSubmitted(false);
              modalBackground.style.display = "none"
            }}>X</button>
            {hasSubmitted && validationErrors.length > 0 && (
              <div>
                The following errors were found:
                <ul className='errorsList'>
                  {validationErrors.map(error => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <form className="uploadForm" onSubmit={pictureSubmit}>
              <label htmlFor="name">Name </label>
              <div>
                <input type="text" id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <label htmlFor="imageUrl">PictureUrl </label>
              <div>
                <input type="text" id="imageUrl"
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
              </div>
              <button className="confirmUpload">Upload</button>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  </>)
}


export default UploadForm
