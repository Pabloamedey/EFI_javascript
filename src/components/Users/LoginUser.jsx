import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const LoginUser = () => {

    const onLoginUser = async (values) => {

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers:{
                "Athorization": `Basic ${values.username}:${values.password}`
            }
        })

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
                <button type="button" onClick={() => onLoginUser(values)} disabled={values.username === '' || values.password === '' || !isValid}>
                    Iniciar Sesión
                </button>
                </form>
            )}
        </Formik>
    )
}

export default LoginUser