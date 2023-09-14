import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
const Error404 = ( ) => {
    return(
        <Layout title="Pagina no encontrada">
            <section className="hero is-large">
                <div className="hero-body ">
                    <div className="container has-text-centered">
                        <p className="title is-1">Error 404</p>
                        <p className="subtitle">La pagina que estabas buscando no está disponible o ya no existe. Intenta otra cosa antes de continuar</p>
                    </div>
                  </div>
            </section>
        </Layout>
    )
}
export default Error404