# Hot Tub Animated Home Assistant Card

Animated custom Lovelace card for a hot tub. Pure inline SVG/CSS; no raster images.

## Installation

Copy `hot-tub-animated-ha-card.js` to `/config/www/`, then add it as a Lovelace resource:

```yaml
resources:
  - url: /local/hot-tub-animated-ha-card.js
    type: module
```

## Configuration

```yaml
type: custom:hot-tub-animated-ha-card
title: Hot Tub
pump_entity: switch.example_hot_tub_pump
light_entity: light.example_hot_tub_lights
```

The pump entity is interpreted as:
- `off`, `idle`, `unavailable`, `unknown`, `0` → still/off
- `low`, `medium`, `on`, numeric `1` → low
- `high`, `boost`, `strong`, numeric `2+` → high

HIGH uses synchronized colour-changing LEDs and dense bubbles originating from all four corners and other internal points, clipped to the inside of the tub shell.
