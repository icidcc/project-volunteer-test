// V1's verified delivery function reused without loading or modifying its UI.
(function(root){'use strict';
  async function deliverShare(payload, nav, legacyCopy) {
    let failed = false;
    if (typeof nav.share === 'function') {
      try {
        if (!nav.canShare || nav.canShare(payload)) {
          await nav.share(payload);
          return 'shared';
        }
      } catch (error) {
        if (error?.name === 'AbortError') return 'cancelled';
        failed = true;
      }
    }
    try {
      if (!nav.clipboard?.writeText) throw new Error('NO_CLIPBOARD');
      await nav.clipboard.writeText(payload.url);
      return 'copied';
    } catch {
      if (legacyCopy(payload.url)) return 'copied';
      return failed ? 'failed' : 'manual';
    }
  }
  const api={deliverShare};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.RESULT_V2_SHARE=api;
})(typeof window!=='undefined'?window:globalThis);
