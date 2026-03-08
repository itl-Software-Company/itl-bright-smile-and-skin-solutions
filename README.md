# No.1 Bright Smile & Skin Solutions

Professional teeth whitening, fat dissolving, advanced facials, and vitamin injections in Eccleshall, Staffordshire.

## Tech Stack

- **Static HTML/CSS/JS** — no framework, no build step
- **Nginx** — lightweight container serving
- **Google Cloud Run** — managed hosting
- **GitHub Actions** — CI/CD pipelines

## Deployment

| Environment | Branch | Trigger | Cloud Run Service |
|-------------|--------|---------|-------------------|
| **Staging** | `staging` | Auto on push | `bright-smile-staging` |
| **Production** | `main` | Manual dispatch | `bright-smile-prod` |

### Flow

```
local → push to staging → auto-deploy to staging
                        → test & approve
                        → merge to main
                        → manual deploy to production
```

### Required GitHub Secrets

| Secret | Value |
|--------|-------|
| `GCP_PROJECT_ID` | Your GCP project ID (e.g. `itl-bright-smile-web`) |
| `GCP_SA_KEY` | Service account key JSON with Cloud Run Admin + Storage Admin + Artifact Registry Admin |

## Local Development

Open `index.html` directly in browser, or use Docker:

```bash
docker build -t bright-smile .
docker run -p 8080:8080 bright-smile
# Visit http://localhost:8080
```

## Project by ITL Software Company
