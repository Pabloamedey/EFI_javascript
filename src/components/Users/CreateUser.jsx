import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const CreateUser = () => {
    const token = ''
    const RegisterUser = async (values) => {

        const bodyRegisterUser = {
            username:values.username,
            password:values.password
        }

        console.log("bodyRegusterUser", bodyRegisterUser)
        const bearerToken = ''
        // http://localhost:5000/users
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(bodyRegisterUser)
        })

        console.log(response)

    }

    const ValidationSchema = Yup.object().shape({
        password: Yup.string()
        .required("Este es un campo requerido")
        .min(5, 'Esta contraseña debe de mayor a 5 caracteres'),
        username: Yup.string()
        .min(5, 'Minimo 5 caracteres')
        .max(25, 'Maximo 25 caracteres')
        .required("Este es un campo requerido"),
    })

    return(
        <Formik
            initialValues={{ password: '', username: '' }}
            validationSchema={ValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                /* and other goodies */
            }) => (
                console.log(values),
                <form>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && errors.username}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                <button type="button" onClick={() => RegisterUser(values)} disabled={values.username === '' || values.password === '' || !isValid}>
                    Crear usuario
                </button>
                </form>
            )}
        </Formik>
    )

}

export default CreateUser