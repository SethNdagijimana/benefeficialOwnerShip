import { useState } from "react";
import FormField from "../FormField/FormField"

const OwnerInfo = () => {

    const [formData, setFormData] = useState([
        {
            First_name: "",
            middle_name: "",
            Last_name: "",
            Company_name: "",
            Nationality: "",
            Identification_document_no: "",
            Residential: "",
            Email_address: "",
            Position_in_legal_company: "",
            percentages_Of_shares_And_Voting_Rights: "",
        },
        {
            First_name: "",
            middle_name: "",
            Last_name: "",
            Company_name: "",
            Nationality: "",
            Identification_document_no: "",
            Residential: "",
            Email_address: "",
            Position_in_legal_company: "",
            percentages_Of_shares_And_Voting_Rights: "",
        },
        {
            First_name: "",
            middle_name: "",
            Last_name: "",
            Company_name: "",
            Nationality: "",
            Identification_document_no: "",
            Residential: "",
            Email_address: "",
            Position_in_legal_company: "",
            percentages_Of_shares_And_Voting_Rights: "",
        },
        {
            First_name: "",
            middle_name: "",
            Last_name: "",
            Company_name: "",
            Nationality: "",
            Identification_document_no: "",
            Residential: "",
            Email_address: "",
            Position_in_legal_company: "",
            percentages_Of_shares_And_Voting_Rights: "",
        },
        {
            First_name: "",
            middle_name: "",
            Last_name: "",
            Company_name: "",
            Nationality: "",
            Identification_document_no: "",
            Residential: "",
            Email_address: "",
            Position_in_legal_company: "",
            percentages_Of_shares_And_Voting_Rights: "",
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

    const handleSaveInformation = () => {
        
        console.log("Form data saved:", formData);
        
    };

    return (
        <>
            <div className="space-y-8">
                <h3 className="font-bold underline">INDIVIDUALS</h3>
            </div>

            <div className="mt-8">
                <h4>I / We hereby declare that the above named company is ultimately owned by the following listed individuals: </h4>
            </div>

            <div className="mt-1">
                <form className="border-2 border-black" onSubmit={handleSaveInformation}>
                    <table className="table-auto w-full border-collapse border border-black">
                        <thead>
                            <tr>
                                <th className="border border-black p-2">
                                    Details
                                </th>
                                {formData.map((_, index) => (
                                    <th key={index} className="border border-black p-2">Individual {String.fromCharCode(65 + index)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(formData[0]).map((fieldName, rowIndex) => (
                                <tr key={rowIndex} >
                                    <td className="border border-black p-2 font-bold">
                                        {fieldName.replace(/_/g, ' ')}
                                        {fieldName === 'Email_address' ? <input type="email" hidden/> : <input type="text"  hidden/>}
                                        </td>
                                    {formData.map((data, index) => (
                                        <td key={index} className="border border-black p-2">
                                            <FormField
                                                value={data[fieldName]}
                                                onChange={(e) => handleChange(index, fieldName, e.target.value)}
                                                
                                                
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>

            <h3 className="text-[18px] font-bold mt-4">In case UBO is more than 5 individuals, provide a separate attachment.</h3>
        </>
    );
};

export default OwnerInfo;
