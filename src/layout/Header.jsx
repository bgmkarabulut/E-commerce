

import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Headset } from "lucide-react";
import { ShoppingCart } from "lucide-react";
export default function Header(){
    return (
    <nav className="nav bg-gray-950">
        <Link to="/" className="site-title">
        Cara
        </Link>
        <ul>
            <li>
                <Link to="/shop">Shop <ShoppingBag/> </Link>
                </li>
            
            <li>
                <Link to="/contact">Contact <Headset/></Link>
                </li>
             <li>
                <Link to="/cart"><ShoppingCart/></Link>
                </li>
            
        </ul>
    </nav>
    );
}
