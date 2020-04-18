import styled from 'styled-components';

export const Title = styled.p `
  @import url('${({ font }) => font.url };');
  align-items: center;
  font-size: 48px;
  text-align: center;
  font-family: ${({ font }) => font.name };
`;

export const JobTitle = styled.p `
  text-align: center;
  opacity: 0.7;
  margin: -40px 0 48px 0;
`;