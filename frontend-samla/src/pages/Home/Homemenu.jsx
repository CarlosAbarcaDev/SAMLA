import PropTypes from 'prop-types';
import Banner from '../../assets/images/banner.jpg'
import Logo from '../../assets/images/logo.png'
import { Link } from 'wouter';

const HomeMenu = () => {
    return ( 
        <div className="flex flex-col md:flex-row h-screen">
        <div className="flex-1 flex flex-col items-center justify-center bg-blue-800 md:bg-blue-800">
          <div className="relative h-screen w-full">
            
            <div className="flex justify-center items-center h-full">
              <img
                src={Banner}
                alt="Logo"
                width={400}
                height={7}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col  justify-center bg-white md:bg-white p-4">
          <div className="flex flex-col gap-2 md:px-24">
            <img src={Logo} alt="Logo" width={120} height={7} />
            <h1 className='text-xl my-5'>El nuevo sistema autogestionable de solicitud de credito Pruebalo Ahora!</h1>
          </div>
          <div className="flex gap-2 md:px-24 py-10">
            <Link to='/form' className='w-3/4'>
              <input
                type="button"
                value="Ir a Formulario"
                className="bg-orange-600 hover:bg-orange-500 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
                // onClick={() => setStep(2)}
              />
            
            </Link>
            <Link to='/credits' className='w-3/4'>
            
              <input
                type="button"
                value="Consultar Historial"
                className="bg-orange-600 hover:bg-orange-500 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
                // onClick={() => setStep(2)}
              />
            </Link>
            </div>
        </div>
      </div>
     );
}
 
HomeMenu.propTypes = {
    setStep: PropTypes.func.isRequired,
  };

export default HomeMenu;