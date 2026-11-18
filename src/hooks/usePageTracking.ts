
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FB_PIXEL_ID = "968629879626090";

function usePageTracking(): void {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname + location.search;

    if (window.fbq) {
      window.fbq("track", "PageView", {
        event_source_url: window.location.origin + pagePath,
      });
    }
  }, [location.pathname, location.search]);
}

export default usePageTracking;
