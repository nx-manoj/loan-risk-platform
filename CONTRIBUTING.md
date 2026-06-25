# Contributing Guide

Thank you for contributing to Loan Risk Platform. This document defines the collaboration standards for this repository.

## Branch Naming

Use descriptive, lowercase branch names with one of these prefixes:

- `feature/<short-description>`
- `bugfix/<short-description>`
- `chore/<short-description>`
- `docs/<short-description>`

Examples:

- `feature/loan-default-baseline-model`
- `bugfix/missing-feature-scaling`

## Commit Message Convention

Follow a conventional style:

```text
<type>(<scope>): <short summary>
```

Common commit types:

- `feat`: New functionality
- `fix`: Bug fix
- `docs`: Documentation updates
- `refactor`: Internal code improvement
- `test`: Test updates
- `chore`: Maintenance work

Example:

```text
feat(models): add baseline training pipeline
```

## Pull Request Process

1. Create a branch from the latest default branch.
2. Keep PRs focused on a single concern.
3. Ensure code, tests, and docs are updated as needed.
4. Open a PR with:
   - Clear title and summary
   - Problem statement and solution
   - Testing notes
   - Related issue (if applicable)
5. Address review feedback and keep discussion in the PR.

## Code Style

- Follow PEP 8 for Python formatting and naming.
- Prefer explicit, typed, and readable code.
- Keep modules cohesive and avoid large multi-purpose files.
- Use docstrings for public modules, classes, and functions.
- Avoid committing secrets, local environment files, or generated artifacts.
