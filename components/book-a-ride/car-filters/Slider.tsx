import * as Slider from '@radix-ui/react-slider'
import { useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SliderKey, useSliderStore } from '@/store/slider-store'

interface SliderInputProps {
  min: number
  max: number
  syncWithUrl?: boolean
  sliderKey: SliderKey
}

const SliderInput = ({
  min,
  max,
  syncWithUrl = false,
  sliderKey,
}: SliderInputProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { ranges, setRange } = useSliderStore()
  const currentRange = ranges[sliderKey]?.values || [min, max]
  const type = ranges[sliderKey]?.type || 'price'

  // URL sync effect
  useEffect(() => {
    if (syncWithUrl) {
      const minParam = searchParams.get(`${sliderKey}_min`)
      const maxParam = searchParams.get(`${sliderKey}_max`)

      if (minParam && maxParam) {
        const newRange: [number, number] = [
          parseInt(minParam),
          parseInt(maxParam),
        ]
        if (
          newRange[0] !== currentRange[0] ||
          newRange[1] !== currentRange[1]
        ) {
          setRange(sliderKey, newRange)
        }
      }
    }
  }, [searchParams, sliderKey, syncWithUrl])

  // Debounced URL update
  const updateURL = useCallback(
    (range: [number, number]) => {
      if (syncWithUrl) {
        const params = new URLSearchParams(searchParams.toString())
        params.set(`${sliderKey}_min`, range[0].toString())
        params.set(`${sliderKey}_max`, range[1].toString())
        router.replace(`?${params.toString()}`, { scroll: false })
      }
    },
    [router, searchParams, sliderKey, syncWithUrl]
  )

  const handleValueChange = useCallback(
    (newValue: number[]) => {
      const newRange: [number, number] = [newValue[0], newValue[1]]
      setRange(sliderKey, newRange)
      updateURL(newRange)
    },
    [setRange, sliderKey, updateURL]
  )

  return (
    <div>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={currentRange}
        min={min}
        max={max}
        step={type === 'price' ? 10 : 1}
        onValueChange={handleValueChange}
      >
        <Slider.Track className="bg-[#E8ECEB] relative grow rounded-full h-[8px]">
          <Slider.Range className="absolute bg-primary rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white border rounded-[10px] hover:bg-violet3 border-primary"
          aria-label="Volume"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-white border rounded-[10px] hover:bg-violet3 border-primary"
          aria-label="Volume"
        />
      </Slider.Root>
    </div>
  )
}

export default SliderInput