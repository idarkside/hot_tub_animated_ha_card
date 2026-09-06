/* Hot Tub Animated HA Card - public card entry point. */
import './shine2-animated-ha-card.js';

const BaseHotTubCard = customElements.get('shine2-animated-ha-card');

if (BaseHotTubCard && !customElements.get('hot-tub-animated-ha-card')) {
  class HotTubAnimatedHaCard extends BaseHotTubCard {}
  customElements.define('hot-tub-animated-ha-card', HotTubAnimatedHaCard);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'hot-tub-animated-ha-card',
  name: 'Hot Tub Animated Card',
  description: 'Animated hot tub Lovelace card using pure SVG/CSS.',
  preview: true,
  documentationURL: 'https://github.com/idarkside/hot_tub_animated_ha_card'
});
