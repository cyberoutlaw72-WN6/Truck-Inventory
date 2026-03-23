# Firetruck Inventory

This workspace now contains a working firetruck inventory app for Cordova and a browser preview page. The interface includes three apparatus views:

- Driver side
- Passenger side
- Rear view

Each view has clickable compartments. Selecting a compartment updates the inventory panel with the stored equipment list.

## Where The App Lives

- Cordova web assets: `MyApp/www`
- Browser preview page: `index.html`

The browser preview page loads the same data and UI logic used by the Cordova app, so both stay aligned.

## Run The Browser Preview

Open `index.html` in a browser.

## Run The Cordova App

From `MyApp`, run the normal Cordova workflow for Android, for example:

1. `npm install`
2. `npx cordova prepare android`
3. `npx cordova build android`

## Data Updates

Inventory data is defined in `MyApp/www/inventoryData.js`. Each compartment belongs to one of the three truck views and carries its own equipment list.