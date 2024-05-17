import React, { useState } from "react"
// import { FormField } from "../FormField/FormField";
import FormField from '../FormField/FormField';


const ClientInfo = () => {
  const [name, setName] = useState('');
  const [tinNumber, setTinNumber] = useState('')
  const [businessNature, setBusinessNature] = useState('')
  const [businessLocation, setBusinessLocation] = useState('')
  const [registration, setRegistration] = useState('')
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [date, setDate] = useState('')


  const [reprenstativeName, setRepresentativeName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [residence, setResidence] = useState('')
  const [nationality, setNationality] = useState('')
  const [position, setPosition] = useState('')


    return (
        <>
           <div className="mt-6 p-4">
           <h2 className="text-bold text-center">Declaration of Ultimate Beneficialt OwnerShip(UBO)</h2>
           <div className="flex items-center justify-between font-bold">
              <h3>Business Details</h3>
           
             <h3>Legal Representative Details</h3>
     
           </div>
              <div className="grid grid-cols-2 gap-20 p-8 border mt-5">
           
                 
               <form className="grid grid-cols-2 gap-4">
               <div className="mb-6">
                    <FormField
                      label="Name of Legal Entities"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
              


                <div className="mb-6">
                    <FormField
                      label="Incorporation Number/TIN "
                      type="Number"
                      value={tinNumber}
                      onChange={(e) => setTinNumber(e.target.value)}
                    />
                  </div>


                <div className="mb-6">
                    <FormField
                      label="Company Tel Number "
                      type="Number"
                      value={tinNumber}
                      onChange={(e) => setTinNumber(e.target.value)}
                    />
                  </div>


                <div className="mb-6">
                    <FormField
                      label="Nature Of The Business "
                      type="text"
                      value={businessNature}
                      onChange={(e) => setBusinessNature(e.target.value)}
                    />
                  </div>

                <div className="mb-6">
                    <FormField
                      label="Business Location "
                      type="text"
                      value={businessLocation}
                      onChange={(e) => setBusinessLocation(e.target.value)}
                    />
                  </div>

                <div className="mb-6">
                    <FormField
                      label="Registration Date "
                      type="text"
                      value={registration}
                      onChange={(e) => setRegistration(e.target.value)}
                    />
                  </div>

                <div className="mb-6">
                    <FormField
                      label="Country of Origin "
                      type="text"
                      value={countryOfOrigin}
                      onChange={(e) => setCountryOfOrigin(e.target.value)}
                    />
                  </div>

             

                <div className="mb-6">
                    <FormField
                      label="Date of birth "
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  </form>
            


             <form>
          
                <div className="mb-6">
                    <FormField
                      label="Legal Representative Name"
                      type="text"
                      value={reprenstativeName}
                      onChange={(e) => setRepresentativeName(e.target.value)}
                    />
                  </div>
          
                <div className="mb-6">
                    <FormField
                      label="Position"
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>


                <div className="mb-6">
                    <FormField
                      label="Nationality "
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>


                <div className="mb-6">
                    <FormField
                      label="Email Address "
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                <div className="mb-6">
                    <FormField
                      label="Tel "
                      type="Number"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>

                <div className="mb-6">
                    <FormField
                      label="Residence Address"
                      type="text"
                      value={residence}
                      onChange={(e) => setResidence(e.target.value)}
                    />
                  </div>

      
             </form>

             <div className="w-[300px] mx-auto bg-black rounded-2xl h-12  p-4 flex items-center justify-center">
                  <button  type="button" className="text-white w-full">Next</button>
        </div>
        
              </div>
            
            </div>
        </>
    )

}

export default ClientInfo