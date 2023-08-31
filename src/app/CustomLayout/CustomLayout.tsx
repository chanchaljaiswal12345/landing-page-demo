import Navbar from "../Navbar/Navbar";

const CustomLayout = ({children}:any) => {
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default CustomLayout;