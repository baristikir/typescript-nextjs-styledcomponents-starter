import React from 'react';
import { StyledCode, StyledDescription, StyledTitle } from './Title.styled';

const Title: React.FC = () => {
  return (
    <main>
      <StyledTitle>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </StyledTitle>
      <StyledDescription>
        Get started by editing <StyledCode>pages/index.js</StyledCode>
      </StyledDescription>
    </main>
  );
};

export default Title;
