import React from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";

type Props = Partial<ReCAPTCHAProps>;

function CaptchaInput(props: Props) {
  const generateSiteKey = () => {
    if (props.size === "invisible") {
      return process.env.NEXT_PUBLIC_RECAPTCHA_INVISIBLE_SITE_KEY;
    }
    return process.env.NEXT_PUBLIC_RECAPTCHA_VISIBLE_SITE_KEY;
  };

  return (
    <>
      <ReCAPTCHA {...props} sitekey={`${generateSiteKey()}`} />
    </>
  );
}

export default CaptchaInput;
