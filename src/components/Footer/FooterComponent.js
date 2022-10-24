import { CFooter, CLink } from '@coreui/react';

function FooterComponent() {
  return (
    <div style={{backgroundColor: "red"}}>
      <CFooter>
        <div>
          <CLink href="https://">AdvancoSA</CLink>
          <span>&copy; 2021 creativeLabs.</span>
        </div>
        <div>
          <span>Powered by</span>
          <CLink href="https://coreui.io">AdvancoSA</CLink>
        </div>
      </CFooter>
    </div>
  );
}

export default FooterComponent;
