import { Link } from 'react-router-dom';
import Layout from '../components/Layout'
//import PostCard from '../components/PostCard'
const Home = () => {
    // loadMore: funcion para cambir la clase para (is-loading) y consultar máás posts
    return(
        <Layout title={'Inicio'}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illum dicta repellat eum rem omnis libero sit, officia ad eius. Culpa ut, quae minus dicta asperiores cupiditate laboriosam velit sapiente.</p>
            <Link to="/map">Mapa</Link>
        </Layout>
    )
}
export default Home;