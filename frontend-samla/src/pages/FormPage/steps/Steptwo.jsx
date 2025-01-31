import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo.png";

const StepTwo = ({ setStep, validationType }) => {
  return (
    < >
    
      <div className="flex-1 flex flex-col justify-center bg-white md:bg-white">
        <div className="flex flex-col gap-2 md:px-24">
          <img src={Logo} alt="Logo" width={120} height={7} />
        </div>
        <form className="mt-7 space-y-5 w-full items-center" noValidate>
          <h1 className="text-black font-bold text-xl md:px-24">
            Datos de Vivienda
          </h1>

          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Departamento</label>
            <select
              id="tipo_identificacion"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="tipo_identificacion"
            >
              <option value="">Seleccionar</option>
              <option value="DUI">DUI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Municipio</label>
            <select
              id="tipo_identificacion"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="tipo_identificacion"
            >
              <option value="">Seleccionar</option>
              <option value="DUI">DUI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:px-24">
              <label className=" text-black" htmlFor="Nombres">
                Direccion
              </label>
              <input
              
                type="text"
                placeholder="Direccion de residencia"
                className="w-full border border-gray-300 p-3 rounded-lg"
                name="address"
                value={validationType.values.address || ""}
                onChange={(e) => validationType.handleChange(e)}
                onBlur={validationType.handleBlur}
              />
              {validationType.touched.address && validationType.errors.address ? (
              <span className="text-xs text-red-500" type="invalid">
                {validationType.errors.address}
              </span>
            ) : null}
            </div><div className="flex flex-col gap-2 md:px-24">
              <label className=" text-black" htmlFor="Nombres">
                Ingresos mensuales
              </label>
              <input
                type="text"
                placeholder="$0.00"
                className="w-full border border-gray-300 p-3 rounded-lg"
                name="salary"
                value={validationType.values.salary || ""}
                onChange={(e) => validationType.handleChange(e)}
                onBlur={validationType.handleBlur}
              />
              {validationType.touched.salary && validationType.errors.salary ? (
              <span className="text-xs text-red-500" type="invalid">
                {validationType.errors.salary}
              </span>
            ) : null}
            </div>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-white">
        <div className="w-1/2 h-1/3 mt-28 border-4 border-dashed border-blue-400 rounded-lg flex items-center justify-center">

        <input
          type="file"
          accept="image/*"
          multiple
          className="rounded-lg border border-gray-300 p-2 w-1/2 text-center cursor-pointer hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            const files = e.dataTransfer.files;
            
            console.log(files);
          }}
        />
        </div>
        <div className="w-full flex justify-end gap-2 px-5  mt-20">
            <input
              type="button"
              value="Atras"
              className="bg-gray-300 hover:bg-gray-500 w-1/4 p-3 rounded-lg text-black hover:text-white text-xl cursor-pointer block"
              onClick={() => setStep(1)}
            />
            <input
              type="button"
              value="Continuar"
              className="bg-orange-600 hover:bg-orange-500 w-1/4 p-3 rounded-lg text-white text-xl cursor-pointer block"
              onClick={() => setStep(3)}
            />
          </div>
      </div>
    </>
  );
};

StepTwo.propTypes = {
  setStep: PropTypes.func.isRequired,
  validationType: PropTypes.object.isRequired,
};

export default StepTwo;
