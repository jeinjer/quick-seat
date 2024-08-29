const Main = () => {
    return (
            <main className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-center text-2xl font-bold mb-4">Selecciona tu Asiento</h2>
                        <div className="grid grid-cols-10 gap-2">
                            {/* Ejemplo de disposición de asientos */}
                            {[...Array(100)].map((_, index) => (
                                <button
                                    key={index}
                                    className="w-10 h-10 bg-white border border-gray-300 hover:bg-gray-200"
                                    title={`Asiento ${index + 1}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                </div>
            </main>
      );
};

export default Main;