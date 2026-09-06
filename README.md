# Hot Tub Animated Home Assistant Card

A custom Home Assistant Lovelace card for an animated hot tub visual, built with inline HTML, CSS and SVG. No external or raster images are used by the card.

## Features

- Animated hot tub rendered directly with SVG/CSS
- Pump OFF mode: completely still, with animation and lights disabled
- Pump LOW mode: gentle water movement, ripples and blue lighting
- Pump HIGH mode: faster water movement, dense internal bubbles and synchronised colour-changing LEDs
- Bubbles are clipped to the inside of the tub so they do not appear outside the shell
- Bubble movement varies in direction and originates from the corners and other internal areas
- Responsive Lovelace card layout
- Uses Home Assistant entity state to control the animation
- No iframe and no external image dependency

## Screenshots

### Pump OFF

The tub is completely still with the lighting and water effects disabled.

> Screenshot coming from the live Home Assistant card.

### Pump LOW

Gentle water movement with blue lighting and slower ripple effects.

> Screenshot coming from the live Home Assistant card.

### Pump HIGH

Fast water movement, synchronised colour-changing LEDs and dense bubbles moving throughout the water.

> Screenshot coming from the live Home Assistant card.

## Installation

### Option 1 — HACS

The card can be added to HACS as a custom repository until it is available through the normal HACS store.

1. Open **HACS** in Home Assistant.
2. Go to **Frontend**.
3. Open the three-dot menu in the top-right.
4. Select **Custom repositories**.
5. Enter:

   `https://github.com/idarkside/hot_tub_animated_ha_card`

6. Select **Lovelace** as the repository category.
7. Click **Add**.
8. Find **Hot Tub Animated HA Card** in HACS and install it.
9. Restart Home Assistant if requested.
10. Add the card to your dashboard using the configuration below.

### Option 2 — Manual installation

Download `hot-tub-animated-ha-card.js` and place it in:

`/config/www/`

Then add the resource under **Settings → Dashboards → Resources**:

```yaml
resources:
  - url: /local/hot-tub-animated-ha-card.js
    type: module
```

## Configuration

Add the card to a dashboard with:

```yaml
type: custom:hot-tub-animated-ha-card
title: Hot Tub
pump_entity: switch.example_hot_tub_pump
light_entity: light.example_hot_tub_lights
```

### Configuration options

| Option | Required | Description |
|---|---|---|
| `type` | Yes | Must be `custom:hot-tub-animated-ha-card` |
| `title` | No | Title displayed at the top of the card. |
| `pump_entity` | Yes | Home Assistant entity used to determine the pump animation state. |
| `light_entity` | No | Reserved for the hot tub light entity. |

### Pump state mapping

The card interprets the pump entity as follows:

| Entity state | Animation |
|---|---|
| `off`, `idle`, `unavailable`, `unknown`, `0` | OFF — completely still |
| `low`, `medium`, `on`, `1` | LOW — gentle movement and blue lighting |
| `high`, `boost`, `strong`, `2+` | HIGH — fast movement, bubbles and colour-changing LEDs |

## Updating

If installed through HACS, use **HACS → Frontend → Hot Tub Animated HA Card → Update** when a new version is released.

After updating, clear the browser cache or perform a hard refresh if Home Assistant continues displaying the previous JavaScript version.

## Repository

https://github.com/idarkside/hot_tub_animated_ha_card
