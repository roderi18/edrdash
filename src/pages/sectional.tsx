import { CONFIG } from 'src/config-global';

import { SectionalView } from 'src/sections/sectional/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <title>{`Sectional - ${CONFIG.appName}`}</title>

      <SectionalView />
    </>
  );
}
