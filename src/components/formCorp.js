// formCorp.js
import React, { useState } from "react";

const FormCorp = () => {
  const [formData, setFormData] = useState({
    companyLegalName: "",
    tradeName: "",
    feiEin: "",
    documentNumber: "",
    companyEmail: "",
    companyPhone: "",
    companyStreet: "",
    companyCity: "",
    companyState: "",
    companyZip: "",
    mailingStreet: "",
    mailingCity: "",
    mailingState: "",
    mailingZip: "",
    agentFullName: "",
    agentStreet: "",
    agentCity: "",
    agentState: "",
    agentZip: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("Debe aceptar los términos y condiciones para continuar.");
      return;
    }
    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4">FL Annual Renewal Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        
        {/* Información de la empresa */}
        <h3 className="text-xl font-semibold col-span-1">Información de la Empresa</h3>
        <input type="text" name="companyLegalName" placeholder="Nombre Legal de la Compañía" value={formData.companyLegalName} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="tradeName" placeholder="Nombre Comercial / DBA" value={formData.tradeName} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="feiEin" placeholder="FEI / EIN" value={formData.feiEin} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="documentNumber" placeholder="Número de Documento" value={formData.documentNumber} onChange={handleChange} className="p-2 border rounded" required />
        <input type="email" name="companyEmail" placeholder="Correo de la Empresa" value={formData.companyEmail} onChange={handleChange} className="p-2 border rounded" required />
        <input type="tel" name="companyPhone" placeholder="Teléfono de la Empresa" value={formData.companyPhone} onChange={handleChange} className="p-2 border rounded" required />

        {/* Dirección física */}
        <input type="text" name="companyStreet" placeholder="Calle" value={formData.companyStreet} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="companyCity" placeholder="Ciudad" value={formData.companyCity} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="companyState" placeholder="Estado" value={formData.companyState} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="companyZip" placeholder="Código Postal" value={formData.companyZip} onChange={handleChange} className="p-2 border rounded" required />

        {/* Dirección de correo */}
        <h3 className="text-xl font-semibold col-span-1">Dirección Postal</h3>
        <input type="text" name="mailingStreet" placeholder="Calle" value={formData.mailingStreet} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="mailingCity" placeholder="Ciudad" value={formData.mailingCity} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="mailingState" placeholder="Estado" value={formData.mailingState} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="mailingZip" placeholder="Código Postal" value={formData.mailingZip} onChange={handleChange} className="p-2 border rounded" />

        {/* Agente Registrado */}
        <h3 className="text-xl font-semibold col-span-1">Agente Registrado</h3>
        <input type="text" name="agentFullName" placeholder="Nombre Completo" value={formData.agentFullName} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="agentStreet" placeholder="Calle" value={formData.agentStreet} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="agentCity" placeholder="Ciudad" value={formData.agentCity} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="agentState" placeholder="Estado" value={formData.agentState} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="agentZip" placeholder="Código Postal" value={formData.agentZip} onChange={handleChange} className="p-2 border rounded" required />

        {/* Información del propietario */}
        <h3 className="text-xl font-semibold col-span-1">Propietario(s)</h3>
        <input type="text" name="ownerName" placeholder="Nombre del Propietario" value={formData.ownerName} onChange={handleChange} className="p-2 border rounded" />
        <input type="email" name="ownerEmail" placeholder="Correo del Propietario" value={formData.ownerEmail} onChange={handleChange} className="p-2 border rounded" />
        <input type="tel" name="ownerPhone" placeholder="Teléfono del Propietario" value={formData.ownerPhone} onChange={handleChange} className="p-2 border rounded" />

        {/* Aviso legal y términos */}
        <p className="text-sm text-gray-600 mt-4">
          Al enviar este formulario, certifico que toda la información proporcionada es
          precisa y completa a mi leal saber y entender. Reconozco que mi firma electrónica
          tiene el mismo efecto legal que una firma manuscrita y autorizo a Professional
          Corporate Filings a procesar los reportes y documentos en nombre de mi compañía.
        </p>

        <div className="flex items-center">
          <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} className="mr-2" />
          <label>Acepto los términos y condiciones</label>
        </div>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Enviar Formulario
        </button>
      </form>
    </div>
  );
};

export default FormCorp;
