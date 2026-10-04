# GitHub Collaboration Strategy

## Recommended Feature Branches
- `feature/salabadeshwaran-s-login---welcome-screen` -> **Salabadeshwaran S** (Work on Login & Welcome Screen)
- `feature/salabadeshwaran-s-items---tasks-manager` -> **Salabadeshwaran S** (Work on Items & Tasks Manager)
- `feature/salabadeshwaran-s-team---collaboration-hub` -> **Salabadeshwaran S** (Work on Team & Collaboration Hub)
- `feature/monisha-main-home-dashboard` -> **Monisha** (Work on Main Home Dashboard)
- `feature/monisha-progress---analytics-view` -> **Monisha** (Work on Progress & Analytics View)
- `feature/monisha-account---settings-screen` -> **Monisha** (Work on Account & Settings Screen)

---

## 7-Step Collaboration Lifecycle
### Step 1: Pull — Get the Newest Code
```bash
git checkout main && git pull origin main
```
Before starting, download the latest updates from GitHub to avoid conflicts.

### Step 2: Branch — Create Your Personal Feature Branch
```bash
git checkout -b feature/<your-name>-<screen-name>
```
Isolate your work on a new branch so you can build without disturbing teammates.

### Step 3: Develop — Open Your Assigned Files & Build
```bash
npm run dev
```
Open the files assigned to you in the project structure and build the screen layout.

### Step 4: Commit — Save Your Changes Locally
```bash
git add . && git commit -m "feat: build screen layout and buttons"
```
Take a snapshot of your progress with a short message describing what you did.

### Step 5: Push — Upload Branch to GitHub
```bash
git push -u origin feature/<your-name>-<screen-name>
```
Send your commits to GitHub so your team can test and review your progress.

### Step 6: Pull Request — Open a Pull Request (PR)
```bash
gh pr create --base main --title "[Feature] Add screen placeholder"
```
Ask a teammate to review your code and give a thumbs up.

### Step 7: Merge — Merge into Main Branch
```bash
git checkout main && git pull origin main
```
Once approved, merge your screen into the main codebase.

