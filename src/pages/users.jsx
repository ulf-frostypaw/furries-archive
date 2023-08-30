import UserCard from '../components/UserCard'
import Layout from '../components/Layout'
const Users = () => {
    return(
        <Layout title={"Miembros"}>
            <div className="column">
                <UserCard />
                <UserCard />
            </div>
        </Layout>
    )
}

export default Users