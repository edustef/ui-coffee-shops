import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'

interface FieldProps extends Omit<ComponentProps<'input'>, 'onChange'> {
  label: string
  onChange: (value: string) => void
  error?: string
  inputMode?: 'decimal' | 'text'
  type?: 'text'
}

export function Field({
  label,
  defaultValue,
  onChange,
  error,
  inputMode,
  placeholder,
  ...restProps
}: FieldProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-gray-700 text-lg font-bold">{label}</span>
      <input
        type="text"
        inputMode={inputMode}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'rounded-md border px-3 py-2 text-sm outline-none transition-colors',
          error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500',
        )}
        {...restProps}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  )
}
