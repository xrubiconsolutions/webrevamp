import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../../src/components";

export const Wrapper = styled.div`
  ${tw`pt-10`}

  h2 {
    ${tw`text-primary text-center text-xl font-medium  mb-5`}
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

const UserTerms = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <Wrapper className="moderate_width">
          <div>
            <h2>Terms and Conditions for Users</h2>
            <p>
              These General Terms and Conditions set out the terms and
              conditions applying to and governing the usage of the Wastebanc
              app - technology which connects Waste generators with Waste
              collector to help them dispose of their waste more efficiently,
              smartly and on-demand.
            </p>
            <p>
              The term “us” or “we” refers to Wastebanc Operations. Wastebanc is
              powered by Pakam Technology, a private limited company
              incorporated and registered under the laws of federal republic of
              Nigeria with registration No. 1796077, registered office 127
              Ogunlana Drive, Surulere Lagos, Nigeria. In order to use Wastebanc
              app you must agree to the terms and conditions that are set out
              below:
            </p>
          </div>

          <div>
            <h4>1. Using the Wastebanc app</h4>
            <p>
              1.1 Wastebanc provides an information society service through
              Wastebanc app that enables mediation of the requests for
              collection services between the waste generators and waste agent
              and Wastebanc provide collection services. Collection services are
              provided by Wastebanc collectors/Agents for the collection of User
              waste. Collectors/Agent provide transport/logistic services on an
              independent basis (either in person or via a company) as economic
              and professional service providers. Wastebanc is not responsible
              in any way for the fulfilment of the contract entered into between
              the users (you) and the collector/agent. Disputes arising from
              consumer rights, legal obligations or from law applicable to the
              provision of transport services will be resolved between the user
              and agent. Data regarding the agent and their Collection service
              is available in the Wastebanc app and history for collection,
              receipts for collection and payment for collection are available
              on users schedule history and wallet.
            </p>
            <p>
              1.2 . The generators/users (you) enters into a contract with the
              collector for the provision of transport/logistic services via the
              Wastebanc app. Payment transactions will happen within Wastebanc
              in-App Payment wallet. Payments for Wastebanc Business
              (aggregators) are handled by a separate agreement for Business
              (Aggregator) transaction. Charges will be inclusive of applicable
              taxes where required by law. Charges may include other applicable
              fees, and/or surcharges including processing fees.
            </p>
            <p>
              1.3 During the installation of Wastebanc app, user’s mobile number
              is linked to the respective Wastebanc user account and added to
              our database. If you are no longer using your mobile number, you
              must notify Wastebanc within 7 days so we can anonymize your
              account data. If you do not notify us about any change to your
              number, your mobile operator may issue the same mobile number to a
              new person who when using the Wastebanc app then may have access
              to your data.
            </p>
          </div>

          <div>
            <h4>2. Wastebanc in-App Payment </h4>
            <p>
              2.1 Payment to and for the waste collection services is available
              through Wastebanc App wallet which shall be transfer into users
              Sterling Bank account without charges or other banks with charges.
              Wastebanc will provide ease online account opening on its app and
              user can then visit nearby Wastebanc to conclude account opening.
              By providing Wastebanc in-App Payment service, Wastebanc acts as
              commercial agent for the providers of the users & collector/agent
              services. Every collector/agent has authorised Wastebanc app as
              their commercial agent for the mediation of conclusion of
              contracts between the agent and the users, including the power to
              accept payments from the collections service and to forward the
              payments to the user and vice versa. Obligation of the collection
              service will be fulfilled when the payment order is given to
              transfer funds to Wastebanc’ bank account. You, as a collector are
              responsible for ensuring that the payment takes place and ensuring
              that sufficient funds are available.{" "}
            </p>
            <p>
              2.2 When making payments by Wastebanc in-App Payment wallet,
              Wastebanc receives your payments and forwards money to the
              Users/collectors/agent. Wastebanc may ask additional data from you
              to verify payment method.{" "}
            </p>
            <p>
              2.3 When making payments by Wastebanc in-App Payment for
              collection services, Wastebanc is not responsible for possible
              third-party payment costs (e.g mobile operators, internet fees).
              These service providers may charge you additional fees when
              processing payments in connection with the Wastebanc in-App
              Payment. Wastebanc is not responsible for any such fees and
              disclaims all liability in this regard. Your payment method may
              also be subject to additional terms and conditions imposed by the
              applicable third-party payment service provider; please review
              these terms and conditions before using your payment method.{" "}
            </p>
            2.4 Pakam Technology will be responsible for the functioning of the
            Wastebanc in-App Payment and provide support in resolving problems.
            The resolution of disputes related to Wastebanc in-App Payment also
            takes place through us. For payment support service please contact:
            <a href="info@pakam.ng" target="_blank">
              info@pakam.ng
            </a>
            . Inquiries submitted by e-mail or Wastebanc App will receive a
            response within one business day. Pakam Technology will resolve
            Wastebanc in-App Payment related complaints and applications within
            two business days.
          </div>

          <div>
            <h4>3. Scheduling and cancelling Collection services</h4>
            <p>
              3.1 If you schedule for a collection service and the collector
              accept to undertake the schedule pickup, then the collection
              service is considered to have been ordered.{" "}
            </p>
            <p>
              3.2 Cancelling the use of a scheduled collection service is the
              situation where the collector has replied to your request and you
              subsequently reject, cancel, or refuse the collection service.
              When a collection service request is cancelled in the above
              scenario the user may pay for such cancellation in future
              collection.{" "}
            </p>
            <p>
              3.3 If you cancel a collection service request on multiple
              occasions, we may temporarily block your account for warning.
              After multiple such warnings, we may suspend your account for
              longer period (e.g 12 months). After that period you could ask to
              reactivate your account and your application will be reviewed by
              Wastebanc.{" "}
            </p>
            <p>
              3.4 When collector notifies the User about the arrival to its
              pickup location and user for whom the collection was ordered do
              not submit his or her waste within a certain period as specified
              in the Wastebanc app, the request will be deemed cancelled by the
              collector. Sometimes collector may decide to cancel your schedule
              request, please note that Wastebanc is not responsible for such
              situations.{" "}
            </p>
            <p>
              3.5 Once the collector arrives and sends you a notification that
              he/she has arrived It is expected that the user will bring out his
              or her sorted waste for the collector. In a situation the user is
              not around, the waste should be handed over to someone within the
              household. It should be noteworthy that collectors are not to be
              allowed to enter user household and allowing collector into the
              household is not Wastebanc transaction and such shall be bored by
              the household should any complaint arise. Collectors are not to
              sort household waste for them. It is expected that household has
              sorted their waste before scheduling for pickup or drop off. If
              waste is not sorted, the User shall pay the collector a mutually
              agreed cash for performing such task on-behave of the user.
              Otherwise, collector shall collect the waste and shall not be
              registered for the user in the case of Earn-as-You Waste.
            </p>
            <p>
              3.6 If you have requested collection services using the Wastebanc
              app and cause damage to the collector’s logistics (for any
              reasons), the collector will have the right to require you to pay
              for the damage. If you do not pay the damage and/or compensate the
              damage, Wastebanc may pursue the claims on behalf of the provider
              of the transport service.
            </p>
          </div>
          <div>
            <h4>4. License to use Wastebanc app</h4>
            <p>
              4.1 As long as you comply with these General Terms and Conditions,
              we agree to grant you a royalty free, revocable, non-exclusive,
              right to access and use the Wastebanc app in accordance with these
              General Terms and Conditions, the Privacy Notice, and the
              applicable app-store terms. You may not transfer or sub-license
              this right to use the Wastebanc app. In the event that your right
              to use Wastebanc app is cancelled, the corresponding non-exclusive
              license will also be cancelled.
            </p>
          </div>

          <div>
            <h4>5. Liability</h4>
            <p>
              5.1 As the Wastebanc app is an information society service (a
              means of communication) between waste generator and waste
              collectors, we cannot guarantee or take any responsibility for the
              quality or the absence of defects in the provision of collection
              services. As the usage of Wastebanc app for requesting collection
              services depends on the behaviour of the user and collector/agent,
              Wastebanc does not guarantee that you will always have offers
              available for the provision of the collection services.{" "}
            </p>
            <p>
              5.2 The Wastebanc app does not offer or broker collection services
              for users. It is also not an collection or logistic agency service
              for finding users for collection providers. The Wastebanc app is
              used as the means for organising the provision of collection
              services.
            </p>
            <p>
              5.3 The consumer’s right of refund is not applied to Wastebanc app
              orders. Requesting a refund from the waste service does not
              withdraw you from the agreement in the course of which the
              provision of the waste service was ordered.{" "}
            </p>
            <p>
              5.4 The Wastebanc app is provided on an "as is" and “as available”
              basis. Wastebanc does not represent, warrant, or guarantee that
              access to Wastebanc app will be uninterrupted or error free. In
              case of any faults in the software, we will endeavour to correct
              them as soon as possible, but please keep in mind that the
              functioning of the app may be restricted due to occasional
              technical errors and we are not able to guarantee that the app
              will function at all times, for example a public emergency may
              result in a service interruption.{" "}
            </p>
            <p>
              5.5 Wastebanc, its representatives, directors and employees are
              not liable for any loss or damage that you may incur because of
              using Wastebanc app or relying on, the scheduling experience
              contracted for through the Wastebanc app, including but not
              limited to:{" "}
              <ul>
                <li>
                  5.5.1. any direct or indirect property damage or monetary
                  loss;{" "}
                </li>
                <li>5.5.2. loss of profit; </li>
                <li>
                  5.5.3. loss of business, contracts, contacts, goodwill,
                  reputation and any loss that may arise from interruption of
                  the business;{" "}
                </li>
                <li>5.5.4. loss or inaccuracy of data; and </li>
                <li>5.5.5. any other type of loss or damage</li>
                <li>
                  5.6 The financial liability of Wastebanc in connection with
                  breach of the contract will be limited to 5000 Naira. You will
                  have the right to claim for damages only if Wastebanc has
                  deliberately violated the contract. Wastebanc will not be
                  liable for the actions or inactions of the collector and will
                  not be liable for damages that the collector causes to the
                  user and vice versa.{" "}
                </li>
              </ul>
            </p>
            <p>
              5.7 You agree to fully indemnify and hold Wastebanc, their
              affiliate companies, representatives, employees, and directors
              harmless from any claims or losses (including liabilities,
              damages, costs, and expenses of any nature) that they suffer
              because of your use of the Wastebanc app (including the scheduling
              you obtain through your use of the Wastebanc app).{" "}
            </p>
            <p>
              5.8 Wastebanc may immediately end your use of the Wastebanc app if
              you breach these General Terms and Conditions or we consider it
              necessary to protect the integrity of Wastebanc app or the safety
              of users and collectors.
            </p>
          </div>

          <div>
            <h4>6. Good practice using the Wastebanc app</h4>
            <p>
              6.1 As Wastebanc is not a provider or broker of the
              collection/logistic services, any issues with defects or quality
              of the collection services will be resolved in accordance with the
              rules and regulations of the collection service provider or the
              relevant public authority.{" "}
            </p>
            <p>
              6.2 We ask to join community corner in the Wastebanc app to
              provide feedbacks. This enables us to offer suggestions to the
              collectors for improving the quality of their service.{" "}
            </p>
            <p>
              6.3 We expect that you use Wastebanc app in good faith and be
              respectful of the collectors who offer their services through
              Wastebanc app. Wastebanc retains the right to close your account
              if you have violated the terms set out in this General Terms and
              Conditions or if your activities are malicious, i.e. withholding
              payment for the provision of the collection service, fraud, being
              disrespectful towards the collectors or users, etc. In these
              cases, your Wastebanc app account may be revoked without prior
              notice.{" "}
            </p>
            6.4 Wastebanc will make every effort to ensure that only collectors,
            who have integrity and are respectful of their profession and
            passengers, use the Wastebanc app. However, we are in no position to
            guarantee that every provider of collection services, located by the
            Wastebanc app, satisfies the aforementioned criteria at all times.
            If you experience objectionable collection service, please notify
            the company responsible for the service, a supervisory authority or
            our customer support.
          </div>

          <div>
            <h4>7. Amendments to the General Terms and Conditions</h4>
            <p>
              7.1 If any substantial amendments are made to the General Terms
              and Conditions, then you will be notified by e-mail or Wastebanc
              app notifications. If you continue using Wastebanc app, you will
              be deemed to accept the amendments.
            </p>
          </div>

          <div>
            <h4>8. Final Provisions</h4>
            <p>
              The General Terms and Conditions will be governed by and construed
              and enforced in accordance with the laws of Federal Republic of
              Nigeria. If the respective dispute resulting from General Terms or
              Agreement could not be settled by the negotiations, then the
              dispute will be finally solved in the court of law in Lagos
              Nigeria. If any provision of the General Terms is held to be
              unenforceable, the parties will substitute for the affected
              provision an enforceable provision that approximates the intent
              and economic effect of the affected provision.
            </p>

            <p className="text-base font-bold pt-4 ">
              Date of entry into force: 10.09.2022.
            </p>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserTerms;
