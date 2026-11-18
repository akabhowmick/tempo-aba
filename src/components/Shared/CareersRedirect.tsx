import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Client-side redirect (SSG can't redirect at build time). The real server-side 301
// lives in public/_redirects; this covers in-app navigation.
export const CareersRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/contact", { replace: true });
  }, [navigate]);
  return null;
};
