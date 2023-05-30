import { useState } from "react";

const Title = () => {
    return (
        <a href="/" className="inline-block w-16">
            <img className="w-full" src="https://deliverlogic-common-assets.s3.amazonaws.com/editable/images/getfedre/site/get_fed_logo.png" alt="logo" />
        </a>
    );
}
const Header = () => {

    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <div className="m-4 p-4 bg-black rounded-xl flex justify-between">
            <Title />
            <div className="nav-items">
                <ul className="flex gap-4 text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedin ? <button className="text-white" onClick={() => setIsLoggedin(false)}>Logout</button> : <button className="text-white" onClick={() => setIsLoggedin(true)}>Login</button>
            }

        </div>
    );
}

export default Header;