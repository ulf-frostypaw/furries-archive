import Layout from "../components/Layout"
import {BiEnvelope, BiAt, BiUser} from 'react-icons/bi'
const Home = () => {
    return(
        <Layout>
            <section class="hero">
                <div class="hero-body">
                    <p className="title is-1">Furries.Network</p>
                    <p class="title">Registro anticipado</p>
                    <p class="subtitle">Cuando estemos listos, te enviaremos un correo. Ingresa tus datos en el siguiente formulario:</p>
                    <form action="" method="post">
                        <div className="card p-5">
                            <div className="columns">
                                <div className="column">
                                    <div class="field">
                                        
                                        <p class="control has-icons-left has-icons-right">
                                            <input required class="input" type="text" placeholder="Nombre" />
                                            <span class="icon is-small is-left">
                                                <BiUser />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div class="field">
                                        <p class="control has-icons-left has-icons-right">
                                            <input class="input" type="text" placeholder="Apellido (opcional)" />
                                            <span class="icon is-small is-left">
                                                <BiUser />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div class="field">
                                        <p class="control has-icons-left">
                                            <input required class="input" type="text" placeholder="Nombre de usuario" />
                                            <span class="icon is-small is-left">
                                                <BiAt />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div class="field">
                                        <p class="control has-icons-left">
                                            <input required class="input" type="email" placeholder="Correo electronico" />
                                            <span class="icon is-small is-left">
                                                <BiEnvelope />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="field">
                                <p class="control">
                                    <button class="button is-success">¡Listo, te esperaré!</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}
export default Home