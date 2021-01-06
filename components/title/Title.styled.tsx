import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin: 0;
  margin-top: 12rem;
  text-align: center;
  line-height: 1.15;
  font-size: 4rem;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

export const StyledDescription = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: center;
`;

export const StyledCode = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
