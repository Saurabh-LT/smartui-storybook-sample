/* eslint-disable */

(() => {
  function justUpdated() {
    console.log('NBC News Updated');
  }
  justUpdated();
  window.addEventListener('nbcNewsUpdated', justUpdated);
})();
