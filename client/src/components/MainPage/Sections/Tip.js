import React from "react";
import styled from "styled-components";

const StyledTip = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  h3 {
    width: fit-content;
    padding-bottom: 6px;
    border-bottom: 2px solid black;
    margin: 0 0 36px 16px;
  }
`;

const TipBox = styled.div`
  display: flex;
  gap: 0 24px;
  justify-content: space-around;
  padding: 0 20px;
  margin-top: 36px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const TipItem = styled.div`
  p {
    font-weight: 400;
    text-align: justify;
  }
  img {
    width: 270px;
  }
  @media screen and (max-width: 1024px) {
    width: 320px;
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
`;

function Tip() {
  return (
    <StyledTip>
      <h3>일기를 써야하는 이유</h3>
      <TipBox>
        <TipItem>
          <img src="/images/tip-1.jpg" alt="tip1" />
          <p>나를 되돌아보는 시간을 가지고 생각하는 힘을 기를 수 있습니다.</p>
        </TipItem>
        <TipItem>
          <img src="/images/tip-2.jpg" alt="tip2" />
          <p>
            규칙적인 일기 작성은 성취감을 주고 작은 습관을 만들어나갈 수 있도록
            해줍니다.
          </p>
        </TipItem>
        <TipItem>
          <img src="/images/tip-3.jpg" alt="tip3" />
          <p>
            생각을 글로 옮기게 되면 말을 조리있게 할 수 있는 데 도움을 줍니다.
          </p>
        </TipItem>
        <TipItem>
          <img src="/images/tip-4.jpg" alt="tip4" />
          <p>
            일기를 통해 가까운 내일, 그리고 먼 미래까지 인생의 구체적인 계획을
            세울 수 있습니다.
          </p>
        </TipItem>
      </TipBox>
    </StyledTip>
  );
}

export default Tip;
