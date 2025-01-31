import LogoBlanco from '../../assets/images/logoblanco.png'

const CreditTable = () => {
    return ( 
    <>
    <div className="w-full p-5 bg-blue-700">
        <img src={LogoBlanco} alt="Logo" className="w-20 h-5 mx-5"/>
    </div>
    <div className="w-full mt-6">
        <h1 className="text-3xl font-bold text-black mx-10">Historial de registro</h1>
    </div>
    <div className="w-full flex justify-center mt-20">


    <div className="relative overflow-x-auto w-5/6 shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className=" text-xl text-gray-400 bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombres y Apellidos
                </th>
                <th scope="col" className="px-6 py-3">
                    Correo electronico
                </th>
                <th scope="col" className="px-6 py-3">
                    Numero de telefono
                </th>
                <th scope="col" className="px-6 py-3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b  border-gray-200 hover:bg-blue-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Juan Carlos Perez Lopez
                </th>
                <td className="px-6 py-4">
                    ejemplo12@mail.com
                </td>
                <td className="px-6 py-4">
                    75659225
                </td>
                
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalles</a>
                </td>
            </tr>
            
            <tr className="bg-white border-b  border-gray-200 hover:bg-blue-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Juan Carlos Perez Lopez
                </th>
                <td className="px-6 py-4">
                    ejemplo12@mail.com
                </td>
                <td className="px-6 py-4">
                    75659225
                </td>
                
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalles</a>
                </td>
            </tr>
            
            <tr className="bg-white border-b  border-gray-200 hover:bg-blue-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Juan Carlos Perez Lopez
                </th>
                <td className="px-6 py-4">
                    ejemplo12@mail.com
                </td>
                <td className="px-6 py-4">
                    75659225
                </td>
                
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalles</a>
                </td>
            </tr>
            
            <tr className="bg-white border-b  border-gray-200 hover:bg-blue-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Juan Carlos Perez Lopez
                </th>
                <td className="px-6 py-4">
                    ejemplo12@mail.com
                </td>
                <td className="px-6 py-4">
                    75659225
                </td>
                
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalles</a>
                </td>
            </tr>
            
            <tr className="bg-white border-b  border-gray-200 hover:bg-blue-50 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Juan Carlos Perez Lopez
                </th>
                <td className="px-6 py-4">
                    ejemplo12@mail.com
                </td>
                <td className="px-6 py-4">
                    75659225
                </td>
                
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver detalles</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
    </>
    );
}
 
export default CreditTable;