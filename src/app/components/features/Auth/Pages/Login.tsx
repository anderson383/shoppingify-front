import * as Yup from 'yup';
import { useEffect, useState } from "react"
import { TextField } from "../../../ui/atoms/TextField"
import { Form, Formik } from "formik"
import styles from './Login.module.scss'
import useAuthRepository from '../../../../hooks/repositories/useAuthRepository';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate()
  const initialValues = {
    email: '',
    password: ''
  }

  const authRepository = useAuthRepository()
  const validationSchema = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required'),
  })

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const onSumit = (values: typeof initialValues) => {
    authRepository.login({
      email: values.email,
      password: values.password
    }).then(response => {
      if (response) {
        localStorage.setItem('token', response)
        navigate('/')
      } else {
        setErrorLogin(true)
      }
    })
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.mainTitle}>
        <h1>
          <span className="text-primary">Shoppingify</span> allow you take your <br/> shopping list wherever you go
        </h1>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSumit}
        >
           {() => (
            <Form style={{width:'100%' }}>
              <h2 className='mb-24'>Login</h2>
              <TextField
                id={'email'}
                name='email'
                label={'Email'}
                className="mb-18"
                inputProps={{
                  type: 'text',
                  placeholder: 'Enter your email',
                }}
              />
              <TextField
                name='password'
                id={'password'}
                label={'Password'}
                inputProps={{
                  placeholder: 'Password',
                  name: 'note',
                  type: 'password',
                  rows: 4,
                }}
              />
              {
               errorLogin && <p className='text-error mt-20'>
                  Credenciales incorrectas
                </p>
              }
              <button type='submit' className="btn btn-primary mt-20">
                Login
              </button>

            </Form>
           )}
        </Formik>
      </div>
    </div>
  )
}