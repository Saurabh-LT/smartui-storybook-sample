/* eslint-disable */

/* Important classes/selectors ****
  GLOBAL                marquee                 [data-test="global-marquee"]

  presidential-polling  polls chart             [data-testid="presidential-polls-chart__container"]

  president-results     Electoral college       [data-testid="presidential-bop__electoral-college"]
  president-results     Remain vote bar         [data-testid="president-bop-remaining-vote"]
  president-results     National map svg:       #us-national-map-general-elections
  president-results     State in national map:  #us-national-map-general-elections #montana-national-map
  president-results     Map tooltip:            #natinal-map .tooltip //NOTE: Not unique per page!

  senate-results        senate BOP bars         [data-testid="senate-bop-bar"]
  senate-results        National map svg:       [data-testid="senate-bop-module"] #us-national-map-general-elections
  senate-results        State in senate map:    [data-testid="senate-bop-module"] #us-national-map-general-elections #montana-national-map
  senate-results        Map tooltip:            #national-map .tooltip //NOTE: Not unique per page!
  senate-results        Horseshoe svg:          #senate-bop-horseshoe
  senate-results        Horseshoe tooltip:      #state-map__tooltip .tooltip //NOTE: Not unique per page!

  house-results         house BOP bars          [data-testid="house-bop-bar"]
  house-results         National map svg:       [data-testid="house-bop-module"] #us-national-map-general-elections
  house-results         State in house map:     [data-testid="house-bop-module"] #us-national-map-general-elections #montana-national-map
  house-results         Map tooltip:            #national-map .tooltip //NOTE: Not unique per page!
  house-results         Horseshoe svg:          #house-bop-horseshoe

*/

(() => {
  function appendStyleTag(id = 'nbc-emergency-override-styles') {
    const styles = `
      // Add CSS styles here
      [data-testid="presidential-polls-chart__container"] {
        display: none;
      }

      .test {
        color: black;
      }
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

  window.addEventListener('DOMContentLoaded', function() {
    appendStyleTag();
  });
})();
