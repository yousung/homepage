# LOV-76 Evidence: master Branch Deploy Trigger

Date: 2026-05-07
Issue: LOV-76

## 1) Trigger configuration
- Workflow file: `.github/workflows/deploy.yml`
- Trigger: `on.push.branches: [master]`

## 2) Deploy run proof (GitHub Actions API)
Command used:
```bash
curl -sS 'https://api.github.com/repos/yousung/homepage/actions/workflows/deploy.yml/runs?branch=master&per_page=5' | jq '{total_count, workflow_runs: [.workflow_runs[] | {id,display_title,head_branch,event,status,conclusion,html_url,created_at,updated_at}]}'
```

Result snapshot:
- `total_count`: `1`
- latest run id: `25325562987`
- `head_branch`: `master`
- `event`: `push`
- `status`: `completed`
- `conclusion`: `success`
- URL: `https://github.com/yousung/homepage/actions/runs/25325562987`

## 3) Reversibility (rollback)
If branch policy must revert, change one line in `.github/workflows/deploy.yml`:
- from `branches: [master]`
- to `branches: [main]`

Then commit and push to update trigger behavior.
