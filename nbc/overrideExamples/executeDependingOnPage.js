/* eslint-disable */

(() => {
  try {
    function runConditionallyByPage() {
      function matchesUrl(urlString) {
        return window.location.href.includes(urlString);
      }

      const isGeneralSenateResults = matchesUrl(
        '/2020-elections/senate-results',
      );

      if (isGeneralSenateResults) {
        console.log('On senate page');
      }
    }

    runConditionallyByPage();

    window.addEventListener('DOMContentLoaded', function() {
      runConditionallyByPage(styles);
    });
  } catch (e) {
    console.error('Was not able run script');
  }
})();
