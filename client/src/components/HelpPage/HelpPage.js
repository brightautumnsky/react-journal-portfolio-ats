import React from "react";
import PageContainer from "../utils/PageContainer";
import FAQ from "./Sections/FAQ";
import Help from "./Sections/Help";

function HelpPage() {
  return (
    <PageContainer>
      <FAQ />
      <Help />
    </PageContainer>
  );
}

export default HelpPage;
