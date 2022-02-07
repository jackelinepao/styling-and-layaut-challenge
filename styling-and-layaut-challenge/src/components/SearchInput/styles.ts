import { styled } from "./../../assets/globalStyles/index";

export const InputSearch = styled.div`
  margin-bottom: 2rem;
  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: .7rem .8rem;
    font-size: .82rem;
    color: ${props => props.theme.colors.dark};
    &::placeholder {
      color: #BCBECA;
    }
  }
`;