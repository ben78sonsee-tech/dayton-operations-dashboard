# Dayton Operations Dashboard

Mobile-first static prototype for the Dayton Open Space Hockey Facility operations dashboard.

The app helps Dayton upload fixture data, detect changes, calculate operating requirements, allocate casual staff first, expose remaining volunteer requirements to the responsible club, track coverage, and audit manual club-allocation overrides.

## Features

- Dayton Admin, Eastern Blades Admin, and Harlies Admin access levels
- HWA fixture upload from `.xlsx` or CSV
- Fixture change detection
- Weekend operations dashboard
- Casual staff coverage cards
- Club-scoped volunteer requirements
- Team availability view
- Manual override audit trail and alert export
- Reports for coverage and hours
- Mobile-first responsive layout

## Run Locally

This is a static app. No build step is required.

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8765/index.html
```

## Main Files

- `index.html` - application shell and views
- `styles.css` - responsive dashboard styling
- `app.js` - sample data, role logic, upload parsing, dashboard calculations
- `jszip.min.js` - local dependency used to parse `.xlsx` files in the browser
- `sample_hwa.xlsx` - sample upload file for testing

## GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for publishing steps.

## Notes

This is a client-side prototype. Data is stored in browser memory only and resets on refresh. A production build should add authentication, persistent storage, server-side upload processing, audit logging, and email delivery.
