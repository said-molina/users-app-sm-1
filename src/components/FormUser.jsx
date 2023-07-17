import {useForm} from 'react-hook-form'
import { useEffect } from 'react';
import './styles/FormUser.css'


const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm}) => {



    const { register, handleSubmit, reset,  } = useForm();

    useEffect(() => {
        reset(updateInfo)
      }, [updateInfo])
      

const submit = data => {
   if(updateInfo){
    updateUserById('/users', updateInfo.id, data)
    setUpdateInfo()
   }else{
    createNewUser('/users', data)
   }
    

    reset({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
      })
    }

    const handleCloseForm = () => {
     setCloseForm(true)
    }

  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
    <form onClick={e => e.stopPropagation()} className='formuser'onSubmit={handleSubmit(submit)}>
      <h2 className='formuser__title'>{updateInfo ? 'Update User' : 'New User'}</h2>
      <div onClick={handleCloseForm} className='formuser__close'>x</div>
      <div className='formuser__group'>
        <label className='formuser__label'htmlFor="first_name">First Name</label>
        <input className='formuser__imput'{...register('first_name')} type="text" id="first_name" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="last_name">Last Name</label>
        <input className='formuser__imput'{...register('last_name')}type="text" id="last_name" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="email">Email</label>
        <input className='formuser__imput'{...register('email')}type="email" id="email" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="password">Password</label>
        <input className='formuser__imput'{...register('password')}type="password" id="password" />
      </div>
      <div className='formuser__group'>
        <label className='formuser__label' htmlFor="birthday">Birthday</label>
        <input className='formuser__imput'{...register('birthday')}type="date" id="birthday" />
      </div>
      <button className='formuser__btn'>{updateInfo ? 'Update User' : 'Create New User'}</button>
    </form>
    </div>
    
  )
}

export default FormUser