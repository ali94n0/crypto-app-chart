import { Toaster } from "react-hot-toast";


const Layout = ({children}) => {
    return (
        <div>
            <Toaster/>
            <header>header</header>
            {children}
            <footer>footer</footer>
            
        </div>
    );
};

export default Layout;