import { Link } from "react-router-dom"
import Layout from "../../components/Layout"

const Register = ( ) => {
    return(
        <Layout title="Crear cuenta">
            <h1>Crear cuenta owo</h1>
            <Link to="/login">Ya tengo cuenta.</Link>
        </Layout>
    )
}
export default Register