import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '../Layout';
import { PhotoIcon } from '@heroicons/react/24/solid'

const FormularioFicha = () => {


const validationSchema = Yup.object().shape({
    Nombre: Yup.string().required('El nombre es obligatorio'),
    Apellido: Yup.string().required('El apellido es obligatorio'),
    Cedula: Yup.string(),
    Telefono: Yup.string(),
    Requerimiento: Yup.string(),
    Observaciones: Yup.string(),
    'image-photo': Yup.string(),
  });

  const initialValues = {
    Nombre: '',
    Apellido: '',
    Cedula: '',
    Telefono: '',
    Requerimiento: '',
    Observaciones: '',
    'image-photo': '',
  }


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };


  return (

    // Envolver con el layout


    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Nombre"
            className="block text-gray-700 font-bold mb-2"
          >
            Nombre
          </label>
          <Field
            type="text"
            name="Nombre"
            id="Nombre"
            placeholder="Ingrese su nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Nombre"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Apellido"
            className="block text-gray-700 font-bold mb-2"
          >
            Apellido
          </label>
          <Field
            type="text"
            name="Apellido"
            id="Apellido"
            placeholder="Ingrese su apellido"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Apellido"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Cedula"
            className="block text-gray-700 font-bold mb-2"
          >
            Cédula
          </label>
          <Field
            type="text"
            name="Cedula"
            id="Cedula"
            placeholder="Ingrese su cédula"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Cedula"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Telefono"
            className="block text-gray-700 font-bold mb-2"
          >
            Teléfono
          </label>
          <Field
            type="text"
            name="Telefono"
            id="Telefono"
            placeholder="Ingrese su teléfono"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Telefono"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Requerimiento"
            className="block text-gray-700 font-bold mb-2"
          >
            Requerimiento
          </label>
          <Field
            type="text"
            name="Requerimiento"
            id="Requerimiento"
            placeholder="Ingrese su requerimiento"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Requerimiento"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="mb-4 sm:w-7/8 md:w-11/12">
          <label
            htmlFor="Observaciones"
            className="block text-gray-700 font-bold mb-2"
          >
            Observaciones
          </label>
          <Field
            type="text"
            name="Observaciones"
            id="Observaciones"
            placeholder="Ingrese sus observaciones"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <ErrorMessage
            name="Observaciones"
            component="div"
            className="text-red-500 text-xs italic"
          />
        </div>
        {/* <div className="mb-4 sm:w-1/2 md:w-1/3"> asi lo hizo  */ }
        <div className="mb-4 sm:w-7/8 md:w-11/12">
  <label
    htmlFor="image-photo"
    className="block text-gray-700 font-bold mb-2"
  >
    Imagen photo
  </label>
  <div className="relative ">
    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <PhotoIcon className='h-6 w-6 bg-white'/>
            
    </span>
    <Field
      type="file"
      name="image-photo"
      id="image-photo"
      accept="image/*"
      className=" shadow appearance-none border rounded w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
  <ErrorMessage
    name="image-photo"
    component="div"
    className="text-red-500 text-xs italic"
  />
</div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>


  )
}

export default FormularioFicha






