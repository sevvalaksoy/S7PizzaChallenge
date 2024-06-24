import styled from "styled-components";

const LabelStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
}

const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 6px;
  margin-right: 1rem;
  outline: none;
  cursor: pointer;
  background-color: #FAF7F2;
  position: relative;

  &:checked {
    background-color: #FDC913;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 29px;
    background-color: transparent;
    border-radius: 3px;
    visibility: hidden;
  }
  &:checked::before {
    visibility: visible;
  }
  &:checked::after {
    content: "✔";
    position: absolute;
    font-family: "Barlow";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: 200;
    color: black;
  }
`

export default function Check ({changeFn, value, label, test}) {

    return (
        <label className="ingredients" style={LabelStyle}>
                <CheckboxInput type="checkbox" onChange={changeFn} name="malzemeler" value={value} data-cy={test} />{label}
        </label>
    )
}