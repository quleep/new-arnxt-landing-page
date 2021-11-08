import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Privacypolicy() {
  // scrolled to top when redirected from a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ScrollToTop = ()=>{
    
  }

  return (
    <div>
      <div id="privacy" className="section section-padding offwhite-bg">
        <div className="container text-left">
          {/* heading start */}
          <div className="">
            <h3 className="">Privacy Policy</h3>
          </div>
          {/* heading end */}
          {/* description start */}
          <div name="description">
            <p className="section-subtext">
              We know that you care how information about you is used and
              shared, and we appreciate your trust that we will do so carefully
              and sensibly. This Privacy Notice describes how Quleep Private
              Limited (collectively "Quleep") collect and process your personal
              information through Quleep websites, devices, products, services,
              online marketplace and applications that reference this Privacy
              Notice (together "Quleep Services").
            </p>
            <p className="section-subtext">
              By using Quleep Services you agree to our use of your personal
              information (including sensitive personal information) in
              accordance with this Privacy Notice, as may be amended from time
              to time by us at our discretion. You also agree and consent to us
              collecting, storing, processing, transferring, and sharing your
              personal information (including sensitive personal information)
              with third parties or service providers for the purposes set out
              in this Privacy Notice.
            </p>
            <p className="section-subtext">
              Personal information subject to this Privacy Notice will be
              collected and retained by Quleep, with a registered office at
              2108, Jaypee Aman, Sector 151, Noida – 201301 Uttar Pradesh India.
            </p>
          </div>
          {/* description end */}
          {/* navigation start */}
          <div id="privacy-navigation">
            <ul>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy1"
                  className="link-color"
                >
                  What Personal Information About Customers Does Quleep Collect?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy2"
                  className="link-color"
                >
                  For What Purposes Does Quleep Use Your Personal Information?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy3"
                  className="link-color"
                >
                  What About Cookies and Other Identifiers?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy4"
                  className="link-color"
                >
                  Does Quleep Share Your Personal Information?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy5"
                  className="link-color"
                >
                  How Secure is Information About Me?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy6"
                  className="link-color"
                >
                  What About Advertising?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy7"
                  className="link-color"
                >
                  What Information can I Access?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy8"
                  className="link-color"
                >
                  What Choices Do I Have?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy9"
                  className="link-color"
                >
                  Are Children Allowed to Use Quleep Services?
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy10"
                  className="link-color"
                >
                  Conditions of Use, Notices, and Revisions
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy11"
                  className="link-color"
                >
                  Related Practices and Information
                </Link>
              </li>
              <li>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-90}
                  to="policy12"
                  className="link-color"
                >
                  Examples of Information Collected
                </Link>
              </li>
            </ul>
            <div className="">
              <div onClick={()=>ScrollToTop}>
                Back to top
              </div>
            </div>
          </div>
          {/* navigation end */}
          {/* main section start */}
          <div name="policy1">
            <h3 className="">
              What Personal Information About Customers Does Quleep Collect?
            </h3>
            <div className="">
              <p>
                We collect your personal information in order to provide and
                continually improve our products and services.
              </p>
              <p>Here are the types of personal information we collect:</p>
              <p>
                <b>Information You Give Us:</b> We receive and store any
                information you provide in relation to Quleep Services. Click
                <a href="/">here</a> to see examples of what we collect. You can
                choose not to provide certain information, but then you might
                not be able to take advantage of many of our Quleep Services.
              </p>
              <p>
                <b>Automatic Information:</b> We automatically collect and store
                certain types of information about your use of Quleep Services,
                including information about your interaction with content and
                services available through Quleep Services. Like many websites,
                we use cookies and other unique identifiers, and we obtain
                certain types of information when your web browser or device
                accesses Quleep Services and other content served by or on
                behalf of Quleep on other websites. Click <a href="/">here</a>{" "}
                to see examples of what we collect.
              </p>
              <p>
                <b>Information from Other Sources:</b> We might receive
                information about you from other sources, such as updated
                delivery and address information from our carriers, which we use
                to correct our records and deliver your next purchase more
                easily. Click <a href="/">here</a> to see additional examples of
                the information we receive
              </p>
              <div className="">
                <div onClick={()=>ScrollToTop}>
                  Back to top
                </div>
              </div>
            </div>
          </div>

          <div name="policy2" className="">
            <h3 className="">
              For What Purposes Does Quleep Use Your Personal Information?
            </h3>
            <div className="sectin-subtext">
              We use your personal information to operate, provide, develop, and
              improve the products and services that we offer our customers.
              These purposes include:{" "}
            </div>
            <div className="">
              <ul>
                <li>
                  <b>Purchase and delivery of products and services.</b>We use
                  your personal information to take and fulfill orders, deliver
                  products and services, process payments, and communicate with
                  you about orders, products and services, and promotional
                  offers.
                </li>
                <li>
                  <b>Provide, troubleshoot, and improve Quleep Services. </b>We
                  use your personal information to provide functionality,
                  analyze performance, fix errors, and improve the usability and
                  effectiveness of the Quleep Services.
                </li>
                <li>
                  <b></b>Recommendations and personalization. We use your
                  personal information to recommend features, products, and
                  services that might be of interest to you, identify your
                  preferences, and personalize your experience with Quleep
                  Services.
                </li>
                <li>
                  <b>Provide voice, image and camera services. </b>When you use
                  our voice, image and camera services, we use your voice input,
                  images, videos, and other personal information to respond to
                  your requests, provide the requested service to you, and
                  improve our services. For more information about Alexa voice
                  services, click <a href="/">here</a>.
                </li>
                <li>
                  <b>Comply with legal obligations. </b>In certain cases, we
                  collect and use your personal information to comply with laws.
                  For instance, we collect from sellers information regarding
                  place of establishment and bank account information for
                  identity verification and other purposes.
                </li>
                <li>
                  <b>Communicate with you. </b>We use your personal information
                  to communicate with you in relation to Quleep Services via
                  different channels (e.g., by phone, e-mail, chat).
                </li>
                <li>
                  <b>Advertising. </b>We use your personal information to
                  display interest-based ads for features, products, and
                  services that might be of interest to you. We do not use
                  information that personally identifies you to display
                  interest-based ads. To learn more, please read our
                  <a href="/">Interest-Based Ads</a> notice.
                </li>
                <li>
                  <b>Fraud Prevention and Credit Risks. </b>We use personal
                  information to prevent and detect fraud and abuse in order to
                  protect the security of our customers, Quleep, and others. We
                  may also use scoring methods to assess and manage credit
                  risks.
                </li>
              </ul>
            </div>
          </div>

          <div name="policy3" className="">
            <h3 className="">What About Cookies and Other Identifiers?</h3>
            <div className="">
              <ul>
                <li>
                  <b></b>To enable our systems to recognize your browser or
                  device and to provide and improve Quleep Services, we use
                  cookies and other identifiers. For more information about
                  cookies and how we use them, please read our{" "}
                  <a href="/">Cookies Notice</a>.
                </li>
              </ul>
            </div>
          </div>
          <div name="policy4" className="">
            <h3 className="">Does Quleep Share Your Personal Information? </h3>
            <div className="sectin-subtext">
              Information about our customers is an important part of our
              business and we are not in the business of selling our customers’
              personal information to others. We share customers’ personal
              information only as described below and with Quleep.com, Inc. and
              subsidiaries that Quleep.com, Inc. controls that either are
              subject to this Privacy Notice or follow practices at least as
              protective as those described in this Privacy Notice.
            </div>
            <div className="">
              <ul>
                <li>
                  <b>Transactions involving Third Parties:</b>We make available
                  to you services, products, applications, or skills provided by
                  third parties for use on or through Quleep Services. For
                  example, the products you order through our marketplace are
                  from third parties, you can download applications from
                  third-party application providers from our App Store, and
                  enable third-party skills through our Alexa services. We also
                  offer services or sell product lines jointly with third-party
                  businesses, such as sellers on the marketplace, restaurants
                  registered on Quleep.in, merchants providing mobile recharges
                  and bill-payment assistance. You can tell when a third party
                  is involved in your transactions, and we share customers’
                  personal information related to those transactions with that
                  third party.
                </li>
                <li>
                  <b>Third-Party Service Providers: </b>We employ other
                  companies and individuals to perform functions on our behalf.
                  Examples include fulfilling orders for products or services,
                  delivering packages, sending postal mail and e-mail, removing
                  repetitive information from customer lists, analyzing data,
                  providing marketing assistance, providing search results and
                  links (including paid listings and links), processing
                  payments, transmitting content, scoring, assessing and
                  managing credit risk, and providing customer service. These
                  third-party service providers have access to personal
                  information needed to perform their functions, but may not use
                  it for other purposes. Further, they must process the personal
                  information in accordance with applicable law.
                </li>
                <li>
                  <b>Business Transfers: </b>As we continue to develop our
                  business, we might sell or buy other businesses or services.
                  In such transactions, customer information generally is one of
                  the transferred business assets but remains subject to the
                  promises made in any pre-existing Privacy Notice (unless, of
                  course, the customer consents otherwise). Also, in the
                  unlikely event that Quleep.com, Inc. or Quleep Seller Services
                  Private Limited or any of its affiliates, or substantially all
                  of their assets are acquired, customer information will of
                  course be one of the transferred assets.
                </li>
                <li>
                  <b>Protection of Quleep and Others: </b>We release account and
                  other personal information when we believe release is
                  appropriate to comply with the law; enforce or apply our
                  Conditions of Use and other agreements; or protect the rights,
                  property, or safety of Quleep, our users, or others. This
                  includes exchanging information with other companies and
                  organizations for fraud protection and credit risk reduction.
                </li>
              </ul>
              <div className="sectin-subtext">
                Other than as set out above, you will receive notice when
                personal information about you might be shared with third
                parties, and you will have an opportunity to choose not to share
                the information.
              </div>
            </div>
          </div>
          <div name="policy5" className="">
            <h3 className="">How Secure Is Information About Me? </h3>
            <div className="sectin-subtext">
              We design our systems with your security and privacy in mind.
            </div>
            <div className="">
              <ul>
                <li>
                  <b></b>We work to protect the security of your personal
                  information during transmission by using encryption protocols
                  and software.
                </li>
                <li>
                  <b></b>We follow the Payment Card Industry Data Security
                  Standard (PCI DSS) when handling payment card data.
                </li>
                <li>
                  <b></b>We maintain physical, electronic, and procedural
                  safeguards in connection with the collection, storage,
                  processing, and disclosure of personal customer information.
                  Our security procedures mean that we may occasionally request
                  proof of identity before we disclose personal information to
                  you.
                </li>
                <li>
                  <b></b>Our devices offer security features to protect them
                  against unauthorized access and loss of data. You can control
                  these features and configure them based on your needs. Click
                  <a href="/">here</a> for more information on how to manage the
                  security settings of your device.
                </li>
                <li>
                  <b></b>It is important for you to protect against unauthorized
                  access to your password and to your computers, devices and
                  applications. Be sure to sign off when finished using a shared
                  computer. Click <a href="/">here</a> for more information on
                  how to sign off.
                </li>
              </ul>
            </div>
          </div>
          <div name="policy6" className="">
            <h3 className="">What About Advertising?</h3>
            <div className="">
              <p>
                <b>Third-Party Advertisers and Links to Other Websites: </b>
                Quleep Services may include third-party advertising and links to
                other websites and apps. Third-party advertising partners may
                collect information about you when you interact with their
                content, advertising, and services. For more information about
                third-party advertising at Quleep, including interest-based ads,
                please read our <a href="/">Interest-Based Ads policy</a>. To
                adjust your <a href="/">advertising preferences</a>, please go
                to the Advertising Preferences page.
              </p>
              <p>
                <b>Use of Third-Party Advertising Services: </b>We provide ad
                companies with information that allows them to serve you with
                more useful and relevant Quleep ads and to measure their
                effectiveness. We never share your name or other information
                that directly identifies you when we do this. Instead, we use an
                advertising identifier like a cookie or other device identifier.
                For example, if you have already downloaded one of our apps, we
                will share your advertising identifier and data about that event
                so that you will not be served an ad to download the app again.
                Some ad companies also use this information to serve you
                relevant ads from other advertisers. You can learn more about
                how to opt-out of interest-based advertising by going to the{" "}
                <a href="/">Advertising Preferences</a> page.
              </p>
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>

          <div name="policy7" className="">
            <h3 className="">What Information Can I Access?</h3>
            <div className="sectin-subtext">
              You can access your information, including your name, address,
              payment options, profile information, Prime membership, household
              settings, and purchase history in the "Your Account" section of
              the website or mobile application. Click here for a list of
              examples that you can access. To request access to personal
              information that is not available through Your Account you can
              submit a request <a href="/">here</a>.
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div name="policy8" className="">
            <h3 className="">What Choices Do I Have?</h3>
            <div className="sectin-subtext">
              If you have any questions as to how we collect and use your
              personal information, please contact our{" "}
              <a href="/">Grievance Officer</a>. Many of our Quleep Services
              also include settings that provide you with options as to how your
              information is being used
            </div>
            <div className="">
              <ul>
                <li>
                  <b></b>As described above, you can always choose not to
                  provide certain information, but then you might not be able to
                  take advantage of many of the Quleep Services.
                </li>
                <li>
                  <b></b>You can add or update certain information on pages such
                  as those referenced in{" "}
                  <a href="/">What Information Can I Access?</a>. When you
                  update information, we usually keep a copy of the prior
                  version for our records
                </li>
                <li>
                  <b></b>If you do not want to receive e-mail or other
                  communications from us, please adjust your{" "}
                  <a href="/">Customer Communication Preferences</a>. If you
                  don’t want to receive in-app notifications from us, please
                  adjust your notification settings in the app or device
                </li>
                <li>
                  <b></b>If you do not want to see interest-based ads, please
                  adjust your <a href="/">Advertising Preferences</a>.
                </li>
                <li>
                  <b></b>The Help feature on most browsers and devices will tell
                  you how to prevent your browser or device from accepting new
                  cookies or other identifiers, how to have the browser notify
                  you when you receive a new cookie or how to block cookies
                  altogether. Because cookies and identifiers allow you to take
                  advantage of some essential features of Quleep Services, we
                  recommend that you leave them turned on. For instance, if you
                  block or otherwise reject our cookies, you will not be able to
                  add items to your Shopping Cart, proceed to Checkout, or use
                  any Services that require you to Sign in. For more information
                  about cookies and other identifiers, see our{" "}
                  <a href="/">Cookies Notice</a>.
                </li>
                <li>
                  <b></b>If you want to browse our websites without linking the
                  browsing history to your account, you may do so by logging out
                  of your account <a href="/">here</a> and blocking cookies on
                  your browser.
                </li>
                <li>
                  <b></b>You will also be able to opt out of certain other types
                  of data usage by updating your settings on the applicable
                  Quleep website (e.g., in "Manage Your Content and Devices"),
                  device, or application. For more information click
                  <a href="/">here</a>. Most non-Quleep devices also provide
                  users with the ability to change device permissions (e.g.,
                  disable/access location services, contacts). For most devices,
                  these controls are located in the device's settings menu. If
                  you have questions about how to change your device permissions
                  on devices manufactured by third parties, we recommend you
                  contact your mobile service carrier or your device
                  manufacturer.
                </li>
                <li>
                  <b></b>If you are a seller, you can add or update certain
                  information in <a href="/">Seller Central</a> , update your
                  account information by accessing your{" "}
                  <a href="/">Seller Account Information</a>, and adjust your
                  e-mail or other communications you receive from us by updating
                  your <a href="/">Notification Preferences.</a>
                </li>
              </ul>
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div name="policy9" className="">
            <h3 className="">Are Children Allowed to Use Quleep Services ?</h3>
            <div className="sectin-subtext">
              Quleep does not sell products for purchase by children. We sell
              children's products for purchase by adults. If you are under the
              age of 18 years, you may use Quleep Services only with the
              involvement of a parent or guardian.
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div name="policy10" className="">
            <h3 className="">Conditions of Use, Notices , and Revisions</h3>
            <div className="sectin-subtext">
              If you choose to use Quleep Services, your use and any dispute
              over privacy is subject to this Notice and our Conditions of Use,
              including limitations on damages, resolution of disputes, and
              application of the prevailing law in India. If you have any
              concern about privacy at Quleep, please contact us with a thorough
              description, and we will try to resolve it. Our business changes
              constantly, and our Privacy Notice will change also. You should
              check our websites frequently to see recent changes.{" "}
            </div>
            <div className="sectin-subtext">
              Unless stated otherwise, our current Privacy Notice applies to all
              information that we have about you and your account. We stand
              behind the promises we make, however, and will never materially
              change our policies and practices to make them less protective of
              customer information collected in the past without the consent of
              affected customers.
            </div>

            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div name="policy11" className="">
            <h3 className="">Related Practices and Information</h3>
            <div className="">
              <ul>
                <li>
                  <a href="/">Conditions of Use</a>
                </li>
                <li>
                  <a href="/">Seller Program Policies</a>
                </li>
                <li>
                  <a href="/">Help Department</a>
                </li>
                <li>
                  <a href="/">Most Recent Purchases</a>
                </li>
                <li>
                  <a href="/">Your Profile and Community Guidelines</a>
                </li>
              </ul>
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div name="policy12" className="">
            <h3 className="">Examples of Information Collected</h3>
            <b className="">
              Information You Give Us When You Use Quleep Services
            </b>
            <div className="">
              <div className="sectin-subtext">
                You provide information to us when you:{" "}
              </div>
              <div className="">
                <ul>
                  <li>
                    search or shop for products or services in our marketplace;
                  </li>
                  <li>
                    add or remove an item from your cart, or place an order
                    through or use Amazon Services;
                  </li>
                  <li>
                    download, stream, view, or use content on a device or
                    through a service or application on a device;
                  </li>
                  <li>
                    provide information in Your Account (and you might have more
                    than one if you have used more than one e-mail address or
                    mobile number when shopping with us) or Your Profile;
                  </li>
                  <li>
                    talk to or otherwise interact with our Alexa Voice service;
                  </li>
                  <li>
                    upload your contacts, including access to mobile device
                    contacts for certain services;
                  </li>
                  <li>
                    configure your settings on, provide data access permissions
                    for, or interact with an Amazon device or service;
                  </li>
                  <li>
                    provide information in your Seller Account, Restaurant
                    Central Account, Service Provider Account, or any other
                    account we make available that allows you to develop or
                    offer software, goods, or services to Amazon customers;
                  </li>
                  <li>
                    offer your products or services on or through Amazon
                    Services;
                  </li>
                  <li>communicate with us by phone, e-mail, or otherwise;</li>
                  <li>
                    complete a questionnaire, a support ticket, or a contest
                    entry form;
                  </li>
                  <li>
                    upload or stream images, videos or audio or other files
                    while using Amazon Services;
                  </li>
                  <li>use our services such as Prime Video;</li>
                  <li>
                    compile Playlists, Watchlists, Wish Lists or other gift
                    registries;
                  </li>
                  <li>
                    participate in Discussion Boards or other community
                    features;
                  </li>
                  <li>provide and rate Reviews;</li>
                  <li>specify a Special Occasion Reminder; or</li>
                  <li>
                    or employ Product Availability Alerts, such as Available to
                    Order Notifications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <b className="sectin-subtext">
              As a result of those actions, you might supply us with such
              information as:
            </b>
            <div className="">
              <ul>
                <li>
                  identifying information such as your name, address and phone
                  numbers;
                </li>
                <li>payment information;</li>
                <li>your age;</li>
                <li>your location information;</li>
                <li>your IP address;</li>
                <li>
                  people, addresses and phone numbers listed in your Addresses;
                </li>
                <li>e-mail addresses of your friends and other people;</li>
                <li>content of reviews and e-mails to us;</li>
                <li>
                  the personal description and photograph in Your Profile;
                </li>
                <li>voice recordings when you speak to Alexa;</li>
                <li>
                  images, videos and other content collected or stored in
                  connection with Amazon Services;
                </li>
                <li>
                  information and officially valid documents regarding identity
                  and address information, including PAN numbers;
                </li>
                <li>credit history information;</li>
                <li>corporate and financial information; and</li>
                <li>
                  device log files and configurations, including Wi-Fi
                  credentials, if you choose to automatically synchronize them
                  with your other Amazon devices.
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <b className="sectin-subtext">Automatic Information</b>
            <div className="sectin-subtext">
              Examples of the information we collect and analyze include:
            </div>
            <div className="">
              <ul>
                <li>
                  the internet protocol (IP) address used to connect your
                  computer to the internet;
                </li>
                <li>login, e-mail address, and password;</li>
                <li>the location of your device or computer;</li>
                <li>
                  content interaction information, such as content downloads,
                  streams, and playback details, including duration and number
                  of simultaneous streams and downloads, and network details for
                  streaming and download quality, including information about
                  your internet service provider;
                </li>
                <li>
                  device metrics such as when a device is in use, application
                  usage, connectivity data, and any errors or event failures;
                </li>
                <li>
                  Amazon Services metrics (e.g., the occurrences of technical
                  errors, your interactions with service features and content,
                  your settings preferences and backup information, location of
                  your device running an application, information about uploaded
                  images and files such as the file name, dates, times and
                  location of your images);
                </li>
                <li>
                  version and time zone settings; purchase and content use
                  history, which we sometimes aggregate with similar information
                  from other customers to create features like Amazon
                  Bestsellers;
                </li>
                <li>
                  the full Uniform Resource Locator (URL) clickstream to,
                  through, and from our websites, including date and time;
                </li>
                <li>products and content you viewed or searched for;</li>
                <li>
                  page response times, download errors, length of visits to
                  certain pages, and page interaction information (such as
                  scrolling, clicks, and mouse-overs);
                </li>
                <li>
                  phone numbers used to call our customer service number; and
                </li>
                <li>
                  images or videos when you shop in our marketplace using Amazon
                  Services.
                </li>
              </ul>
            </div>
            <div className="section-subtext">
              We may also use device identifiers, cookies, and other
              technologies on devices, applications, and our web pages to
              collect browsing, usage, or other technical information.
            </div>
            <div onClick={()=>ScrollToTop}>
              Back to top
            </div>
          </div>
          <div className="">
            <b className="sectin-subtext">Information from Other Sources</b>
            <div className="sectin-subtext">
              Examples of information we receive from other sources include:{" "}
            </div>
            <div className="">
              <ul>
                <li>
                  updated delivery and address information from our carriers or
                  other third parties, which we use to correct our records and
                  deliver your next purchase or communication more easily;
                </li>
                <li>
                  {" "}
                  account information, purchase or redemption information and
                  page-view information from some merchants with which we
                  operate co-branded businesses or for which we provide
                  technical, fulfilment, advertising or other services;
                </li>
                <li>
                  {" "}
                  information about your interactions with products and services
                  offered by our affiliates;
                </li>
                <li>
                  {" "}
                  search results and links, including paid listings (such as
                  Sponsored Links);
                </li>
                <li>
                  {" "}
                  information about internet-connected devices and services
                  linked with Alexa; and
                </li>
                <li>
                  {" "}
                  credit history information from credit bureaus, which we use
                  to help prevent and detect fraud and to offer certain credit
                  or financial services to some customers.
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <b className="sectin-subtext">Information You Can Access</b>
            <div className="sectin-subtext">
              Examples of information you can access through Quleep Services
              include:{" "}
            </div>
            <div className="">
              <ul>
                <li>
                  status of recent orders (including subscriptions); • your
                  complete order history;
                </li>
                <li>
                  {" "}
                  personally identifiable information (including name, e-mail,
                  password, and address book);
                </li>
                <li>
                  {" "}
                  payment settings (including payment method information,
                  promotional certificate, and gift card balances and 1-Click
                  settings);
                </li>
                <li>
                  {" "}
                  e-mail notification settings (including Product Availability
                  Alerts, Delivers, Special Occasion Reminders and newsletters);
                </li>
                <li>
                  {" "}
                  recommendations and the products you recently viewed that are
                  the basis for recommendations (including Recommended for You
                  and Improve Your Recommendations);
                </li>
                <li>
                  {" "}
                  your content, devices, services, and related settings, and
                  communications and personalized advertising preferences;
                </li>
                <li> content that you recently viewed;</li>
                <li> voice recordings associated with your account;</li>
                <li>
                  {" "}
                  Your Profile (including your product Reviews, Recommendations,
                  Reminders and personal profile);
                </li>
                <li>
                  {" "}
                  If you are a seller, you can access your account and other
                  information, and adjust your communications preferences, by
                  updating your account in <a href="/">Seller Central</a> .
                </li>
                <li>
                  {" "}
                  If you are a restaurant, you can access your account and other
                  information, and adjust your communication preferences, by
                  updating your account in Restaurant Central;
                </li>
                <li>
                  {" "}
                  If you are a service provider listing on our Service Provider
                  Network, you can access your account and other information,
                  and adjust your communication preferences, by updating your
                  account in Service Provider Central;
                </li>
              </ul>
            </div>
          </div>
          {/* main section end */}
        </div>
      </div>
    </div>
  );
}

export default Privacypolicy;
