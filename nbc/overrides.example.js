// Copy to overrides.js to run

/* eslint-disable */
(() => {
  // HELPERS:
  function appendStyleTag(id = 'nbc-emergency-override-styles') {
    const styles = `
      /* Add CSS styles here */

    `;
    try {
      const css = document.createElement('style');
      css.id = id;

      if (css.styleSheet) css.styleSheet.cssText = styles;
      else css.appendChild(document.createTextNode(styles));

      document.getElementsByTagName('head')[0].appendChild(css);
    } catch (e) {
      console.log('Was not able to add override styles');
    }
  }

  const matchesUrl = urlToMatch => {
    try {
      return window.location.href.includes(urlToMatch);
    } catch (e) {
      console.error('Was not able to matchUrl');
    }
  };

  // Runs repeatedly after each update
  function justUpdated() {}

  // Only runs once on page load
  function loaded() {}

  window.addEventListener('DOMContentLoaded', function () {
    loaded();
  });
  window.addEventListener('nbcNewsUpdated', justUpdated);

  console.log('Firecracker loaded overrides.js');
  justUpdated();
})();
