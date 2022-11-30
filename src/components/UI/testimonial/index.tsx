import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../..";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";

const TestimonialContainer = styled.div`
  ${tw`bg-secondary py-6 lg:py-20`}
`;
const TestimonialTitle = styled.h4`
  ${tw`text-primary  font-extrabold text-center text-3xl lg:text-5xl lg:mb-7 mb-12 `}
  letter-spacing: 0.5px;
`;
const TestimonialRow = styled.div`
  display: flex;
  margin-right: -15px;
  margin-bottom: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: center;
  flex-direction: row;
`;
const TestimonialCol1 = styled.div`
  margin-bottom: 15px;
  padding-right: 100px;
  padding-left: 30px;
  flex: 1;
  max-width: 60%;
  flex-basis: 60%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
const TestimonialCol2 = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 40%;
  flex-basis: 40%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SwiperContainer = styled.div`
  ${tw`mb-10`}
`;
const SwiperHeaderContainer = styled.div`
  ${tw`flex items-center justify-between`}
`;
const SwiperHeader = styled.div`
  ${tw`self-start`}
`;
const SwiperHeaderH5 = styled.h5`
  ${tw`text-primary font-bold text-lg`}
`;
const SwiperHeaderH6 = styled.h6`
  ${tw`text-xs text-primary font-thin italic`}
`;
const SwiperHeaderP = styled.p`
  ${tw``}
  >span {
    ${tw`text-primary`}
  }
`;

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <Container>
        <TestimonialTitle>What people are saying about us...</TestimonialTitle>
        <TestimonialRow>
          <TestimonialCol1>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <SwiperContainer>
                  <SwiperHeaderContainer>
                    <SwiperHeader>
                      <SwiperHeaderH5>Hodok Orok</SwiperHeaderH5>
                      <SwiperHeaderH6>Household User</SwiperHeaderH6>
                    </SwiperHeader>
                    <Image src="/svg/quote.svg" height={90} width={140} />
                  </SwiperHeaderContainer>
                  <SwiperHeaderP>
                    I had these two bags of plastic waste in my backyard for
                    quite a long, long time now hoping to get a local recycler
                    to come and pick them up. Then i heard of{" "}
                    <span>@pakam-ng</span> , an initiative of the Lagos State
                    Govt. @moelagos @lawma-gov. I called Mr. T @adewole-taiwo
                    who explained to me how the
                    <span>Pakam app</span> works and last week, I requested a
                    pick-up and the response was swift.
                  </SwiperHeaderP>
                </SwiperContainer>
              </SwiperSlide>
              {/* <SwiperSlide>
                <SwiperContainer>
                  <SwiperHeaderContainer>
                    <SwiperHeader>
                      <SwiperHeaderH5>Ehinola Abimbola</SwiperHeaderH5>
                      <SwiperHeaderH6>Household User</SwiperHeaderH6>
                    </SwiperHeader>
                    <Image
                      src="/svg/quote.svg"
                      height={90}
                      width={140}
                      alt="quote"
                    />
                  </SwiperHeaderContainer>
                  <SwiperHeaderP>
                    This is a good initiative, but i think your man power is
                    still low, i have scheduled a pick up since july, I was
                    called twice that they are coming for pick-up, up till now
                    Sept 3, nobody have come for the pickup, my store is filled
                    with pet bottles now, I don’t even know how to dispose it
                    again.
                  </SwiperHeaderP>
                </SwiperContainer>
              </SwiperSlide> */}
              <SwiperSlide>
                <SwiperContainer>
                  <SwiperHeaderContainer>
                    <SwiperHeader>
                      <SwiperHeaderH5> Michael Ogunleye</SwiperHeaderH5>
                      <SwiperHeaderH6>Household User</SwiperHeaderH6>
                    </SwiperHeader>
                    <Image src="/svg/quote.svg" height={90} width={140} />
                  </SwiperHeaderContainer>
                  <SwiperHeaderP>
                    Once you schedule they will always find you to pickup. Very
                    fast, efficient and reliable. I recommend for every
                    household.
                  </SwiperHeaderP>
                </SwiperContainer>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperContainer>
                  <SwiperHeaderContainer>
                    <SwiperHeader>
                      <SwiperHeaderH5> Jadesola Samuel</SwiperHeaderH5>
                      <SwiperHeaderH6>Household User</SwiperHeaderH6>
                    </SwiperHeader>
                    <Image src="/svg/quote.svg" height={90} width={140} />
                  </SwiperHeaderContainer>
                  <SwiperHeaderP>
                    This is the best sustainable app I’ve ever seen. Quality
                    services. Keep up the good work
                  </SwiperHeaderP>
                </SwiperContainer>
              </SwiperSlide>
            </Swiper>
          </TestimonialCol1>
          <TestimonialCol2>
            <Image src="/img/Group 626000.png" height={505} width={429} />
          </TestimonialCol2>
        </TestimonialRow>
      </Container>
    </TestimonialContainer>
  );
};

export default Testimonial;
