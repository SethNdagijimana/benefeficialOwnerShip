import { useEffect, useRef, useState } from "react";
import FormField from "../FormField/FormField";
import OwnerInfo from "../ownerInfo/OwnerInfo";

const ShareholdersInfo = () => {
    const [formData, setFormData] = useState([
        {
            name: "",
            natureOfBusiness: "",
            shares: "",
            idNumber: "",
            phoneNumber: "",
            residence: ""
        },
        {
            name: "",
            natureOfBusiness: "",
            shares: "",
            idNumber: "",
            phoneNumber: "",
            residence: ""
        },
        {
            name: "",
            natureOfBusiness: "",
            shares: "",
            idNumber: "",
            phoneNumber: "",
            residence: ""
        },
        {
            name: "",
            natureOfBusiness: "",
            shares: "",
            idNumber: "",
            phoneNumber: "",
            residence: ""
        }
        
    ]);

    const handleChange = (index, fieldName, value) => {
        setFormData(prevState => {
            const updatedFormData = [...prevState];
            updatedFormData[index] = {
                ...updatedFormData[index],
                [fieldName]: value
            };
            return updatedFormData;
        });
    };

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
    
    const isFormEmpty = formData.some(data => Object.values(data).some(value => value === ""));

    const handleSaveInformation = () => {
        
        console.log("Form data saved:", formData);
        
    };

    return(
        <>
            <div className="space-y-8">
                <p>Details Beneficial Owners(UBOs)</p>
                <h3 className="font-bold underline">SIGNIFICANT SHAREHOLDERS:</h3>
            </div>

            <div className="mt-8">
                <h4>I/We hereby declare that the above-named company is ultimately owned by the following listed entities/Individual: </h4>
            </div>

            <div className="mt-1">
                <form className="border-2 border-black" onSubmit={handleSaveInformation}>
                    <table className="table-auto w-full border-collapse border border-black">
                        <thead>
                            <tr>
                                <th className="border border-black p-2">No</th>
                                <th className="border border-black p-2">Company Name / Individual Name</th>
                                <th className="border border-black p-2">Nature of Business</th>
                                <th className="border border-black p-2">% of shares</th>
                                <th className="border border-black p-2">IncorporationNumber/ID or Passport Number</th>
                                <th className="border border-black p-2">Company/individual Contact  phone number</th>
                                <th className="border border-black p-2">Residence Address(Cell,Sector,Distric,Province)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((data, index) => (
                                <tr key={index}>
                                    <td className="border border-black p-2">{index + 1}</td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................" type="text" value={data.name} onChange={(e) => handleChange(index, 'name', e.target.value)} />
                                    </td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................" type="text" value={data.natureOfBusiness} onChange={(e) => handleChange(index, 'natureOfBusiness', e.target.value)} />
                                    </td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................%" type="number" value={data.shares} onChange={(e) => handleChange(index, 'shares', e.target.value)} />
                                    </td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................" type="number" value={data.idNumber} onChange={(e) => handleChange(index, 'idNumber', e.target.value)} />
                                    </td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................+250" type="number" value={data.phoneNumber} onChange={(e) => handleChange(index, 'phoneNumber', e.target.value)} />
                                    </td>
                                    <td className="border border-black p-2">
                                        <FormField placeholder="................" type="text" value={data.residence} onChange={(e) => handleChange(index, 'residence', e.target.value)} />
                                    </td>

                                    
                                </tr>
                            ))}

                            


                        </tbody>
                    </table>
                </form>

                <div className="mt-8 flex items-center gap-4">
                    <h4>If the UBO is a company, establish the last natural person who is ultimate beneficial owner  
                    </h4>

                    <div ref={shareholdersInfoRef}>
                    <button className="bg-[#014D99] text-white h-8 text-center p-1 rounded-2xl" onClick={handleNext}>Click Here to establish the last natural Person</button>
                    </div>
                </div>

                {showNextComponent && (
        <div className="mt-6 transition-opacity duration-300 ease-in-out opacity-100">
          <OwnerInfo />
        </div>
      )}
           <div className="w-[300px] mx-auto bg-[#014D99] rounded-2xl h-12 p-4 flex items-center justify-center mt-8" >
                <button type="button" className={`text-white w-full ${isFormEmpty ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormEmpty}>SAVE</button>
            </div>
            </div>
        </>
    );
};

export default ShareholdersInfo;
