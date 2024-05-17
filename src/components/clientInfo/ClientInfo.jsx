import React, { useEffect, useRef, useState } from "react";
import FormField from '../FormField/FormField';
import ShareholdersInfo from "../shareholdersInfo/ShareholdersInfo";

const ClientInfo = () => {
  // State for business details
  const [businessDetails, setBusinessDetails] = useState({
    name: '',
    tinNumber: '',
    businessNature: '',
    businessLocation: '',
    registration: '',
    countryOfOrigin: '',
    date: ''
  });

  // State for legal representative details
  const [legalRepDetails, setLegalRepDetails] = useState({
    representativeName: '',
    email: '',
    tel: '',
    residence: '',
    nationality: '',
    position: ''
  });

  const [showNextComponent, setShowNextComponent] = useState(false);
  const shareholdersInfoRef = useRef(null);

  useEffect(() => {
    if (showNextComponent && shareholdersInfoRef.current) {
      shareholdersInfoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showNextComponent]);

  const handleNext = () => {
    setShowNextComponent(true);
  };

  const handleBusinessDetailsChange = (fieldName, value) => {
    setBusinessDetails(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  const handleLegalRepDetailsChange = (fieldName, value) => {
    setLegalRepDetails(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", businessDetails, legalRepDetails);
   
  };



  const businessLabels = [
    "Name of the business", "TIN Number", "Business Nature", "Business Location",
    "Registration", "Country of Origin", "Date"
  ];

  const legalRepLabels = [
    "Representative Name", "Email", "Tel", "Residence",
    "Nationality", "Position"
  ];

  return (
    <div className="mt-6 p-4">
      <h2 className="font-bold text-center">Declaration of Ultimate Beneficial Ownership (UBO)</h2>
      <div className="flex items-center justify-between font-bold">
        <h3 className="text-[#014D99]">Business Details</h3>
        <h3 className="text-[#014D99]">Legal Representative Details</h3>
      </div>
      <div className="grid grid-cols-2 gap-20 p-8 border mt-5">

        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {businessLabels.map((label, index) => (
            <div className="mb-6" key={index}>
              <FormField
                label={label}
                type={index === 6 ? 'date'  : label === "TIN Number" ? "number" : "text"}
                value={businessDetails[Object.keys(businessDetails)[index]]}
                onChange={(e) => handleBusinessDetailsChange(Object.keys(businessDetails)[index], e.target.value)}
              />
            </div>
          ))}
        </form>


        <form onSubmit={handleSubmit}>
          {legalRepLabels.map((label, index) => (
            <div className="mb-6" key={index}>
              <FormField
                label={label}
                type={label === 'Email' ? 'email' : label === 'Tel' ? 'number' : 'text'}
                value={legalRepDetails[Object.keys(legalRepDetails)[index]]}
                onChange={(e) => handleLegalRepDetailsChange(Object.keys(legalRepDetails)[index], e.target.value)}
              />
            </div>
          ))}
        </form>
      </div>
      <div className="w-[300px] mx-auto bg-[#014D99] rounded-2xl h-12 p-4 flex items-center justify-center mt-8" ref={shareholdersInfoRef}>
        <button type="button" className="text-white w-full" onClick={handleNext}>Next</button>
      </div>

      {showNextComponent && (
        <div className="mt-6 transition-opacity duration-300 ease-in-out opacity-100">
          <ShareholdersInfo />
        </div>
      )}
    </div>

    
  );
};

export default ClientInfo;
