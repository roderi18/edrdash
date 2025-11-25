import { CONFIG } from 'src/config-global';

import { DestView } from 'src/sections/dest/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Dest - ${CONFIG.appName}`}</title>

      <DestView />
    </>
  );
}
