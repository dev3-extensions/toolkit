import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { Check } from 'lucide-react'

interface CheckboxProps {
  text: string
  defaultState: boolean
  onChange: (isChecked: boolean) => void
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <form className="flex items-center">
      <CheckboxPrimitive.Root
        id={'id' + props.text}
        defaultChecked={props.defaultState}
        onCheckedChange={(checked: boolean) => {
          if (props.onChange) {
            props.onChange(checked)
          }
        }}
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded',
          'radix-state-checked:bg-blue-500 radix-state-unchecked:bg-gray-300 hover:radix-state-unchecked:bg-gray-400 dark:radix-state-unchecked:bg-neutral-800 dark:hover:radix-state-unchecked:bg-neutral-800/75',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
        )}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="h-4 w-4 self-center text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor={'id' + props.text}
        className="ml-3 cursor-pointer select-none text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {props.text}
      </LabelPrimitive.Label>
    </form>
  )
}

export { Checkbox }
