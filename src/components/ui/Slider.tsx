import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

type SliderProps = {
  setStrengthOption: React.Dispatch<React.SetStateAction<number>>
}

export const Slider = ({ setStrengthOption }: SliderProps) => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={50}
      aria-label="value"
      onValueChange={(value: number[]) => {
        setStrengthOption(value[0] / 50) // Set the strength option to 0, 1 or 2
      }}
      className="group relative flex h-5 w-36 touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-neutral-300 group-hover:bg-neutral-400 dark:bg-neutral-600 group-hover:dark:bg-neutral-700">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500 group-hover:bg-blue-600" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={clsx(
          'block h-5 w-5 rounded-full bg-blue-500 dark:bg-white',
          'focus:outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
        )}
      />
    </SliderPrimitive.Root>
  )
}
