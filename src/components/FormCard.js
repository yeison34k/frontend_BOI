// src/components/FormCard.js
import React from "react";
import "../styles/formcard.css";

function FormCard() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const apiPayload = {
      companyLegalName: formValues.name,
      alternateName: formValues.name,
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

      owners: [
        {
          ownerName: formValues.ownerName,
          title: formValues.ownerTitle,
          address: {
            street: formValues.ownerAddress,
            city: formValues.ownerCity,
            state: formValues.ownerState,
            zipCode: formValues.ownerZipcode,
          },
          photoId: formValues.ownerPhoto,
        },
      ],
      registeredAgent: formValues.registeredAgent,
      effectiveListingDate: formValues.listingDate,
      businessPurpose: formValues.businessPurpose,
      beneficialInfo: formValues.beneficialInfo === "on",
      taxIdFiling: formValues.taxIdFiling === "on",
      termsAgreement: formValues.termsAgreement === "on",
    };

    sendDataToApi(apiPayload);
  };

  const sendDataToApi = async (data) => {
    try {
      const response = await fetch(
        "http://72.60.119.40:3010/api/reporting-companies",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Data sent successfully:", result);
        alert("Form submitted successfully!");
      } else {
        const error = await response.json();
        console.error("Error submitting data:", error);
        alert(`Error: ${error.message || response.statusText}`);
      }
    } catch (error) {
      console.error("Connection error:", error);
      alert("A connection problem occurred. Please try again.");
    }
  };

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
              <input type="radio" name="businessType" value="llc" /> LLC
            </label>
            <label className="radio-option">
              <input type="radio" name="businessType" value="corp" />{" "}
              Corporation
            </label>
            <label className="radio-option">
              <input type="radio" name="businessType" value="nonprofit" />{" "}
              Nonprofit Corporation
            </label>
          </div>

          <h2 className="form-section-header">Corporation Information</h2>
          <div className="form">
            {" "}
            <div className="form-group">
              <label htmlFor="name">Proposed Company Name</label>
              <input
                type="text"
                id="name"
                name="name"
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
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerName">Owner Name *</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date Incorporated *</label>
              <input type="date" id="dob" name="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="shares">Number of Shares of Stock</label>
              <input
                type="number"
                id="shares"
                name="shares"
                placeholder="Enter number of shares"
                min="1"
                step="1"
              />
            </div>
          </div>

          <div className="section-heading">Principal Business Address</div>
          <div className="form2">
            {" "}
            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input type="text" name="address" id="address" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" name="state" id="state" />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zipcode</label>
              <input type="text" name="zipcode" id="zipcode" />
            </div>
          </div>
          <div className="section-heading">
            Mailing Address (if different from principal)
          </div>
          <div className="form2">
            {" "}
            <div className="form-group">
              <label htmlFor="mailingAddress">Address *</label>
              <input type="text" name="mailingAddress" id="mailingAddress" />
            </div>
            <div className="form-group">
              <label htmlFor="mailingCity">City</label>
              <input type="text" name="mailingCity" id="mailingCity" />
            </div>
            <div className="form-group">
              <label htmlFor="mailingState">State</label>
              <input type="text" name="mailingState" id="mailingState" />
            </div>
            <div className="form-group">
              <label htmlFor="mailingZipcode">Zipcode</label>
              <input type="text" name="mailingZipcode" id="mailingZipcode" />
            </div>
          </div>

          <h2 className="form-section-header">Owner(s)</h2>
          <div className="form3">
            {" "}
            <div className="form-group">
              <label>Owner Name</label>
              <input type="text" name="ownerName" />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="ownerTitle" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="ownerAddress" />
            </div>
            <div className="form-group">
              <label>City</label>
              <input type="text" name="ownerCity" />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="ownerState" />
            </div>
            <div className="form-group">
              <label>Zipcode</label>
              <input type="text" name="ownerZipcode" />
            </div>
            <div className="form-group">
              <label>Upload Photo/ID</label>
              <input type="file" name="ownerPhoto" />{" "}
            </div>
          </div>

          <h2 className="form-section-header">Registered Agent</h2>
          <div className="form-section-content">
            Physical Address You Want on Record with the State *
          </div>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="registeredAgent" value="ourAddress" />{" "}
              Our Registered Agent Address
            </label>
            <label className="radio-option">
              <input type="radio" name="registeredAgent" value="yourAddress" />{" "}
              Your Mailing Address
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="registeredAgent"
                value="specifyAddress"
              />{" "}
              Specify Address Corporation
            </label>
          </div>

          <h2 className="form-section-header">Effective Listing Date</h2>
          <div className="form-group">
            <label htmlFor="listingDate">Date*</label>
            <input type="date" id="listingDate" name="listingDate" required />
          </div>

          <h2 className="form-section-header header-line">Business Purpose</h2>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="businessPurpose"
              placeholder="Write your message here..."
            />
          </div>

          <div className="options">
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="beneficial-info"
                name="beneficialInfo"
              />
              <span className="slider"></span>
              <span>We'll File Your Beneficial Ownership Info For You</span>
            </label>
            <label className="toggle-switch">
              <input type="checkbox" id="tax-id" name="taxIdFiling" />
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
              required
            />
            <label htmlFor="agree-checkbox">
              I Agree to the Terms & Conditions
            </label>
          </div>

          <button type="submit" className="checkout-button">
            Check Out
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCard;
