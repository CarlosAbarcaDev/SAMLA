import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepOne from "./steps/Stepone";
import StepTwo from "./steps/Steptwo";
import StepThree from "./steps/Stepthree";

const FormPage = () => {
  const [step, setStep] = useState(1);

  const validationType = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    initialValues: {
      name: "",
      lastname: "",
      phone: "",
      email: "",
      id_number: "",
      address:'',
      salary:''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Nombre requerido"),
      lastname: Yup.string().required("Apellido requerido"),
      phone: Yup.string().required("Telefono requerido"),
      email: Yup.string().required("email requerido"),
      id_number: Yup.string().required("Numero de documento requerido"),
      address: Yup.string().required("Direccion requerida"),
      salary: Yup.string().required("Salario requerido"),
     
    }),
    onSubmit: (values) => {
      let data = {};

      console.log(data, values);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validationType.handleSubmit();
        return false;
      }}
      className="custom-validation"
    >
      <div className="flex flex-col md:flex-row h-screen">
        {step === 1 ? (
          <StepOne setStep={setStep} validationType={validationType} />
        ) : step === 2 ? (
          <StepTwo setStep={setStep} validationType={validationType} />
        ) : (
          <StepThree setStep={setStep} />
        )}
      </div>
    </form>
  );
};

export default FormPage;
