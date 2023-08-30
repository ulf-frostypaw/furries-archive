import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
const Home = () => {
    // loadMore: funcion para cambir la clase para (is-loading) y consultar máás posts
    return(
        <Layout title="Inicio">
            <div className='column'>
                <PostCard /> <PostCard /><PostCard /> <PostCard /><PostCard /> <PostCard />
                <button type="button" className='is-primary button is-fullwidth is-medium is-rounded ' id='loadMore'>Cargar más...</button>
            </div>
        </Layout>
    )
}
export default Home;