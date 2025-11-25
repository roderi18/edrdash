import { CONFIG } from 'src/config-global';

import { NationalView } from 'src/sections/national/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`National - ${CONFIG.appName}`}</title>

      <NationalView />
    </>
  );
}
