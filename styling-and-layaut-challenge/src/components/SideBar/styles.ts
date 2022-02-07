import { styled } from "./../../assets/globalStyles/index";

export const SideBar = styled.div`
  background: ${props => props.theme.colors.dark};
  height: 100vh;
  width: 16.5rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  overflow-Y: "auto";
`;

export const Logo = styled.div`
  height: 2.8rem;
  background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
  border-radius: 5px;
  margin: 0 12%;
  margin-bottom: 2.5rem;
`;

export const ContNav = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
  padding-bottom: 1rem;
  ul {
    li {
      list-style: none;
      text-align: left;
      a {
        position: relative;
        display: block;
        text-decoration: none;
        color: ${props => props.theme.colors.darkBlue};
        font-size: .86rem;
        padding: .8rem 12%;
        display: flex;
        transition: .3s all;
        .square {
          border: 1px solid ${props => props.theme.colors.darkBlue};
          width: 1.1rem;
          height: 1.1rem;
          margin-right: 1.2rem;
          margin-top: .02rem;
        }
        &:before {
          content: "";
          height: 100%;
          width: 0;
          position: absolute;
          background: ${props => props.theme.colors.white};
          border-top-right-radius: 80px;
          border-bottom-right-radius: 80px;
          left: 0;
          top: 0;
          transition: .3s width;
        }
        &:hover {
          color: ${props => props.theme.colors.white};
          .square {
            border-color: ${props => props.theme.colors.white};
          }
          &:before {
            width: .4rem;
          }
        }
        &.active{
          color: ${props => props.theme.colors.white};
          .square {
            border-color: ${props => props.theme.colors.white};
          }
          &:before {
            width: .4rem;
          }
        }
      }
    }
  }
`
export const ContCkeckboxes = styled.div`
  background: ${props => props.theme.colors.gray};
  border-radius: 9px;
  padding: 1.5rem 1rem;
  margin-bottom: 1.4rem;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: .8rem;
    height: .8rem;
    background: red;
    bottom: -.4rem;
    transform: rotate(136deg);
    background: ${props => props.theme.colors.gray};
  }
  .contBoxCheckbox {
    text-align: left;
    li {
      list-style: none;
      margin-bottom: .3rem;
      color: ${props => props.theme.colors.lightGray};
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .styled-checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      font-size: .86rem;
      font-weight: normal;
      position: relative;
      cursor: pointer;
      padding: 0;
    }
    & + label:before {
      content: '';
      margin-right: .6rem;
      display: inline-block;
      vertical-align: text-top;
      width: 1.1rem;
      height: 1.1rem;
      background: transparent;
      border: 1px solid ${props => props.theme.colors.white};
      transition: .3s all;
    }
    &:hover + label:before {
      background: ${props => props.theme.colors.dark};
    }
    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }
    &:checked + label:before {
      background: ${props => props.theme.colors.dark};
    }
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }
    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }
    &:checked + label:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 8px;
      background: ${props => props.theme.colors.white};
      width: .1rem;
      height: .1rem;
      box-shadow: 
        2px 0 0 ${props => props.theme.colors.white},
        4px 0 0 ${props => props.theme.colors.white},
        4px -2px 0 ${props => props.theme.colors.white},
        4px -4px 0 ${props => props.theme.colors.white},
        4px -6px 0 ${props => props.theme.colors.white},
        4px -8px 0 ${props => props.theme.colors.white};
      transform: rotate(45deg);
    }
  }
`;

export const SectionButtomSidebar = styled.div`
 margin: 0 11%;
 
`;

export const ContButton = styled.div`
  button {
    width: 100%;
    background: ${props => props.theme.colors.orange};
    border-radius: 7px;
    color: ${props => props.theme.colors.white};
    display: flex;
    font-size: .86rem;
    justify-content: space-between;
    align-items: center;
    padding: .4rem;
    transition: .4s all;
    .textButton {
      width: calc(100% - 1.8rem);
      padding: 0 .4rem;
    }
    .icon {
      border-radius: 7px;
      height: 100%;
      width: 1.8rem;
      text-align: "center";
      padding: .45rem 0;
      background: ${props => props.theme.colors.lightOrange};
      font-size: .75rem;
      transition: .4s all;
      svg {
        transition: .4s all;
      }
    }
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
