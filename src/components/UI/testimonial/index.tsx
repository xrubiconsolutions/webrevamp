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
                <div className="mb-32">
                  <h1>to</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vero, dignissimos corporis perferendis sed nesciunt ad
                    id deleniti corrupti quisquam provident ipsam exercitationem
                    excepturi minima iusto! Quidem nesciunt quae eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-32">
                  <h1>to</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vero, dignissimos corporis perferendis sed nesciunt ad
                    id deleniti corrupti quisquam provident ipsam exercitationem
                    excepturi minima iusto! Quidem nesciunt quae eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-32">
                  <h1>to</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vero, dignissimos corporis perferendis sed nesciunt ad
                    id deleniti corrupti quisquam provident ipsam exercitationem
                    excepturi minima iusto! Quidem nesciunt quae eius.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mb-32">
                  <h1>to</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum vero, dignissimos corporis perferendis sed nesciunt ad
                    id deleniti corrupti quisquam provident ipsam exercitationem
                    excepturi minima iusto! Quidem nesciunt quae eius.
                  </p>
                </div>
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
