import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const REQUIRED_BASE = 'main'
export const REQUIRED_HEAD = 'develop'

export function validateMainPullRequestSource({
  baseRef,
  headRef,
  headRepository,
  expectedRepository,
}) {
  const violations = []

  if (baseRef !== REQUIRED_BASE) {
    violations.push(`la rama base debe ser ${REQUIRED_BASE}, no ${baseRef || '(vacía)'}`)
  }

  if (headRef !== REQUIRED_HEAD) {
    violations.push(`la rama de origen debe ser ${REQUIRED_HEAD}, no ${headRef || '(vacía)'}`)
  }

  if (!expectedRepository) {
    violations.push('no se definió el repositorio esperado')
  } else if (headRepository !== expectedRepository) {
    violations.push(
      `el repositorio de origen debe ser ${expectedRepository}, no ${headRepository || '(vacío)'}`,
    )
  }

  return violations
}

function runFromEnvironment(environment = process.env) {
  const violations = validateMainPullRequestSource({
    baseRef: environment.PR_BASE_REF,
    headRef: environment.PR_HEAD_REF,
    headRepository: environment.PR_HEAD_REPOSITORY,
    expectedRepository: environment.EXPECTED_REPOSITORY,
  })

  if (violations.length > 0) {
    for (const violation of violations) {
      console.error(`::error title=Origen de PR no permitido::${violation}`)
    }
    process.exitCode = 1
    return
  }

  console.log(
    `Origen permitido: ${environment.PR_HEAD_REPOSITORY}:${environment.PR_HEAD_REF} → ${environment.PR_BASE_REF}`,
  )
}

const isEntryPoint =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isEntryPoint) {
  runFromEnvironment()
}
