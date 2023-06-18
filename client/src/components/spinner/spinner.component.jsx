import { SpinnerOverlay, Loader } from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <Loader></Loader>
    </SpinnerOverlay>
  );
};

export default Spinner;
