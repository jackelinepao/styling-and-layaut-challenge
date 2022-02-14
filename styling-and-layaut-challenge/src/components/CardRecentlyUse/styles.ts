import { styled } from "./../../assets/globalStyles/index";

export const ContCard = styled.div`
  width: calc(96% / 3);
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const BoxFlexbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`
export const TextDate = styled.span`
  color: ${props => props.theme.colors.darkBlue};
  font-size: .84rem;
  margin-top: 1rem;
`

export const SquareOrange = styled.div`
  width: 1.92rem;
  height: 1.6rem;
  background: ${props => props.theme.colors.orange};
  box-shadow: -4px 4px 0 0 ${props => props.theme.colors.ligherOrange};
  margin-left: 4px;
  margin-bottom: 4px;
  margin-right: 1.2rem;
`;

export const Circle = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 50%;
  background: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    margin-left: -.5rem;
  }
`;
export const NumCircle = styled.span`
  font-size: .62rem;
`
export const ContCircles = styled.div`
  display: flex;
  color: ${props => props.theme.colors.dark};
`;

export const ButtomEdit = styled.button`
  padding: 0;
  background: transparent;
  color: #C4C4C4;
  margin-left: .5rem;
  font-size: 1.1rem;
  transition: .3s all;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`

export const TitleCard = styled.h4`
  margin-bottom: .5rem;
`