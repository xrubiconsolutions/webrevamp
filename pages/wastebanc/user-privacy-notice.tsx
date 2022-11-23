import React from "react";
import { Container } from "../../src/components";
import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`pt-7`}

  h2 {
    ${tw`text-primary text-xl font-medium text-center  mb-5`}
  }

  p {
    ${tw`pb-5`}
  }

  h4 {
    ${tw`text-primary text-lg font-medium mb-2 mt-5`}
  }
  ul {
    margin-top: 10px;
    padding: 3px 30px;
  }
  ul > li {
    list-style: disc;
  }
  em {
    font-style: italic;
  }
  span {
    color: black;
    display: block;
  }

  a {
    color: #87cefa;
    color: blue;
  }
`;

const UserPrivacyPolicy = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <Wrapper className="moderate_width">
          <div>
            <h2>Privacy Notice for Users</h2>
            <p>
              Wastebanc powered by Pakam technology is an affiliate of Pakam
              Technology company (Company Registration Number 1796077) located
              at 127 Ogunlana Drive, Surulere Lagos, Nigeria is the controller
              of personal data of users and has appointed a Data Protection
              Officer
              <a href="mailto:privacy@pakam.ng"> privacy@pakam.ng</a>. The term
              "us" or "we" refers to the owner of the Wastebanc app powered by
              Pakam technology, a private limited company, founded in the
              Federal Republic of Nigeria..
            </p>
            <p>
              Wastebanc powered by Pakam technology is the Controller of your
              personal data unless otherwise stated below. Our postal address is
              : 127 Ogunlana Drive Surulere, Lagos Nigeria.
            </p>

            <p>
              We have nominated a Data Protection Officer, and you can contact
              him at <a href="mailto:privacy@pakam.ng">privacy@pakam.ng</a> or
              via any one of our postal addresses found in our website. Please
              mark the envelope ‘Data Protection Officer’.
            </p>
            <p>
              The term "us" or "we" refers to the owner of the Wastebanc app
              powered by Pakam technology, is an affiliate of Pakam technology
              limited, a private limited company, founded in the Federal
              Republic of Nigeria. The term “you” or “your” refers to the users
              or agent who schedules, and/or receives a collection service
              through their Wastebanc app account.
            </p>
          </div>

          <div>
            <h4>1. Personal data we process</h4>
            <p>
              We only process information that we need, so we can provide you
              with the best of service on our collection marketplace.
            </p>

            <ul>
              <li>
                {" "}
                Contact details: things like name, phone number and e-mail
                address. For some of our services we might require a little
                more, like your home address.
              </li>
              <li>
                {" "}
                Profile information: things like your profile picture, saved
                addresses, language and communication preferences when the time
                comes. For some of our services we might require a little more,
                like your driver license details.
              </li>
              <li> Geolocation: such as where you need a collection from.</li>
              <li>
                {" "}
                Payment information like the amount charged and the payment card
                used, including bank transfer
              </li>
              <li>
                {" "}
                Communication and correspondence records such as when you engage
                with our in-app chat, or speak with our customer service agents.
              </li>
              <li>
                {" "}
                Limited identification data of the device, like the IP address,
                on which the Wastebanc app has been installed
              </li>
              <li>
                Data about the usage of the collection services: things like
                data about schedule status, times and data about your conduct as
                assessed by agents.
              </li>
            </ul>
          </div>

          <div>
            <h4>2. Purpose of the processing</h4>
            <p>
              We process your personal data so we can provide you with one or
              more of our collection services:
            </p>
            <ul>
              <li>
                <b> We connect you with a Wastebanc Agent</b>: We collect and
                process personal data for the purpose of connecting users with
                agent so you can be picked up and or dropped off your recyclable
                waste; or to show you where our nearest available Wastebanc
                drop-off locations are, such as our Wastebanc hub
              </li>
              <li>
                {" "}
                <b>We make sure your schedule goes smoothly</b>: We use
                geolocation data to make sure agent get to your location and
                resolve quality issues related to our services.{" "}
              </li>
              <li>
                {" "}
                <b>We make sure the Wastebanc app is optimal:</b> We use contact
                details to notify users and agents of updates to the Wastebanc
                app so you can keep using our services. We also gather limited
                data from the device that you use to connect you with our
                internet, mobile and telephone services, and to help keep your
                account safe through authentication and verification checks.
              </li>
              <li>
                {" "}
                <b>We collect your payment:</b> We obtain payment details to
                process users payment on behalf of agent for waste hailing.{" "}
              </li>
              <li>
                {" "}
                <b>We maintain and promote standards:</b> We collect data about
                schedule statuses, time and users ratings from agent feedback to
                encourage user safety, promote compliance with our terms and
                conditions, and make sure we’re providing a quality and
                enjoyable service to everyone. Customer support data and
                correspondence is collected for the purposes of feedback, and
                resolving disputes and service quality issues.
              </li>
              <li>
                <b>We keep you informed:</b> Your name, phone number and email
                address will be used to communicate with you for things like
                letting you know that your schedule has been completed, sending
                you confirmation slips and receipts, and letting you know about
                important service updates such as when services are disrupted
              </li>
            </ul>
          </div>
          <div>
            <h4>We keep you informed:</h4>
            <p>
              We are allowed to use personal information in the ways described
              above if we have a proper reason to do so. We always make sure we
              have a good reason for doing anything with your data.
            </p>
            <ul>
              <li>
                {" "}
                Personal data is generally processed in order to provide the
                services contracted through the Wastebanc app with you. This
                means that to give you the service we promised you, and to meet
                our terms and conditions, we’ll process your personal data to
                meet those obligations.
              </li>
              <li>
                {" "}
                We generally in other circumstances process your personal data
                relying on legitimate interest grounds. Legitimate interests
                include our commercial interests in providing an innovative,
                personalised, safe and profitable service to our users and
                partners, unless those interests are overridden by other
                interests. Our legitimate interests also include things like
                investigating and detecting fraudulent payments and other
                malicious activities, maintaining the security of our network
                and systems, and responding to suspected or actual criminal
                acts.
              </li>
              <p>
                We may from time to time rely on alternative legal bases when:{" "}
                <ul>
                  <li>
                    it is necessary to comply with a legal obligation such as
                    for processing data when the law requires it, including, for
                    example, if there is a valid legal request to disclose
                    personal information to a third party such as a Court or
                    regulatory authority;
                  </li>
                  <li>
                    {" "}
                    to protect your vital interests, or those of others, for
                    example in the event of an emergency or an imminent threat
                    to life; or
                  </li>
                  <li>
                    {" "}
                    you have given us clear consent to do so for another
                    specific purpose in which you have been fully informed.
                  </li>
                </ul>
              </p>
            </ul>
            <p>
              If you choose not to give us personal information it may prevent
              us from fulfilling the contract with you, or stop us doing
              something expected of us in law. It may also mean that we cannot
              operate your account. For example, we collect and process the
              personal data submitted by you in the course of installing and
              using the Wastebanc app; refusing to share geolocation data via
              the App means we cannot direct a agent to your location for
              pick-up, nor can we show you one of our own drop-off location. We
              will not be able to fulfil our obligations to you in other
              circumstances, for example, should you refuse to undertake an
              identity verification check to ensure the integrity of your
              account, then the account may be suspended or blocked to prevent
              fraud.
            </p>
          </div>

          <div>
            <h4>4. Recipients</h4>
            <p>
              We only work with trusted partners and authorities. We only share
              when there is a proper reason to do so. We limit sharing to only
              that which is required. We do not sell your personal information.
              <ul>
                <li>
                  The personal data of the generator is only disclosed to the
                  collection company when they engage with a pickup or drop-off
                  on in the Wastebanc app; in such a case, the agent will see
                  the name, phone number (in some countries the number is
                  masked) and geolocation data of the generator.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h4>5. Security and access</h4>
            <ul>
              <li>
                Any personal data collected in the course of providing our
                services is transferred to and stored in the data centres of
                Digital Ocean or any other cloud service provider we may choose
                to use for data storage.
              </li>
              <li>
                {" "}
                Wastebanc Operations and partners can access personal data to
                the extent necessary to provide customer support in the
                respective area.
              </li>
              <li>
                {" "}
                For our research and scientific purposes, all data, like bulk
                geolocation data, is anonymised so you can never be identified
                from it
              </li>
            </ul>
          </div>

          <div>
            <h4>6. Your rights and controls</h4>
            <p>
              We want you to stay in control of your personal data. Wastebanc
              provides you with controls through the app where you can view your
              personal information including your profile data and trip history.
              We also offer in-app settings. Your right of access
              <ul>
                <li>
                  • You can access your personal data via the Wastebanc app. You
                  have the right to ask us for copies of your personal
                  information. There are some exemptions, such as when we have
                  to balance the rights of others, which means you may not
                  always receive all the information we process.
                </li>
              </ul>
            </p>

            <p>
              Your right to rectification{" "}
              <ul>
                <li>
                  {" "}
                  You can access and update your personal data via the Wastebanc
                  app. You have the right to ask us to rectify information you
                  think is otherwise inaccurate. You also have the right to ask
                  us to complete information you think is incomplete.
                </li>
              </ul>
            </p>
            <p>Your right to erasure</p>
            <p>
              You have the right to ask us to erase your personal information in
              certain circumstances.
            </p>
            <p>
              Your right to restriction of processing{" "}
              <ul>
                <li>
                  You have the right to ask us to restrict the processing of
                  your information in certain circumstances. This means that
                  your data can only be used for certain things, such as legal
                  claims or to exercise legal rights.
                </li>
              </ul>
            </p>
            <p>
              Your right to object to processing{" "}
              <ul>
                <li>
                  {" "}
                  You may have the right to object to processing if we are
                  processing your information on the basis of legitimate
                  interests. You may submit an objection to any automated
                  decision we have made, and ask that a person reviews it.
                </li>
              </ul>
            </p>
            <p>Your right to data portability</p>
            <p>
              *You have the right to ask that we transfer the information you
              gave us from one organisation to another, or give it to you, in
              certain circumstances. This only applies to information you have
              given us.
            </p>
          </div>
          <div>
            <h4>7. Retention</h4>
            <p>
              Bold retains user data for only as long as necessary for the
              purposes described above. This means that we retain different
              categories of data for different periods of time depending on the
              type of data, the collection service it relates to, and the
              purposes for which we collected the data.
            </p>
            <ul>
              <li>
                Your personal data will be stored as long as you have an active
                generators account. If your account is closed, personal data
                will be deleted (according to our retention schedule and rules),
                unless such data is still required to meet any legal obligation,
                or for accounting, dispute resolution or fraud prevention
                purposes.
              </li>
              <li>
                Financial data regarding collection services provided to
                passengers will be stored for three years after the last
                schedule. Data required for other accounting purposes will be
                stored for seven years after the last schedule.
              </li>
              <li>
                {" "}
                In the event of a suspected criminal offence, fraudulent
                activity or false information having been provided, the data
                will be stored for up to 10 years.
              </li>
              <li>
                In case of payment disputes, data will be retained until the
                claim is satisfied or the expiry date of such claims.
              </li>
              <li>
                Schedule history data and the data about usage of collection
                services will be stored for three years, after which the data
                will be anonymized.
              </li>
              <p>
                Please note that the deinstallation of Wastebanc app in your
                device does not cause the deletion of your personal data. If the
                Wastebanc app has not been used for three years, we’ll get in
                touch and ask you to confirm whether you wish to keep your
                account active for future use. If no reply is received in a
                reasonable time, the account will be closed and personal data
                will be deleted unless such data is required for any purpose
                mentioned earlier in this privacy notice.
              </p>
            </ul>
          </div>

          <div>
            <h4>8. Direct marketing</h4>
            <ul>
              <li>
                We may send direct marketing messages to your e-mail address
                and/or phone number when you have given us permission to do so,
                or under a soft opt-in basis. We may personalise direct
                marketing messages using information on how you use Wastebanc’s
                services, such as how frequently you use the Wastebanc app, and
                your collection preferences.
              </li>
              <li>
                {" "}
                If you no longer wish to receive direct marketing messages,
                please click the "Unsubscribe" link in the footer of one of our
                emails, or opt-out in the profile section of the Wastebanc app.
                Easy.
              </li>
            </ul>
          </div>

          <div>
            <h4>9. Automated decision making</h4>
            <p>
              We use help of automated decision-making in case of issuing
              warnings and implementing collection hailing service suspension.
              Using automated decision-making is less error-prone, more
              efficient and safer than using our employees. Data about your
              usage of the collection services (data about schedule status incl.
              cancellations and no-shows and data about your conduct as assessed
              by agent) is considered when assessing the need for a warning or
              suspension. collection hailing suspension will stay in force for
              12 months, after which access to collection hailing service will
              be restored. You will always have the right for human review of
              the decision and to contest the decision, express your point of
              view and obtain an explanation by contacting our customer support
              in our app.
            </p>
          </div>

          <div>
            <h4>10. Dispute resolution</h4>
            <ul>
              <li>
                Disputes relating to the processing of personal data are
                resolved through customer support{" "}
                <a href="info@pakam.ng" target="_blank">
                  info@pakam.ng
                </a>{" "}
                in the first instance. You have the right to contact Bolt's Data
                Protection Officer
                <a href="mailto:(privacy@pakam.ng)" target="_blank">
                  {" "}
                  privacy@pakam.ng{" "}
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h4>11. Making this notice great</h4>
            <p>
              We hope you have found this privacy notice easy to understand.
              Data protection laws are important. They strengthen rules and
              enhance your information rights. Many of these rules may appear
              complicated, but most are grounded in common sense. We take our
              responsibilities with your data seriously. Wastebanc will continue
              to make changes to this privacy notice as part of our commitment
              to protecting your privacy and affording you even more
              transparency.
            </p>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserPrivacyPolicy;
