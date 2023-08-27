import {BiAt, BiUser} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import Layout from '../../components/Layout'
const Login = () => {
    return(
        <Layout title="Iniciar sesión">
            <div className="columns">
                <div className="column"></div>
                <div className="column mt-4 card is-5 p-5">
                    <div className="column">
                        <p className="title is-2">¡Hola, de nuevo!</p>
                        <p className="subtitle">Nos alegra mucho verte de nuevo</p>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label>Nombre de usuario o correo electronico</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input is-medium" disabled type="email" placeholder="MyUsername" />
                                <span class="icon is-small is-left">
                                    <BiAt />
                                </span>
                            </p>
                        </div>                    
                    </div>
                    <div className="column">
                        <label>Contraseña:</label>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input is-medium" disabled type="password" placeholder="Contraseña" />
                                <span class="icon is-small is-left"><BiUser /></span>
                            </p>
                        </div>
                    </div>
                    <div className="column">
                        <button className="button is-primary ">Iniciar sesión</button>
                    </div>
                    <div className="column">
                        <span><Link to="/reset_password">¿Olvidaste tu contraseña?</Link> o <Link to="/register">¿Todavía no tienes cuenta?</Link></span>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </Layout>
    )
}
export default Login