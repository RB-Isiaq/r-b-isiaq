'use client';

import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { usePathname } from 'next/navigation';

const GTM_ID = 'G-31S01YWQKM';

export default function GTM() {
  const pathname = usePathname();

  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
    TagManager.initialize({ gtmId: GTM_ID });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'pageview', page: pathname });
  }, [pathname]);

  return null;
}
