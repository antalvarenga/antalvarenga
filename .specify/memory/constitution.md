<!--
  SYNC IMPACT REPORT
  ==================
  Version Change: 1.0.0 → 1.1.0
  Type: MINOR (material expansion: TDD requirement added)
  Date: 2026-01-28

  Modified Principles:
  - IV. Test Coverage → IV. Test-Driven Development (TDD) & Coverage
    - Align framework text with Vitest
    - Require Red-Green-Refactor for new/changed behavior

  Added Sections:
  - N/A (principle expanded/renamed; no new top-level sections)

  Removed Sections:
  - N/A

  Templates Status:
  - ✅ `.specify/templates/plan-template.md`: No changes required
  - ✅ `.specify/templates/spec-template.md`: No changes required
  - ✅ `.specify/templates/tasks-template.md`: No changes required

  Follow-up TODOs:
  - None
-->

# Antonio Alvarenga Personal Webpage Constitution

## Core Principles

### I. Modern Tech Stack

The project MUST use current Long Term Support (LTS) versions of core technologies:

- **React**: Current LTS version only, using Vite
- **TypeScript**: Current LTS version only
- **Testing Framework**: Vitest as the primary testing framework

**Rationale**: LTS versions provide stability, security patches, and community support while avoiding bleeding-edge instability. This ensures long-term maintainability and reduces technical debt.

### II. Component-Driven Architecture

Components MUST follow these design principles:

- **Reusability**: Create reusable components when it makes sense (shared patterns, repeated UI elements)
- **Single Responsibility**: Each component should have one clear purpose
- **Size Discipline**: Avoid huge components - break down complex UI into smaller, composable pieces
- **Composition Over Complexity**: Favor component composition over monolithic implementations

**Rationale**: Modular components improve maintainability, testability, and code reuse. Smaller components are easier to understand, debug, and refactor.

### III. Code Quality & Security (NON-NEGOTIABLE)

All code MUST meet these standards:

- **High Quality**: Clear naming, proper abstractions, documented where necessary, no code smells
- **Security First**: Follow OWASP guidelines, sanitize inputs, secure authentication/authorization if applicable
- **Type Safety**: Leverage TypeScript's type system fully - no `any` types without justification
- **Linting & Formatting**: Automated tools (ESLint, Prettier) enforced in CI/CD
- **Code Review**: All changes must pass review for quality and security concerns

**Rationale**: Quality and security are non-negotiable. Technical debt and security vulnerabilities compound over time and become exponentially more expensive to fix.

### IV. Test-Driven Development (TDD) & Coverage

Testing requirements:

- **Framework**: Vitest MUST be used for all tests.
- **TDD (default)**: For any new behavior or behavior change, development MUST follow Red-Green-Refactor:
  - **Red**: Write a failing test that captures the desired behavior (user-visible or business-meaningful).
  - **Green**: Implement the minimum change to make the test pass.
  - **Refactor**: Improve design/structure (including component decomposition) while keeping tests green.
- **Exceptions**: Pure refactors MAY be done without writing new tests first, but MUST keep existing tests passing and MUST not change externally observable behavior.
- **Test Types**: Unit tests for business logic and UI logic; integration tests for critical user flows (e.g., primary navigation and project expansion).
- **Coverage Goals**: Focus on critical paths, regression-prone logic, and complex interactions — test what matters most.
- **Test Quality**: Tests MUST be readable, deterministic, and fast (avoid flakiness and time-based waits when possible).

**Rationale**: TDD reduces regressions, improves design (especially component boundaries), and provides living documentation of intended behavior. Vitest aligns with Vite and TypeScript while keeping fast feedback loops.

### V. Performance & User Experience

The application MUST be fast and consistent:

- **Performance**: Fast load times, optimized bundles, lazy loading where appropriate
- **UX Consistency**: Uniform design language, predictable interactions, accessible UI
- **Responsiveness**: Mobile-first approach, works across devices and screen sizes
- **Optimization**: Monitor bundle size, minimize dependencies, optimize assets

**Rationale**: User experience directly impacts usability. Fast, consistent interfaces create trust and engagement. Performance is a feature, not an afterthought.

## Technology Standards

**Required Stack**:

- **Frontend Framework**: React (current LTS)
- **Language**: TypeScript (current LTS)
- **Testing**: Vitest
- **Package Manager**: npm or yarn (document choice in README)
- **Bundler**: Vite

**Dependency Management**:

- Minimize external dependencies - evaluate necessity vs. maintenance burden
- Keep dependencies updated regularly
- Document all major dependencies and their purpose
- Security audit dependencies periodically

**Build & Deploy**:

- Automated builds in CI/CD
- Environment-based configuration (dev, staging, prod)
- Static asset optimization (minification, compression)

## Development Workflow

**Branching Strategy**:

- Feature branches following naming convention: `###-feature-name`
- Main branch protected - requires review and passing CI
- Squash merge for clean history

**Code Review Requirements**:

- All changes require review
- Verify constitution compliance (component size, quality, security)
- Check test coverage for new features
- Validate performance implications

**Quality Gates**:

- Linting passes (ESLint)
- Formatting passes (Prettier)
- Type checking passes (TypeScript compiler)
- Tests pass (Vitest)
- Build succeeds

**Documentation**:

- README with setup instructions
- Component documentation for reusable components
- API documentation if backend exists
- Update docs as part of feature delivery

## Governance

**Amendment Process**:

- Constitution changes require documented rationale
- Version bump according to semantic versioning:
  - **MAJOR**: Principle removal or incompatible changes
  - **MINOR**: New principles or expanded guidance
  - **PATCH**: Clarifications, typos, non-semantic refinements
- Update this file and sync dependent templates

**Compliance**:

- All pull requests must demonstrate constitution compliance
- Violations must be justified in Complexity Tracking section of plan documents
- Review process includes constitution check
- Use `.specify/templates/` for consistent feature planning

**Runtime Guidance**:

- This constitution governs all development practices
- Refer to specification templates in `.specify/templates/` for feature development workflow
- Use command files in `.cursor/commands/` for guided development tasks

**Version**: 1.1.0 | **Ratified**: 2026-01-20 | **Last Amended**: 2026-01-28
