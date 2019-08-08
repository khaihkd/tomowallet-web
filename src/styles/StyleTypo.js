import styled from 'styled-components';
// Style Component//

const HeadingBig = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-weight: 600;
  font-family: 'Bai Jamjuree', sans-serif;
`;
const HeadingLarge = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Bai Jamjuree', sans-serif;
`;
const HeadingMedium = styled.h3`
  color: #ffffff;
  font-size: 16px;
`;
const NoticeTextRed = styled.span`
  color: #be445e;
`;
const TextLinkBlue = styled.a`
  color: #5692CD;
`;
const TextBlue = styled.span`
  color: #5692CD;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #0056b3;
  }
`;
const TextYellow = styled.span`
  color: #e4ae63;
`;
const TextLinkYellow = styled.a`
  color: #e4ae63;
  cursor: pointer;
`;
export {
  HeadingBig,
  HeadingLarge,
  HeadingMedium,
  NoticeTextRed,
  TextLinkBlue,
  TextBlue,
  TextYellow,
  TextLinkYellow,
};
