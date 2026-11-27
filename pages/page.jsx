import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3.3rem;
  font-weight: 850;
  letter-spacing: -0.05rem;
  margin-block: 0 0.5rem;
`;

export default function Page({ title, children }) {
  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      {children}
    </PageContainer>
  );
}
