import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
const Error404 = ( ) => {
    return(
        <Layout title="Pagina no encontrada">
            <section class="hero is-large">
                <div class="hero-body ">
                    <div className="container has-text-centered">
                        <p class="title is-1">Error 404</p>
                        <p class="subtitle">La pagina que estabas buscando no está disponible o ya no existe. Intenta otra cosa antes de continuar</p>
                    </div>
                  </div>
            </section>
        </Layout>
    )
}
export default Error404