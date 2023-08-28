import Layout from '../components/Layout'


import PostCard from '../components/PostCard'
const Home = () => {
    // loadMore: funcion para cambir la clase para (is-loading) y consultar máás posts
    return(
        <Layout title="Inicio">
            <div className="columns">
                <div className="column">
                </div>
                <div className='column'>
                    <PostCard /> <PostCard /><PostCard /> <PostCard /><PostCard /> <PostCard />
                    <button type="button" className='is-primary button is-fullwidth is-medium is-rounded ' id='loadMore'>Cargar más...</button>
                </div> 
                <div className="column"></div>
            </div>
        </Layout>
    )
}
export default Home;