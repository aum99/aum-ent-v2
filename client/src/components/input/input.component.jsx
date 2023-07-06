import { InputDiv, InputBox, InputLabel } from "./input.styles";

const Input = ({ name, type, value, label }) => {
  return (
    <InputDiv>
      <InputBox
        type={type}
        name={name}
        value={value}
        autoComplete="off"
        required
      ></InputBox>
      <InputLabel>{label}</InputLabel>
    </InputDiv>
  );
};

export default Input;
