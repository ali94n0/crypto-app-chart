import { Toaster } from "react-hot-toast";


const Layout = ({children}) => {
    return (
        <div className="container mx-auto ">
            <Toaster/>
            <header className=" flex items-center justify-center text-slate-400 bg-neutral-700 py-2 px-4 rounded-md font-bold ">
                <h1>Crypto App</h1>
            </header>
            {children}
            <footer className=" flex items-center justify-center text-slate-400 bg-neutral-700 py-2 px-4 rounded-md font-bold mt-6">GitHub:&nbsp;<a className="font-normal text-sm text-blue-700" href="https://github.com/ali94n0">ali94n0</a></footer>
            
        </div>
    );
};

export default Layout;