# Data Model: Initial feature – Systems Dashboard Portfolio

## Entities

### Developer Profile
- **Fields**: id, name, primaryRole, location, yearsOfExperience, currentFocus, status
- **Notes**: Single instance representing the portfolio owner; `status` drives the header/system indicator.

### Skill Metric
- **Fields**: id, label, category (backend/frontend/devops/other), level (0–100), trend (up/steady/down), isPrimary
- **Notes**: Backend-oriented skills are marked as primary to visually emphasize backend expertise.

### Project/Service
- **Fields**: id, name, summary, status (Stable/In Progress/Archived), responsibilities, architectureSummary, backendFocus, uiPreviewAsset
- **Notes**: Represents a project as a service; `backendFocus` captures APIs, data, and performance aspects.

### Capability Node
- **Fields**: id, label, type (Auth/API/Database/Cache/Frontend/DevOps/Other), description
- **Relationships**: many-to-many with Project/Service (a project can depend on multiple capabilities; a capability can be used by multiple projects).

### Activity Log Entry
- **Fields**: id, timestampLabel, category (deployment/learning/principle/other), message
- **Notes**: Designed as a pseudo-log; chronological ordering is important.

## Relationships Summary

- Developer Profile → Skill Metrics: one-to-many
- Developer Profile → Projects/Services: one-to-many
- Projects/Services ↔ Capability Nodes: many-to-many
- Developer Profile → Activity Log Entries: one-to-many

## State Considerations

- Content entities (Developer Profile, Skill Metrics, Projects/Services, Capability Nodes, Activity Log Entries) are mostly static or rarely changing and can be loaded as configuration data.
- UI state (expanded project, selected capability, active filters, command palette visibility) is handled purely in frontend state, not persisted.

