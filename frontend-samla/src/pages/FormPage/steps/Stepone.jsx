import PropTypes from "prop-types";

import Banner from "../../../assets/images/banner.jpg";
import Logo from "../../../assets/images/logo.png";

const StepOne = ({ setStep, validationType }) => {
  return (
    <>
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
        </div>
        <div className="mt-7 space-y-5 w-full items-center" noValidate>
          <h1 className="text-black font-bold text-xl md:px-24">Registro</h1>
          <div className="flex flex-col gap-2 md:px-24">
            <label className=" text-black" htmlFor="Nombres">
              Nombres
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ingresar nombres"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="name"
              value={validationType.values.name || ""}
              onChange={(e) => validationType.handleChange(e)}
              onBlur={validationType.handleBlur}
            />
            {validationType.touched.name && validationType.errors.name ? (
              <span className="text-xs text-red-500" type="invalid">
                {validationType.errors.name}
              </span>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Apellidos</label>
            <input
              type="text"
              placeholder="Ingresar apellidos"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="lastname"
              value={validationType.values.lastname || ""}
              onChange={(e) => validationType.handleChange(e)}
              onBlur={validationType.handleBlur}
            />
            {validationType.touched.lastname &&
            validationType.errors.lastname ? (
              <p className="text-xs text-red-500" type="invalid">
                {validationType.errors.lastname}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Correo</label>
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="email"
              value={validationType.values.email || ""}
              onChange={(e) => validationType.handleChange(e)}
              onBlur={validationType.handleBlur}
            />
            {validationType.touched.email && validationType.errors.email ? (
              <p className="text-xs text-red-500" type="invalid">
                {validationType.errors.email}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Numero de telefono</label>
            <input
              type="number"
              placeholder="(+503)"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="phone"
              value={validationType.values.phone || ""}
              onChange={(e) => validationType.handleChange(e)}
              onBlur={validationType.handleBlur}
            />
            {validationType.touched.phone && validationType.errors.phone ? (
              <span className="text-xs text-red-500" type="invalid">
                {validationType.errors.phone}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Tipo de identificacion</label>
            <select
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="id_type"
            >
              <option value="">Seleccionar</option>
              <option value="DUI">DUI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 md:px-24">
            <label className="text-black">Numero de identificacion</label>
            <input
              type="number"
              placeholder="000-0"
              className="w-full border border-gray-300 p-3 rounded-lg"
              name="id_number"
              value={validationType.values.id_number || ""}
              onChange={(e) => validationType.handleChange(e)}
              onBlur={validationType.handleBlur}
            />
            {validationType.touched.id_number &&
            validationType.errors.id_number ? (
              <p className="text-xs text-red-500" type="invalid">
                {validationType.errors.id_number}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 md:px-24 py-10">
            <input
              type="button"
              value="Continuar"
              className="bg-orange-600 hover:bg-orange-500 w-full p-3 rounded-lg text-white font-black text-xl cursor-pointer block"
              onClick={() => setStep(2)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

StepOne.propTypes = {
  setStep: PropTypes.func.isRequired,
  validationType: PropTypes.object.isRequired,
};

export default StepOne;
