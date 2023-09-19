import { Helmet } from 'react-helmet'
import Navbar from './Header'
interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]
  title: string | null
}

const Layout = ({children, title} : LayoutProps) => {
    return(
        <>
            <Helmet>
                <title>{title} / FN</title> 
            </Helmet>
            <Navbar />
            {children}
        </>
    )
}
export default Layout