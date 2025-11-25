import { CONFIG } from 'src/config-global';

import { RegionalView } from 'src/sections/regional/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Regional - ${CONFIG.appName}`}</title>

      <RegionalView />
    </>
  );
}
