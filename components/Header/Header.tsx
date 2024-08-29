const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold">QuickSeat</h1>
            <div className="space-x-4">
                <a href="#" className="text-lg hover:underline">Iniciar Sesión</a>
                <a href="#" className="text-lg hover:underline">Registrarse</a>
            </div>
        </header>
    );
};

export default Header;