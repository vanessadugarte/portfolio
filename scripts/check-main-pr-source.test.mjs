import assert from 'node:assert/strict'
import test from 'node:test'

import { validateMainPullRequestSource } from './check-main-pr-source.mjs'

const expectedRepository = 'vanessadugarte/portfolio'

test('accepts develop from the expected repository into main', () => {
  const violations = validateMainPullRequestSource({
    baseRef: 'main',
    headRef: 'develop',
    headRepository: expectedRepository,
    expectedRepository,
  })

  assert.deepEqual(violations, [])
})

test('rejects a work branch targeting main', () => {
  const violations = validateMainPullRequestSource({
    baseRef: 'main',
    headRef: 'fix/6-inicializacion-git-flow',
    headRepository: expectedRepository,
    expectedRepository,
  })

  assert.match(violations.join('\n'), /rama de origen debe ser develop/)
})

test('rejects develop from a fork with the same branch name', () => {
  const violations = validateMainPullRequestSource({
    baseRef: 'main',
    headRef: 'develop',
    headRepository: 'otra-persona/portfolio',
    expectedRepository,
  })

  assert.match(violations.join('\n'), /repositorio de origen debe ser vanessadugarte\/portfolio/)
})

test('rejects an unexpected base branch', () => {
  const violations = validateMainPullRequestSource({
    baseRef: 'develop',
    headRef: 'develop',
    headRepository: expectedRepository,
    expectedRepository,
  })

  assert.match(violations.join('\n'), /rama base debe ser main/)
})
