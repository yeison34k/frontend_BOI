// src/components/FormCard.js
import React, { useState } from "react";
import "../styles/formcard.css";

function FormCard() {
  const [formValues, setFormValues] = useState({
    businessType: "llc",
    name: "",
    alternateName: "",
    companyPhone: "",
    shares: 1,
    address: "",
    city: "",
    state: "",
    zipcode: "",
    mailingAddress: "",
    mailingCity: "",
    mailingState: "",
    mailingZipcode: "",
    registeredAgent: "ourAddress",
    listingDate: "",
    businessPurpose: "",
    beneficialInfo: false,
    taxIdFiling: false,
    termsAgreement: false,
  });

  const [owners, setOwners] = useState([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      country: "",
      street: "",
      city: "",
      stateProvidence: "",
      zipPostalCode: "",
      identifyingDocumentType: "",
      identifyingDocumentNumber: "",
      issuingJurisdiction: "",
      jurisdictionStateProvidence: "",
      photoId: null,
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleOwnerChange = (index, event) => {
    const { name, value, files } = event.target;
    const newOwners = [...owners];

    if (name === "photoId") {
      newOwners[index].photoId = files[0];
    } else {
      newOwners[index][name] = value;
    }
    setOwners(newOwners);
  };

  const handleAddOwner = () => {
    if (owners.length < 10) {
      setOwners([
        ...owners,
        {
          firstName: "",
          middleName: "",
          lastName: "",
          dateOfBirth: "",
          country: "",
          street: "",
          city: "",
          stateProvidence: "",
          zipPostalCode: "",
          identifyingDocumentType: "",
          identifyingDocumentNumber: "",
          issuingJurisdiction: "",
          jurisdictionStateProvidence: "",
          photoId: null,
        },
      ]);
    }
  };

  const handleRemoveOwner = (index) => {
    if (owners.length > 1) {
      const newOwners = owners.filter((_, i) => i !== index);
      setOwners(newOwners);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 1. Convertir imágenes a Base64
      const ownersWithPhotos = await Promise.all(
        owners.map(async (owner) => {
          if (owner.photoId) {
            const base64String = await toBase64(owner.photoId);
            return { ...owner, photoId: base64String };
          }
          return owner;
        })
      );

      // 2. Crear los payloads de la API
      const companyPayload = {
        companyLegalName: formValues.name,
        alternateName: formValues.alternateName,
        companyPhone: formValues.companyPhone,
        address: {
          street: formValues.address,
          city: formValues.city,
          state: formValues.state,
          zipCode: formValues.zipcode,
        },
        mailingAddress: {
          street: formValues.mailingAddress,
          city: formValues.mailingCity,
          state: formValues.mailingState,
          zipCode: formValues.mailingZipcode,
        },
        taxInformation: {
          taxIdentificationType: formValues.taxIdentificationType,
          taxIdentificationNumber: formValues.taxIdentificationNumber,
          countryJurisdiction: "United States",
        },
        stateOfIncorporation: formValues.state,
      };

      const ownersPayload = ownersWithPhotos.map((owner) => ({
        firstName: owner.firstName,
        middleName: owner.middleName,
        lastName: owner.lastName,
        dateOfBirth: owner.dateOfBirth,
        residenceLocation: "inside",
        country: owner.country,
        street: owner.street,
        city: owner.city,
        stateProvidence: owner.stateProvidence,
        zipPostalCode: owner.zipPostalCode,
        identifyingDocumentType: owner.identifyingDocumentType,
        identifyingDocumentNumber: owner.identifyingDocumentNumber,
        issuingJurisdiction: owner.issuingJurisdiction,
        jurisdictionStateProvidence: owner.jurisdictionStateProvidence,
        photoId: owner.photoId,
        certificationAccepted: formValues.termsAgreement,
        serviceTermsAccepted: formValues.termsAgreement,
        electronicSignature: `${owner.firstName} ${owner.middleName} ${owner.lastName}`,
        reportingCompanyId: "{{company_id}}",
        isActive: true,
      }));

      // 3. Enviar datos a la API (primero la compañía, luego los dueños)
      const companyResponse = await sendDataToApi(
        companyPayload,
        "api/reporting-companies"
      );

      if (companyResponse && companyResponse.reportingCompanyId) {
        const companyId = companyResponse.reportingCompanyId;

        // Enviar cada propietario
        for (const owner of ownersPayload) {
          const ownerData = { ...owner, reportingCompanyId: companyId };
          await sendDataToApi(ownerData, "api/beneficial-owners");
        }
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission. Please try again.");
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });

  const sendDataToApi = async (data, endpoint) => {
    try {
      const response = await fetch(`http://72.60.119.40:3010/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      } else {
        const error = await response.json();
        console.error(`Error submitting to ${endpoint}:`, error);
        alert(`Error: ${error.message || response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("A connection problem occurred. Please try again.");
      return null;
    }
  };

  const stateOptions = (
    <>
      <option value="">Select a State</option>
      <option value="AL">Alabama</option>
      <option value="AK">Alaska</option>
      <option value="AZ">Arizona</option>
      <option value="AR">Arkansas</option>
      <option value="CA">California</option>
      <option value="CO">Colorado</option>
      <option value="CT">Connecticut</option>
      <option value="DE">Delaware</option>
      <option value="FL">Florida</option>
      <option value="GA">Georgia</option>
      <option value="HI">Hawaii</option>
      <option value="ID">Idaho</option>
      <option value="IL">Illinois</option>
      <option value="IN">Indiana</option>
      <option value="IA">Iowa</option>
      <option value="KS">Kansas</option>
      <option value="KY">Kentucky</option>
      <option value="LA">Louisiana</option>
      <option value="ME">Maine</option>
      <option value="MD">Maryland</option>
      <option value="MA">Massachusetts</option>
      <option value="MI">Michigan</option>
      <option value="MN">Minnesota</option>
      <option value="MS">Mississippi</option>
      <option value="MO">Missouri</option>
      <option value="MT">Montana</option>
      <option value="NE">Nebraska</option>
      <option value="NV">Nevada</option>
      <option value="NH">New Hampshire</option>
      <option value="NJ">New Jersey</option>
      <option value="NM">New Mexico</option>
      <option value="NY">New York</option>
      <option value="NC">North Carolina</option>
      <option value="ND">North Dakota</option>
      <option value="OH">Ohio</option>
      <option value="OK">Oklahoma</option>
      <option value="OR">Oregon</option>
      <option value="PA">Pennsylvania</option>
      <option value="RI">Rhode Island</option>
      <option value="SC">South Carolina</option>
      <option value="SD">South Dakota</option>
      <option value="TN">Tennessee</option>
      <option value="TX">Texas</option>
      <option value="UT">Utah</option>
      <option value="VT">Vermont</option>
      <option value="VA">Virginia</option>
      <option value="WA">Washington</option>
      <option value="WV">West Virginia</option>
      <option value="WI">Wisconsin</option>
      <option value="WY">Wyoming</option>
    </>
  );

  return (
    <div className="form-card-container">
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <h2 className="form-section-header">Filling type</h2>
          <div className="form-section-content">
            What Type of Business Would You Like to Start? *
          </div>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="businessType" value="llc" checked={formValues.businessType === "llc"} onChange={handleInputChange} /> LLC
            </label>
            <label className="radio-option">
              <input type="radio" name="businessType" value="corp" checked={formValues.businessType === "corp"} onChange={handleInputChange} />{" "}
              Corporation
            </label>
            <label className="radio-option">
              <input type="radio" name="businessType" value="nonprofit" checked={formValues.businessType === "nonprofit"} onChange={handleInputChange} />{" "}
              Nonprofit Corporation
            </label>
          </div>

          <h2 className="form-section-header">Corporation Information</h2>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Proposed Company Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="alternateName">Alternate Name(s) (DBA) *</label>
              <input
                type="text"
                id="alternateName"
                name="alternateName"
                value={formValues.alternateName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="companyPhone">Company Phone</label>
              <input
                type="tel"
                id="companyPhone"
                name="companyPhone"
                value={formValues.companyPhone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date Incorporated *</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formValues.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shares">Number of Shares of Stock</label>
              <input
                type="number"
                id="shares"
                name="shares"
                value={formValues.shares}
                onChange={handleInputChange}
                placeholder="Enter number of shares"
                min="1"
                step="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="taxIdentificationType">Tax ID Type</label>
              <select
                id="taxIdentificationType"
                name="taxIdentificationType"
                value={formValues.taxIdentificationType}
                onChange={handleInputChange}
              >
                <option value="EIN">EIN</option>
                <option value="SSN">SSN</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="taxIdentificationNumber">Tax ID Number</label>
              <input
                type="text"
                id="taxIdentificationNumber"
                name="taxIdentificationNumber"
                value={formValues.taxIdentificationNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="section-heading">Principal Business Address</div>
          <div className="form2">
            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input type="text" name="address" id="address" value={formValues.address} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" value={formValues.city} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select name="state" id="state" value={formValues.state} onChange={handleInputChange}>{stateOptions}</select>
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" name="zipcode" id="zipcode" value={formValues.zipcode} onChange={handleInputChange} />
            </div>
          </div>

          <div className="section-heading">Mailing Address (if different from principal)</div>
          <div className="form2">
            <div className="form-group">
              <label htmlFor="mailingAddress">Address *</label>
              <input type="text" name="mailingAddress" id="mailingAddress" value={formValues.mailingAddress} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="mailingCity">City</label>
              <input type="text" name="mailingCity" id="mailingCity" value={formValues.mailingCity} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="mailingState">State</label>
              <select name="mailingState" id="mailingState" value={formValues.mailingState} onChange={handleInputChange}>{stateOptions}</select>
            </div>
            <div className="form-group">
              <label htmlFor="mailingZipcode">Zipcode</label>
              <input type="text" name="mailingZipcode" id="mailingZipcode" value={formValues.mailingZipcode} onChange={handleInputChange} />
            </div>
          </div>

          <h2 className="form-section-header">Owner(s)</h2>
          {owners.map((owner, index) => (
            <div key={index} className="form3 owner-section">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={owner.firstName}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={owner.middleName}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={owner.lastName}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={owner.dateOfBirth}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={owner.country}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Street</label>
                <input
                  type="text"
                  name="street"
                  value={owner.street}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={owner.city}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>State/Providence</label>
                <input
                  type="text"
                  name="stateProvidence"
                  value={owner.stateProvidence}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Zip/Postal Code</label>
                <input
                  type="text"
                  name="zipPostalCode"
                  value={owner.zipPostalCode}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Identifying Document Type</label>
                <select
                  name="identifyingDocumentType"
                  value={owner.identifyingDocumentType}
                  onChange={(e) => handleOwnerChange(index, e)}
                >
                  <option value="">Select Document</option>
                  <option value="passport">Passport</option>
                  <option value="driversLicense">Driver's License</option>
                </select>
              </div>
              <div className="form-group">
                <label>Document Number</label>
                <input
                  type="text"
                  name="identifyingDocumentNumber"
                  value={owner.identifyingDocumentNumber}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Issuing Jurisdiction</label>
                <input
                  type="text"
                  name="issuingJurisdiction"
                  value={owner.issuingJurisdiction}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Jurisdiction State/Providence</label>
                <input
                  type="text"
                  name="jurisdictionStateProvidence"
                  value={owner.jurisdictionStateProvidence}
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Upload Photo/ID</label>
                <input
                  type="file"
                  name="photoId"
                  onChange={(e) => handleOwnerChange(index, e)}
                />
              </div>

              {owners.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveOwner(index)}
                  className="remove-owner-button"
                >
                  <span className="remove-icon">×</span> Remove
                </button>
              )}
            </div>
          ))}

          {owners.length < 10 && (
            <button
              type="button"
              onClick={handleAddOwner}
              className="add-owner-button"
            >
              + Add Owner
            </button>
          )}

          <h2 className="form-section-header">Registered Agent</h2>
          <div className="form-section-content">
            Physical Address You Want on Record with the State *
          </div>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="registeredAgent" value="ourAddress" checked={formValues.registeredAgent === "ourAddress"} onChange={handleInputChange} />{" "}
              Our Registered Agent Address
            </label>
            <label className="radio-option">
              <input type="radio" name="registeredAgent" value="yourAddress" checked={formValues.registeredAgent === "yourAddress"} onChange={handleInputChange} />{" "}
              Your Mailing Address
            </label>
            <label className="radio-option">
              <input type="radio" name="registeredAgent" value="specifyAddress" checked={formValues.registeredAgent === "specifyAddress"} onChange={handleInputChange} />{" "}
              Specify Address Corporation
            </label>
          </div>

          <h2 className="form-section-header header-line">Effective Listing Date</h2>
<div className="form-group">
  <label htmlFor="listingDate">Date*</label>
  <input type="date" id="listingDate" name="listingDate" value={formValues.listingDate} onChange={handleInputChange} required />
</div>

<h2 className="form-section-header header-line">Business Purpose</h2>
<div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="businessPurpose"
    placeholder="Write your message here..."
    value={formValues.businessPurpose}
    onChange={handleInputChange}
  />
</div>

          <div className="options">
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="beneficial-info"
                name="beneficialInfo"
                checked={formValues.beneficialInfo}
                onChange={handleInputChange}
              />
              <span className="slider"></span>
              <span>We'll File Your Beneficial Ownership Info For You</span>
            </label>
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="tax-id"
                name="taxIdFiling"
                checked={formValues.taxIdFiling}
                onChange={handleInputChange}
              />
              <span className="slider"></span>
              <span>Tax ID Filing</span>
            </label>
          </div>

          <h2 className="form-section-header">Terms & Conditions</h2>
          <div className="terms-conditions-container">
            <p>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE YOU ACCESS
              OR USE THE SITE. BY ACCESSING OR USING THE SITE, YOU AGREE TO BE
              BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW. IF YOU DO NOT
              WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, PLEASE DO NOT
              FURTHER ACCESS OUR SITE. Use of Content Agreement
            </p>
            <p>
              These Terms and Conditions of Use apply to all visitors to our
              Website. By using our services or accessing our Website, you are
              acknowledging that you have read and understood these Terms and
              agree to be legally bound by them.
            </p>
            <p>
              Unless otherwise indicated in the relevant content, and on the
              condition that you comply with all of your obligations under these
              Terms of Use, you are authorized to view, copy, print, and
              distribute (but not modify) the content on this Website; provided
              that (i) such use is for informational, noncommercial purposes
              only, and (ii) any copy of the content that you make must include
              the copyright notice or other attribution associated with the
              content.
            </p>
            <p>
              You will comply with all applicable laws in accessing and using
              this Website.
            </p>
            <p>
              You acknowledge that we may use your personal information and data
              according to our Privacy Statement and Cookie Notice, which are
              incorporated herein by this reference. You hereby agree to the
              terms of our Privacy Statement and Cookie Notice, including any
              obligations imposed on you therein. Intellectual Property Rights
            </p>
            <p>
              This Website and its contents are protected by copyright,
              trademark, and other laws of the United States and/or foreign
              countries ("Intellectual Property").
            </p>
            <p>
              Except as expressly provided in these Terms and Conditions or as
              expressly authorized in writing, you shall not use our
              Intellectual Property including, in any press release,
              advertisement, or other promotional or marketing material or
              media, whether in written, oral, electronic, visual, or any other
              form. Disclaimers and Limitations of Liability
            </p>
            <p>
              THIS WEBSITE (INCLUDING, WITHOUT LIMITATION, ANY CONTENT OR OTHER
              PART THEREOF) CONTAINS GENERAL INFORMATION ONLY, LIMITED TO
              ASSISTING YOU IN FILING CERTAIN BENEFICIAL OWNERSHIP INFORMATION
              AS REQUIRED BY THE CORPORATE TRANSPARENCY ACT AND WE ARE NOT, BY
              MEANS OF THIS WEBSITE, RENDERING PROFESSIONAL ADVICE OR SERVICES
              ON ANY OTHER MATTER. BEFORE MAKING ANY DECISION OR TAKING ANY
              ACTION THAT MIGHT AFFECT YOUR FINANCES OR BUSINESS, YOU SHOULD
              CONSULT A QUALIFIED PROFESSIONAL ADVISOR.
            </p>
            <p>
              THIS WEBSITE IS PROVIDED AS IS, AND WE MAKE NO EXPRESS OR IMPLIED
              REPRESENTATIONS OR WARRANTIES REGARDING IT. WITHOUT LIMITING THE
              FOREGOING, WE DO NOT WARRANT THAT THIS WEBSITE WILL BE SECURE,
              ERROR-FREE, FREE FROM VIRUSES OR MALICIOUS CODE, OR WILL MEET ANY
              PARTICULAR CRITERIA OF PERFORMANCE OR QUALITY. WE EXPRESSLY
              DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION,
              WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR
              PURPOSE, NON-INFRINGEMENT, COMPATIBILITY, SECURITY, AND ACCURACY.
            </p>
            <p>
              YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK AND YOU ASSUME FULL
              RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR USAGE,
              INCLUDING, WITHOUT LIMITATION, WITH RESPECT TO LOSS OF SERVICE OR
              DATA. WE WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR ANY OTHER
              DAMAGES WHATSOEVER, WHETHER IN AN ACTION OF CONTRACT, STATUTE,
              TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), OR OTHERWISE,
              RELATING TO OR ARISING OUT OF THE USE OF THIS WEBSITE, EVEN IF WE
              KNEW, OR SHOULD HAVE KNOWN, OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              CERTAIN LINKS ON THIS WEBSITE MAY LEAD TO WEBSITES, RESOURCES, OR
              TOOLS MAINTAINED BY THIRD PARTIES OVER WHOM WE HAVE NO CONTROL. WE
              MAKE NO EXPRESS OR IMPLIED REPRESENTATIONS OR WARRANTIES
              WHATSOEVER REGARDING SUCH WEBSITES, RESOURCES, AND TOOLS, AND
              LINKS TO ANY SUCH WEBSITES, RESOURCES, AND TOOLS SHOULD NOT BE
              CONSTRUED AS AN ENDORSEMENT OF THEM OR THEIR CONTENT BY US.
            </p>
            <p>
              THE ABOVE DISCLAIMERS AND LIMITATIONS OF LIABILITY ARE APPLICABLE
              TO THE FULLEST EXTENT PERMITTED BY LAW, WHETHER IN CONTRACT,
              STATUTE, TORT (INCLUDING, WITHOUT LIMITATION, NEGLIGENCE), OR
              OTHERWISE. Additional Terms
            </p>
            <p>
              If any portion of these Terms and Conditions is invalid or
              unenforceable in any jurisdiction, then (i) in that jurisdiction
              it shall be re-construed to the maximum effect permitted by law in
              order to effect its intent as nearly as possible, and the
              remainder of these Terms and Conditions shall remain in full force
              and effect, and (ii) in every other jurisdiction, all of these
              Terms and Conditions shall remain in full force and effect.
            </p>
            <p>
              We may revise these Terms and Conditions at any time in our sole
              discretion by posting such revised Terms and Condition sat the
              Terms and Conditions link (i.e., this webpage that you are
              currently viewing) or elsewhere in this Website. Such revisions
              shall be effective as to you upon posting, unless explicitly
              stated otherwise by us. It is your responsibility to be aware of
              any such revised Terms and Conditions by checking this webpage.
              Your continued use of this Website following changes to these
              Terms and Conditions constitutes your agreement to the revised
              Terms of Use.
            </p>
            <p>
              These Terms shall be governed in all respects by the laws of the
              State of Florida without giving effect to its conflicts of law
              provisions. Both parties submit to the personal jurisdiction of
              and venue in the state and federal courts in the State of Florida,
              in the judicial district that includes Miami-Dade County, Florida.
              The parties further agree that any cause of action arising under
              these Terms shall exclusively be brought in such courts.
            </p>
          </div>

          <div className="agreement">
            <input
              type="checkbox"
              id="agree-checkbox"
              name="termsAgreement"
              checked={formValues.termsAgreement}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agree-checkbox">
              I Agree to the Terms & Conditions
            </label>
          </div>
          <div className="button-container">
            <button type="submit" className="checkout-button">
              Check Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCard;