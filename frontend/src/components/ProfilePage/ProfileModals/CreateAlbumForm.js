import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAlbum } from '../../../store/albums'
import './CreateAlbumForm.css'

const CreateAlbumForm = ({ user }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [albumName, setAlbumName] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = []
    if (!albumName.length) errors.push('Album name cannot be blank');
    if (!coverImage.endsWith('png') && !coverImage.endsWith('img')
      && !coverImage.endsWith('jpg') && !coverImage.endsWith("jpeg")) errors.push('Image url must be an image')
    setValidationErrors(errors);
  }, [albumName, coverImage])


  const handleSubmit = (e) => {
    e.preventDefault()

    const newAlbum = {
      albumName,
      coverImage,
      userId: user.id
    }

    setHasSubmitted(true);
    if (validationErrors.length) return null
    dispatch(createAlbum(newAlbum))

    setOpenModal(false)

    setAlbumName('')
    setCoverImage('')
    setValidationErrors([])
    setHasSubmitted(false);
  }

  return <div>
    <button className="createButton" onClick={() => {
      setOpenModal(true)
    }}
    >
      <i className="fas thin fa-plus" />
      New Album</button>

    {openModal &&
      <div className="albumFormBackground">
        <div className="albumFormContent">

          <button onClick={() => {
            setOpenModal(false)
            setAlbumName('')
            setCoverImage('')
            setHasSubmitted(false)
          }}
            className="cancelAlbumButton"
          >X</button>

          <h3>Create a new album</h3>


          <form onSubmit={handleSubmit}>
            <div>
              <input type="text"
                id="albumName"
                placeholder='Album name'
                value={albumName}
                onChange={e => setAlbumName(e.target.value)}
              />
            </div>

            <div>
              <input
                id="albumCoverImage"
                value={coverImage}
                placeholder='Cover Image Url'
                onChange={e => setCoverImage(e.target.value)}
              />
            </div>
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

            <button className='createAlbumButton'>Create</button>
          </form>

        </div>
      </div>
    }
  </div>
}


export default CreateAlbumForm
