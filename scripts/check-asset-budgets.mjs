import { readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'

const kibibyte = 1024
const budgets = [
  {
    file: 'src/assets/hero/abstract-vector-03.svg',
    maximumBytes: 100 * kibibyte,
    maximumGzipBytes: 40 * kibibyte,
  },
]

function formatKibibytes(bytes) {
  return `${(bytes / kibibyte).toFixed(2)} KiB`
}

let hasFailures = false

for (const budget of budgets) {
  const contents = await readFile(budget.file)
  const gzipBytes = gzipSync(contents, { level: 9 }).byteLength
  const exceedsRawBudget = contents.byteLength > budget.maximumBytes
  const exceedsGzipBudget = gzipBytes > budget.maximumGzipBytes

  console.log(
    `${budget.file}: ${formatKibibytes(contents.byteLength)} raw, ${formatKibibytes(gzipBytes)} gzip`,
  )

  if (exceedsRawBudget || exceedsGzipBudget) {
    hasFailures = true
    console.error(
      `Asset budget exceeded: maximum ${formatKibibytes(budget.maximumBytes)} raw and ${formatKibibytes(budget.maximumGzipBytes)} gzip.`,
    )
  }
}

if (hasFailures) {
  process.exitCode = 1
}
