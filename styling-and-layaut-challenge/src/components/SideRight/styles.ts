import { styled } from "../../assets/globalStyles/index";

export const SideRight = styled.div`
  background: #F5F6FC;
  height: 100vh;
  overflow-Y: auto;
  width: 18rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  right: 0;
  top: 0;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #343951;
  }
  .contSideRight {
    margin: 0 11%;
  }
  h2 {
    margin-bottom: 1.5rem
  }
  
`;

export const HeaderSideRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid #E0E7F1;
  margin-bottom: 1.2rem;
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
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  h6 {
    font-size: .85rem;
    margin-right: .5rem;
  }
  .avatar {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    background: #C4C4C4;
  }
`;

export const BoxWhite = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 18px;
  padding: 1rem 1.8rem;
  text-align: center;
  h4 {
    margin-bottom: .2rem
  }
  p {
    font-size: .75rem;
    color: #858A9D;
  }
`;
export const BoxColor = styled.div`
  height: 5rem;
  width: 100%;
  background: linear-gradient(270.15deg, #689FF8 0.15%, #FF6860 54.7%, #FF9F00 99.9%);
  border-radius: 11px;
  margin-bottom: 1.8rem;
`;

export const ContButton = styled.div`
  margin-top: 1.2rem;
  a {
    display: block;
    width: 100%;
    background: ${props => props.theme.colors.orange};
    border-radius: 7px;
    color: ${props => props.theme.colors.white};
    font-size: .86rem;
    justify-content: space-between;
    align-items: center;
    padding: .85rem 1rem;
    transition: .4s all;
    text-decoration: none;
    text-align: center;
    &:hover {
      background: ${props => props.theme.colors.lightOrange};
      .icon {
        background: ${props => props.theme.colors.orange};
        svg {
          transform: scale(1.2);
        }
      }
    }
  }
`;