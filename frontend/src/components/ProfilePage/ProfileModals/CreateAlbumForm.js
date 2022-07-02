import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAlbum } from '../../../store/albums'
import './CreateAlbumForm.css'

const CreateAlbumForm = ({ user }) => {
  const dispatch = useDispatch()
  const [openModal, setOpenModal] = useState(false)
  const [albumName, setAlbumName] = useState('')
  const [coverImage, setCoverImage] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    const newAlbum = {
      albumName,
      coverImage,
      userId: user.id
    }


    dispatch(createAlbum(newAlbum))

    document.body.style.overflow = "hidden scroll"
    setOpenModal(false)

    setAlbumName('')
    setCoverImage('')
  }

  return <div>
    <button className="createButton" onClick={() => {
      document.body.style.overflow = "hidden"
      setOpenModal(true)
    }}
    >+ Create A New Album</button>

    {openModal &&
      <div className="albumFormBackground">
        <div className="albumFormContent">

          <button onClick={() => {
            document.body.style.overflow = "hidden scroll"
            setOpenModal(false)
            setAlbumName('')
            setCoverImage('')
          }}
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

            <button>Create</button>
          </form>

        </div>
      </div>
    }
  </div>
}


export default CreateAlbumForm
