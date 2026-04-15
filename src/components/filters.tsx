import { useAtom, useAtomValue } from 'jotai'
import {
  nameAtom,
  positionXAtom,
  positionXErrorAtom,
  positionYAtom,
  positionYErrorAtom,
} from '../atoms/filters'
import { Field } from './ui/field'

export function Filters() {
  const [positionX, setPositionX] = useAtom(positionXAtom)
  const [positionY, setPositionY] = useAtom(positionYAtom)
  const [name, setName] = useAtom(nameAtom)
  const positionXError = useAtomValue(positionXErrorAtom)
  const positionYError = useAtomValue(positionYErrorAtom)

  return (
    <div className="mt-4 flex flex-col gap-4">
      <Field
        label="X"
        value={positionX}
        inputMode="decimal"
        onChange={setPositionX}
        error={positionXError}
      />
      <Field
        label="Y"
        value={positionY}
        inputMode="decimal"
        onChange={setPositionY}
        error={positionYError}
      />
      <Field label="Name" value={name} onChange={setName} />
    </div>
  )
}
