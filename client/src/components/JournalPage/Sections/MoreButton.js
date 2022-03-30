import React from "react";
import styled from "styled-components";

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function MoreButton({ limit, count, foo }) {
  return (
    <MoreButtonContainer>
      {limit > count ? null : (
        <img
          src="/images/plus.png"
          onClick={foo}
          alt="more"
          width="50px"
        />
      )}
    </MoreButtonContainer>
  );
}

export default MoreButton;
