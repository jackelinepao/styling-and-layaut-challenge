import { styled } from "../../assets/globalStyles/index";

export const ContCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxSection = styled.div`
  margin-bottom: 2.4rem;
`;

export const TitleSection = styled.div`
  margin-bottom: 1.4rem;
  .rightNav {
    ul {
      display: flex;
      align-items: center;
      li {        
        list-style: none;
        .square {
          display: block;
          border: .1rem solid #9D9FAF;
          width: 1.1rem;
          height: 1.1rem;
          margin-left: .6rem;
          transition: .4s all;
          &.active {
            border-color: ${props => props.theme.colors.dark};
          }
          &:hover {
            border-color: ${props => props.theme.colors.dark};
          }
        }
      }
    }
  }
`;