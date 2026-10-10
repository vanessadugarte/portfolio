import { useId, useRef, useState } from 'react'
import './WhoIsPayingApp.scss'

function formatMessage(template, replacements) {
  return Object.entries(replacements).reduce(
    (message, [key, value]) => message.replace(`{${key}}`, value),
    template,
  )
}

function WhoIsPayingApp({ copy }) {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [error, setError] = useState(false)
  const [editError, setEditError] = useState(false)
  const [status, setStatus] = useState(null)
  const [winner, setWinner] = useState(null)
  const inputId = useId()
  const errorId = useId()
  const nameInputRef = useRef(null)
  const editButtonRefs = useRef(new Map())
  const nextParticipantId = useRef(1)

  const focusEditButton = (participantId) => {
    window.requestAnimationFrame(() => editButtonRefs.current.get(participantId)?.focus())
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const normalizedName = name.trim()

    if (!normalizedName) {
      setError(true)
      return
    }

    const participant = { id: nextParticipantId.current, name: normalizedName }
    nextParticipantId.current += 1
    setParticipants((currentParticipants) => [...currentParticipants, participant])
    setName('')
    setError(false)
    setWinner(null)
    setStatus({ key: 'addedStatus', replacements: { name: normalizedName } })
    nameInputRef.current?.focus()
  }

  const startEditing = (participant) => {
    setEditingId(participant.id)
    setEditingName(participant.name)
    setEditError(false)
    setStatus(null)
  }

  const cancelEditing = () => {
    const participantId = editingId
    setEditingId(null)
    setEditingName('')
    setEditError(false)
    focusEditButton(participantId)
  }

  const saveParticipant = (event, participantId) => {
    event.preventDefault()
    const normalizedName = editingName.trim()

    if (!normalizedName) {
      setEditError(true)
      return
    }

    setParticipants((currentParticipants) => currentParticipants.map((participant) => (
      participant.id === participantId ? { ...participant, name: normalizedName } : participant
    )))
    setEditingId(null)
    setEditingName('')
    setEditError(false)
    setWinner(null)
    setStatus({ key: 'updatedStatus', replacements: { name: normalizedName } })
    focusEditButton(participantId)
  }

  const removeParticipant = (participantId) => {
    const participantIndex = participants.findIndex(({ id }) => id === participantId)
    const participant = participants[participantIndex]
    const remainingParticipants = participants.filter(({ id }) => id !== participantId)
    const nextFocusTarget = remainingParticipants[participantIndex] ?? remainingParticipants[participantIndex - 1]

    setParticipants(remainingParticipants)
    setWinner(null)
    setStatus({ key: 'removedStatus', replacements: { name: participant.name } })

    if (editingId === participantId) {
      setEditingId(null)
      setEditingName('')
      setEditError(false)
    }

    if (nextFocusTarget) {
      focusEditButton(nextFocusTarget.id)
    } else {
      window.requestAnimationFrame(() => nameInputRef.current?.focus())
    }
  }

  const drawWinner = () => {
    if (participants.length === 0) return

    const participant = participants[Math.floor(Math.random() * participants.length)]
    setWinner(participant)
    setStatus(null)
  }

  return (
    <section className="who-is-paying-app" aria-labelledby="who-is-paying-app-title">
      <div className="who-is-paying-app__decoration" aria-hidden="true" />
      <div className="who-is-paying-app__intro">
        <p>{copy.eyebrow}</p>
        <h2 id="who-is-paying-app-title">{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      <div className="who-is-paying-app__workspace">
        <div className="who-is-paying-app__controls">
          <form className="who-is-paying-app__add-form" onSubmit={handleAdd} noValidate>
            <label htmlFor={inputId}>{copy.nameLabel}</label>
            <div className="who-is-paying-app__add-row">
              <input
                id={inputId}
                ref={nameInputRef}
                type="text"
                value={name}
                maxLength="40"
                autoComplete="off"
                aria-describedby={error ? errorId : undefined}
                aria-invalid={Boolean(error)}
                placeholder={copy.namePlaceholder}
                onChange={(event) => {
                  setName(event.target.value)
                  if (error) setError(false)
                }}
              />
              <button type="submit">{copy.addButton}</button>
            </div>
            {error && <p className="who-is-paying-app__error" id={errorId} role="alert">{copy.nameError}</p>}
          </form>

          <div className="who-is-paying-app__draw">
            <button type="button" disabled={participants.length === 0} onClick={drawWinner}>
              {copy.drawButton}
            </button>
            <div className="who-is-paying-app__result" aria-live="polite" aria-atomic="true">
              <h3>{copy.resultTitle}</h3>
              <p>{winner ? formatMessage(copy.winnerMessage, { name: winner.name }) : copy.resultEmpty}</p>
            </div>
          </div>
        </div>

        <div className="who-is-paying-app__participants">
          <div className="who-is-paying-app__participants-heading">
            <h3>{copy.listTitle}</h3>
            <span aria-label={formatMessage(
              participants.length === 1 ? copy.participantCountOne : copy.participantCountOther,
              { count: participants.length },
            )}>
              {participants.length}
            </span>
          </div>

          {participants.length === 0 ? (
            <p className="who-is-paying-app__empty">{copy.emptyList}</p>
          ) : (
            <ul aria-label={copy.listLabel}>
              {participants.map((participant) => (
                <li key={participant.id}>
                  {editingId === participant.id ? (
                    <form onSubmit={(event) => saveParticipant(event, participant.id)} noValidate>
                      <label htmlFor={`${inputId}-${participant.id}`}>{copy.editNameLabel}</label>
                      <input
                        id={`${inputId}-${participant.id}`}
                        type="text"
                        value={editingName}
                        maxLength="40"
                        autoComplete="off"
                        aria-invalid={Boolean(editError)}
                        autoFocus
                        onChange={(event) => {
                          setEditingName(event.target.value)
                          if (editError) setEditError(false)
                        }}
                      />
                      {editError && <p className="who-is-paying-app__error" role="alert">{copy.nameError}</p>}
                      <div className="who-is-paying-app__edit-actions">
                        <button type="submit">{copy.saveButton}</button>
                        <button type="button" onClick={cancelEditing}>{copy.cancelButton}</button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <span>{participant.name}</span>
                      <div className="who-is-paying-app__participant-actions">
                        <button
                          ref={(element) => {
                            if (element) editButtonRefs.current.set(participant.id, element)
                            else editButtonRefs.current.delete(participant.id)
                          }}
                          type="button"
                          aria-label={formatMessage(copy.editButtonLabel, { name: participant.name })}
                          onClick={() => startEditing(participant)}
                        >
                          {copy.editButton}
                        </button>
                        <button
                          type="button"
                          aria-label={formatMessage(copy.removeButtonLabel, { name: participant.name })}
                          onClick={() => removeParticipant(participant.id)}
                        >
                          {copy.removeButton}
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}

          <p className="who-is-paying-app__status" aria-live="polite" aria-atomic="true">
            {status ? formatMessage(copy[status.key], status.replacements) : ''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoIsPayingApp
