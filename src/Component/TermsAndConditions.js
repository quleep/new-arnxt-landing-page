import React, { useEffect } from "react";

function TermsAndConditions() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-5 p-5">
      <div className="container text-start">
        {/* heading start */}
        <div className="">
          <h3 className="text-center">Terms and Conditions</h3>
        </div>
        {/* heading end */}
        {/* description start */}
        <div name="description" className="my-5 container-fluid">
          <b>
            Use of this site is provided by Demos subject to the following Terms
            and Conditions:
          </b>
          <ol className="ar-grey-font">
            <li>
              Your use constitutes acceptance of these Terms and Conditions as
              at the date of your first use of the site.
            </li>
            <li>
              Demos reserves the rights to change these Terms and Conditions at
              any time by posting changes online. Your continued use of this
              site after changes are posted constitutes your acceptance of this
              agreement as modified.
            </li>
            <li>
              You agree to use this site only for lawful purposes, and in a
              manner which does not infringe the rights, or restrict, or inhibit
              the use and enjoyment of the site by any third party.
            </li>
            <li>
              This site and the information, names, images, pictures, logos
              regarding or relating to Demos are provided “as is” without any
              representation or endorsement made and without warranty of any
              kind whether express or implied. In no event will Demos be liable
              for any damages including, without limitation, indirect or
              consequential damages, or any damages whatsoever arising from the
              use or in connection with such use or loss of use of the site,
              whether in contract or in negligence.
            </li>
            <li>
              Demos does not warrant that the functions contained in the
              material contained in this site will be uninterrupted or error
              free, that defects will be corrected, or that this site or the
              server that makes it available are free of viruses or bugs or
              represents the full functionality, accuracy and reliability of the
              materials.
            </li>
            <li>
              Copyright restrictions: please refer to our Creative Commons
              license terms governing the use of material on this site.
            </li>
            <li>
              Demos takes no responsibility for the content of external Internet
              Sites.
            </li>
            <li>
              Any communication or material that you transmit to, or post on,
              any public area of the site including any data, questions,
              comments, suggestions, or the like, is, and will be treated as,
              non-confidential and non-proprietary information.
            </li>
            <li>
              If there is any conflict between these Terms and Conditions and
              rules and/or specific terms of use appearing on this site relating
              to specific material then the latter shall prevail.
            </li>
            <li>
              These terms and conditions shall be governed and construed in
              accordance with the laws of England and Wales. Any disputes shall
              be subject to the exclusive jurisdiction of the Courts of England
              and Wales.
            </li>
            <li>
              If these Terms and Conditions are not accepted in full, the use of
              this site must be terminated immediately.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
