import './App.css'
import useFetch from './Hooks/useFetch'
import { useEffect, useState } from 'react'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const baseURL = 'https://users-crud.academlo.tech'
  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseURL, setCloseForm)
  
  useEffect(() => {
  getAllUsers('/users')
  }, [])
  
  const handleOpenForm = () => {
    setCloseForm(false)

  }
 
  return (
    <>
    <h1 className='user-name-top'>Users</h1>
    <div className='btn-container'>
    <button onClick={handleOpenForm} className='formuser__btn-pri'><i class='bx bx-plus bx-sm' ></i>Create new user</button>
    </div>
    
    <FormUser
    createNewUser={createNewUser}
    updateInfo={updateInfo}
    updateUserById={updateUserById}
    setUpdateInfo={setUpdateInfo}
    closeForm={closeForm}
    setCloseForm={setCloseForm}
    />
      <div className='user-container'>
        {
          users?.map(user => (
          <UserCard
          key={user.id}
          user={user}
          deleteUserById={deleteUserById}
          setUpdateInfo={setUpdateInfo}
          handleOpenForm={handleOpenForm}
          />
          ))
        }
      </div>
    </>
  )
}

export default App
