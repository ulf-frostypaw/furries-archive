import Layout from '../../components/Layout'
import {Link} from 'react-router-dom'
import {BiAt, BiUser, BiLock} from 'react-icons/bi'
const Register = () => {
    return(
        <Layout title="Crear una cuenta">
            <div className="columns">
                <div className="column"></div>
                <div className="column card mt-4 is-5 p-5">
                    <div className="column">
                        <p className="title is-2">Te damos la bienvenida</p>
                        <p className="subtitle">Esperamos que tu estadia sea agradable. UwU</p>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label>Nombre</label>
                                <p class="control">
                                    <input class="input is-medium" required type="text" placeholder="Juanito" />
                                </p>
                            </div>                   
                        </div>
                        <div className="column">
                            <div className="field">
                                <label>Apellido</label>
                                <p class="control">
                                    <input class="input is-medium" type="text" placeholder="Alcachofa" />
                                </p>
                            </div> 
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label>Correo electronico</label>
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input is-medium" type="email" required placeholder="MyUsername" />
                                    <span class="icon is-small is-left">
                                        <BiUser />
                                    </span>
                                </p>
                            </div>                   
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="field">
                                <label>Contraseña</label>
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input is-medium" type="password" required placeholder="Contraseña" />
                                    <span class="icon is-small is-left">
                                        <BiLock />
                                    </span>
                                </p>
                            </div>                   
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <button className="button is-primary" type="submit">Registrarse</button>         
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <span><Link to="/reset_password">¿Olvidaste tu contraseña?</Link> o <Link to="/register">¿Todavía no tienes cuenta?</Link></span>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        </Layout>
    )
}

export default Register