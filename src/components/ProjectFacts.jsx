function ProjectFactIcon({ factIndex }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'project-detail-fact-icon',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.75,
    viewBox: '0 0 24 24',
  }

  if (factIndex === 0) {
    return <svg {...commonProps}><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /></svg>
  }

  if (factIndex === 1) {
    return <svg {...commonProps}><path d="m14.7 6.3 3 3M4 20l4.6-1.1L18.2 9.3a2.1 2.1 0 0 0-3-3l-9.6 9.6L4 20Z" /><path d="m12.8 8.2 3 3" /></svg>
  }

  return <svg {...commonProps}><path d="M21 7.5a6 6 0 0 1-8.7 5.3L6.1 19A2.1 2.1 0 1 1 3 16l6.2-6.2A6 6 0 0 1 16.5 3l-3.1 3.1 4.5 4.5L21 7.5Z" /></svg>
}

export default function ProjectFacts({ facts }) {
  return (
    <dl className="project-detail-facts">
      {facts.map(({ label, value }, factIndex) => (
        <div key={label}>
          <ProjectFactIcon factIndex={factIndex} />
          <dt className="project-detail-fact-label">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

