# Quickstart: Initial feature – Systems Dashboard Portfolio

## Prerequisites

- Node.js (LTS) installed
- npm or yarn available on your PATH

## Install and Run (once implementation exists)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test
```

## What You Should See

- A single-page dashboard with:
  - Header/control bar showing name, role, and status indicator.
  - Panels for identity, skill metrics, projects-as-services, capabilities map, and activity/logs.
- Smooth panel interactions:
  - Clicking a project expands it inline instead of navigating away.
  - Command-style navigation (e.g., via a visible trigger) jumps between panels.

## Implementation Notes

- The project uses React + TypeScript + Vite + Vitest as defined in the implementation plan.
- All dashboard content (skills, projects, capabilities, logs) is loaded from configuration files in `src/config/`.
- Tests focus on key user flows: first-load experience, expanding/collapsing projects, navigating via the command-style control, and observing capability highlights/log updates.

