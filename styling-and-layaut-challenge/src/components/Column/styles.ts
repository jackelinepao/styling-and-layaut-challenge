import { styled } from "../../assets/globalStyles/index";

export const Column = styled.div`
  .contColumn {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: .75rem .95rem;
    margin-bottom: 1rem;
    div {
      &:first-child {
        width: 2.4rem
      }
      &:nth-child(2) {
        width: calc(50% - 2.4rem - 2rem)
      }
      &:nth-child(3) {
        width: calc(25%)
      }
      &:nth-child(4) {
        width: calc(25%)
      }
      &:last-child {
        width: 2rem;
        text-align: right;
      }    
    }
    &.headerTable {
      background: transparent;
      margin-bottom: .4rem;
      div {
        &:first-child {
          width: calc(50% - 2.4rem)
        }
        &:nth-child(2) {
          width: calc(25%)
        }
        &:nth-child(3) {
          width: calc(25%)
        }
        &:last-child {
          width: 2rem;
          text-align: right;
        }    
      }
    }
  }
  
.form-group input[type=checkbox] {
  display: none;
  cursor: pointer;
}
label {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
}

input[type=checkbox] + label:before {
  content:'';
  -webkit-appearance: none;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 10px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
}

input[type=checkbox]:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  width: 4px;
  height: 10px;
  border: 1px solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.btnEdit {
    padding: 0;
    background: transparent;
    color: #C4C4C4;
    margin-left: .5rem;
    font-size: 1.1rem;
    transition: .3s all;
    &:hover {
      color: ${props => props.theme.colors.orange};
    }
  }
`;
export const LabelCustom = styled.input<{ color: string }>`
  & + label:before {
    background-color: ${props => props.color};
  }
`;