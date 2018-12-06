import styled from 'styled-components';
import Card from 'components/Card';

export const FixedSizeCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 750px;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  margin-top: 1rem;
`;

export const ImageWrapper = styled.a`
  text-align: center;
`;

export const Description = styled.p`
  opacity: 0.8;
  text-align: justify;
`;

export const Company = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: -1rem;
`;

export const Date = styled.p`
  text-align: right;
`;

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
`;