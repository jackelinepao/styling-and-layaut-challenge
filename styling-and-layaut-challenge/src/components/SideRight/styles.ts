import { styled } from "../../assets/globalStyles/index";

export const SideRight = styled.div`
  background: #F5F6FC;
  height: 100vh;
  width: 18rem;
  padding: 2rem 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  overflow-Y: "auto";
  right: 0;
  top: 0;
`;

export const HeaderSideRight = styled.div`
  .rightNav {
    ul {
      display: flex;
      align-items: center;
      li {        
        list-style: none;
        .square {
          display: block;
          border: .1rem solid #C4C4C4;
          width: 1.1rem;
          height: 1.1rem;
          margin-right: .6rem;
          transition: .4s all;
          background: #C4C4C4;
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

