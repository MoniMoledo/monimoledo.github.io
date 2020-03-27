import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, Date, ImageWrapper } from 'components/Card/look';
import { FixedSizeCard, Image, Description, Company } from './look';

export default function ExperienceCard({
  period,
  jobTitle,
  company,
  location,
  description,
  url,
  image,
  color,
  text,
}) {
  const { beginDate, endDate } = period;
  const [imgExists, setImgExist] = useState(true);

  return (
    <FixedSizeCard color={color} text={text}>
      <Title>
        <Company>{company}</Company>
        <Date>
          {beginDate} - {endDate}
        </Date>
      </Title>
      <p>
        {jobTitle} - <small>{location}</small>
      </p>
      <Description>{description}</Description>
      <ImageWrapper href={url} target="_blank" rel="noopener noreferrer">
        {imgExists && <Image src={image} title={company} alt={company} onError={() => setImgExist(false)}/>}
      </ImageWrapper>
    </FixedSizeCard>
  );
}

ExperienceCard.propTypes = {
  period: PropTypes.shape({
    beginDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};
