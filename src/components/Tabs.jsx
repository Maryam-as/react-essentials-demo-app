export default function Tabs({ children, buttons, ButtonsContainer }) {
  // sets component type dinamically
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
