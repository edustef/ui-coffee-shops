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
  onChange,
  error,
  inputMode,
  placeholder,
  ...restProps
}: FieldProps) {
  return (
    <label className="flex flex-wrap items-center gap-2">
      <span className="w-12 shrink-0 text-left md:text-right text-gray-700 text-lg font-bold">
        {label}
      </span>
      <input
        type="text"
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'flex-1 rounded-md border px-3 py-2 text-lg outline-none transition-colors',
          error ? 'border-red-500' : 'focus:border-blue-500',
        )}
        {...restProps}
      />
      {error && <span className="w-full pl-14 text-xs text-red-500">{error}</span>}
    </label>
  )
}
