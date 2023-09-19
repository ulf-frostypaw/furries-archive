import { Link } from "react-router-dom"
import Layout from "../../components/Layout"

const Login = () => {
    return(
        <Layout title="Iniciar sesion">
            <h1>Hola de nuevo owo</h1>
            <Link to="/register">Crear cuenta</Link>
        </Layout>
    )
}
export default Login