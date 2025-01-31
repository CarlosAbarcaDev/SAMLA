import PropTypes from "prop-types";
import Camara from '../../../assets/images/camera.png'
import Logo from "../../../assets/images/logo.png";

const StepThree = ({setStep}) => {
  return (
    <div className="flex-1 flex flex-col justify-center bg-white md:bg-white">
      <form className="mt-7 space-y-5 w-full max-w-md mx-auto" noValidate>
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Logo" width={120} height={7} />
      </div>
      <div className="flex flex-col items-center mt-5">
        <img src={Camara} alt="Logo" width={120} height={7} />
      </div>
        <h1 className="text-black font-bold text-xl text-center">
        ¡Es hora de la selfie!
        </h1>
        <p className="text-black text-center">
        Sonríe y asegúrate de tener buena iluminación.
        </p>
  
        <div className="w-full flex justify-center gap-2">
            
            <input
              type="submit"
              value="Continuar"
              className="bg-orange-600 hover:bg-orange-500 w-1/2 p-3 rounded-lg text-white text-xl cursor-pointer block"
              onClick={() => setStep(1)}
            />
          </div>
      </form>
    </div>
  );
};

StepThree.propTypes = {
  setStep: PropTypes.func.isRequired,
};

export default StepThree;
