# Publishing to GitHub Pages

Follow these steps to publish the Dayton Operations Dashboard prototype using GitHub Pages.

## 1. Create a GitHub Repository

1. Go to <https://github.com/new>.
2. Repository name suggestion: `dayton-operations-dashboard`.
3. Choose public or private.
4. Do not add a README, `.gitignore`, or license in GitHub if you are uploading this folder as-is.
5. Create the repository.

## 2. Upload the Project

If Git is installed:

```powershell
cd "C:\Users\Bens-PC\Documents\Dayton Operations Dashboard"
git init
git add index.html styles.css app.js jszip.min.js sample_hwa.xlsx README.md DEPLOYMENT.md .gitignore .nojekyll
git commit -m "Initial Dayton Operations Dashboard prototype"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/dayton-operations-dashboard.git
git push -u origin main
```

If Git is not installed:

1. Open the new repository on GitHub.
2. Click **Add file** > **Upload files**.
3. Upload these files:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `jszip.min.js`
   - `sample_hwa.xlsx`
   - `README.md`
   - `DEPLOYMENT.md`
   - `.gitignore`
   - `.nojekyll`
4. Commit the uploaded files to the `main` branch.

## 3. Enable GitHub Pages

1. In the repository, go to **Settings**.
2. Open **Pages** from the left navigation.
3. Under **Build and deployment**, set:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**.

GitHub will publish the site after the Pages build completes. The URL will look like:

```text
https://YOUR-USERNAME.github.io/dayton-operations-dashboard/
```

## 4. Verify the Published Site

Open the GitHub Pages URL and check:

- The dashboard loads.
- The role selector works.
- The sample data appears.
- Uploading `sample_hwa.xlsx` populates the dashboard.
- Mobile layout works in your phone browser.

## Important Prototype Limitations

- Uploaded fixture data is not saved after refresh.
- Override alerts are generated in-browser only.
- Email export creates a CSV-style download; it does not send real email.
- Authentication is simulated with the access-level selector.
- Production hosting should use a backend for login, audit records, persistent fixture imports, and real alert delivery.
