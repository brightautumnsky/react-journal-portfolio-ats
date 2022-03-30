import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../_actions/user_action";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Autoplay } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/autoplay";

SwiperCore.use([Scrollbar, Autoplay]);

const StyledLogout = styled.div`
  padding: 150px 70px 0;
  height: 500px;
  text-align: center;
  p {
    cursor: pointer;
  }
  .swiper-container {
    width: 50vw;
  }
`;

const SwiperContainer = styled.div`
  margin-top: 36px;
  padding-bottom: 50px;
  .swiper {
    height: 250px;
  }
  .slide {
    display: flex;
    justify-content: center;
    background: transparent;
    img {
      height: 100%;
      padding: 20px 0;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 766px) {
    .swiper {
      height: 70%;
    }
  }
`;

function Logout({ props }) {
  const dispatch = useDispatch();
  const guestHandler = () => {
    const body = {
      email: "user@email.com",
      password: "1234567",
    };

    dispatch(userLogin(body)).then((response) => {
      if (!response.payload.loginSuccess) {
        alert("로그인을 실패했습니다");
      }
    });

    props.history.push("/journal/list");
  };
  return (
    <StyledLogout>
      <SwiperContainer>
        <Swiper
          className="swiper"
          modules={[Autoplay]}
          autoplay={true}
          scrollbar={{ draggable: true }}
          spaceBetween={50}
        >
          <SwiperSlide className="slide">
            <img src="/images/slides/slide1.png" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src="/images/slides/slide2.jpg" alt="slide2" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src="/images/slides/slide3.jpg" alt="slide3" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src="/images/slides/slide4.jpg" alt="slide4" />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <h3>오늘의 일기는 로그인 후 이용 가능한 서비스입니다.</h3>
      <p onClick={guestHandler}>게스트 입장하기</p>
    </StyledLogout>
  );
}

export default Logout;
