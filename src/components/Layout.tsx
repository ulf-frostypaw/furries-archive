import { Helmet } from 'react-helmet'
interface LayoutProps {
  children: string | JSX.Element | JSX.Element[]
  title: string | null
}

const Layout = ({children, title} : LayoutProps) => {
    return(
        <>
            <Helmet>
                <title>{title} /  FN</title> 
            </Helmet>
            {children}
        </>
    )
}
export default Layout