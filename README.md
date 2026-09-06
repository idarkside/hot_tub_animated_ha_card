# Shine 2 Animated Home Assistant Card

Animated custom Lovelace card for the Wellis Shine 2 hot tub. Pure inline SVG/CSS; no raster images.

## Installation

Copy `shine2-animated-ha-card.js` to `/config/www/`, then add it as a Lovelace resource:

```yaml
resources:
  - url: /local/shine2-animated-ha-card.js
    type: module
```

## Configuration

```yaml
type: custom:shine2-animated-ha-card
title: Wellis Shine 2
pump_entity: switch.example_hot_tub_pump
light_entity: light.example_hot_tub_lights
```

The pump entity is interpreted as:
- `off`, `idle`, `0` → still/off
- `low`, `medium`, `on`, numeric `1` → low
- `high`, `boost`, `strong`, numeric `2+` → high

The visual prototype uses synchronized colour-changing LEDs on HIGH and dense bubbles originating from all four corners and other internal points, clipped to the inside of the tub shell.
