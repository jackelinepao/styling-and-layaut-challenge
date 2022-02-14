import { styled } from "../../assets/globalStyles/index";

export const Column = styled.div`
  padding: .45rem 0;
  border-bottom: 1px solid #E0E7F1;
  &:last-child {
    border-bottom: 0;
  }
  .contColumn {
    width: 100%;
    display: flex;
    align-items: center;
    h4 {
      font-size: .78rem;
    }
    h6 {
      color: ${props => props.theme.colors.darkBlue};
    }
    .boxPeso {
      background: ${props => props.theme.colors.white};
      padding: .4rem .4rem;
      font-size: .7rem;
      width: 3.5rem;
      text-align: center;
      border-radius: 8px;
    }
    div:nth-child(2){
      width: calc(100% - 1.5rem - 3.5rem);
      padding: 0 .5rem;
    }
  }
`;

export const Square = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 8px;
`;