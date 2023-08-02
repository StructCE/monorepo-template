import { render } from "@react-email/render";

import ConfirmSignUp from "./emails/ConfirmSignUp";

function App() {
  const email = render(
    <ConfirmSignUp
      logoUrl="https://www.google.com/logos/doodles/2023/2023-womens-world-cup-aug-02-6753651837110065-s.png"
      confirmationLink="https://google.com"
      email="ava@ava.ava"
    />,
  );

  return (
    <>
      <iframe
        style={{
          width: "100%",
          height: "100%",
          minHeight: "95vh",
          border: "none",
        }}
        srcDoc={email}
      />
    </>
  );
}

export default App;
