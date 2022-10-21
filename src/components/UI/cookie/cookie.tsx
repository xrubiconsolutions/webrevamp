import styled from "styled-components";
import tw from "twin.macro";

const CookieSection = styled.section`
  ${tw`py-20`}
`;
const BodyP = styled.p`
  ${tw`mb-6`}
`;
const Bodyh6 = styled.h6`
  ${tw`text-primary font-bold text-lg mb-3`}
`;
const CookiePolicy = () => {
  return (
    <CookieSection>
      <BodyP>
        This is the Cookie Policy for Pakam, accessible from www.pakam.ng
      </BodyP>

      <Bodyh6>What Are Cookies</Bodyh6>
      <BodyP>
        As is common practice with almost all professional websites this site
        uses cookies, which are tiny files that are downloaded to your computer,
        to improve your experience. This page describes what information they
        gather, how we use it and why we sometimes need to store these cookies.
        We will also share how you can prevent these cookies from being stored
        however this may downgrade or 'break' certain elements of the sites
        functionality. For more general information on cookies, please read
        "What Are Cookies". Information regarding cookies from this Cookies
        Policy are from the Privacy Policy Generator.
      </BodyP>
      <Bodyh6>How We Use Cookies</Bodyh6>

      <BodyP>
        We use cookies for a variety of reasons detailed below. Unfortunately in
        most cases there are no industry standard options for disabling cookies
        without completely disabling the functionality and features they add to
        this site. It is recommended that you leave on all cookies if you are
        not sure whether you need them or not in case they are used to provide a
        service that you use. visit.
      </BodyP>
      <Bodyh6>Disabling Cookies</Bodyh6>
      <BodyP>
        You can prevent the setting of cookies by adjusting the settings on your
        browser (see your browser Help for how to do this). Be aware that
        disabling cookies will affect the functionality of this and many other
        websites that you Disabling cookies will usually result in also
        disabling certain functionality and features of the this site. Therefore
        it is recommended that you do not disable cookies. The Cookies We Set •
        Login related cookies We use cookies when you are logged in so that we
        can remember this fact. This prevents you from having to log in every
        single time you visit a new page. These cookies are typically removed or
        cleared when you log out to ensure that you can only access restricted
        features and areas when logged in.
      </BodyP>
      <Bodyh6>Third Party Cookies</Bodyh6>
      <BodyP>
        In some special cases we also use cookies provided by trusted third
        parties. The following section details which third party cookies you
        might encounter through this site. • This site uses Google Analytics
        which is one of the most widespread and trusted analytics solution on
        the web for helping us to understand how you use the site and ways that
        we can improve your experience. These cookies may track things such as
        how long you spend on the site and the pages that you visit so we can
        continue to produce engaging content. For more information on Google
        Analytics cookies, see the official Google Analytics page. • From time
        to time we test new features and make subtle changes to the way that the
        site is delivered. When we are still testing new features these cookies
        may be used to ensure that you receive a consistent experience whilst on
        the site whilst ensuring we understand which optimisations our users
        appreciate the most.
      </BodyP>
      <BodyP>
        More information Hopefully that has clarified things for you and as was
        previously mentioned if there is something that you aren't sure whether
        you need or not it's usually safer to leave cookies enabled in case it
        does interact with one of the features you use on our site.
      </BodyP>
      <BodyP>
        However if you are still looking for more information then you can
        contact us through one of our preferred contact methods:
        <br />• Email: policy@pakam.ng
        <br />• Phone: +234-8055361254
      </BodyP>
    </CookieSection>
  );
};

export default CookiePolicy;
