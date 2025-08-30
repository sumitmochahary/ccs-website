import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's scroll restoration
    if("scrollRestoration" in window.history){
      window.history.scrollRestoration = "manual";
    }
    // Always scroll to top
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
