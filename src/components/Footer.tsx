import { Button, FlexLayout, PageFooter, TextLink, TextStyles } from "@cedcommerce/ounce-ui";
import React from "react";
import { ExternalLink } from "react-feather";

const Footer = () => {
  return (
    <PageFooter>
      <div className="ced-footer">
        A CedCommerce Inc Product @{new Date().getFullYear()}. <span className="inte__font--bold">Need Help?</span>{" "}
        <Button
          type="TextButton"
          onClick={() => window.open("https://chat.whatsapp.com/EN8oKJuzO3Z0vvPfKE3wEa", "_blank")}
        >
          Get Support
        </Button>
        {" "} or {" "}
        <Button
          type="TextButton"
          onClick={() => window.open("https://calendly.com/cedmeet/shopline-project", "_blank")}
        >
          <FlexLayout halign="center" spacing="extraTight">
            Book a Call
            <ExternalLink color="#2E90FA" size={16} style={{
              marginTop: "2px"
            }} />
          </FlexLayout>
        </Button>
      </div>
    </PageFooter>
  );
};

export default Footer;
