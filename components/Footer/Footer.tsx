import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 px-8 flex flex-col items-center space-y-2">
            <span className="text-sm">© 2024 QuickSeat - Todos los derechos reservados</span>
                <div className="flex space-x-4">

                    <Link 
                        href="https://www.instagram.com/stefatommasi/" 
                        className="hover:text-gray-400">
                        <FaInstagram />
                    </Link>

                    <Link 
                        href="https://www.linkedin.com/in/stefanotommasi15/" 
                        className="hover:text-gray-400">
                        <FaLinkedin />
                    </Link>
                </div>
            <span className="text-sm">Creado por Stefano Tommasi</span>
        </footer>
    );
};

export default Footer;
