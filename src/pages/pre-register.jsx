import '../landing.css'
const Landing = () => {
    return(
    <section class="hero is-info is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title is-1">En mantenimiento</h1>
                        <h2 class="subtitle">
                            Cada día trabajamos arduamente para que nuestra plataforma tenga nuevas y mejores caracteristicas. Ingresa tu mail para notificarte cuando estemos de regreso. UwU
                        </h2>
                        <div class="box">
                            <div class="field is-grouped">
                                <p class="control is-expanded">
                                    <input class="input" disabled className="has-background-grey-darker has-text-white-ter input" type="email" placeholder="Ingresa tu correo electronico" />
                                </p>
                                <p class="control">
                                    <button type="submit" className="button is-info">¡Notificame!</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
    )
}
export default Landing