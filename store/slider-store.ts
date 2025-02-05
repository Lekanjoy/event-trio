import { create } from "zustand";

export type SliderType = "price" | "year";
export type SliderKey = "price" | "year";

interface RangeValues {
  [key: string]: {
    values: [number, number];
    type: SliderType;
  };
}

interface SliderState {
  ranges: RangeValues;
  setRange: (key: SliderKey, range: [number, number]) => void;
  reset: () => void;
}

const getDefaultRanges = (): RangeValues => ({
  price: {
    values: [10, 500] as [number, number],
    type: "price" as SliderType,
  },
  year: {
    values: [2000, 2026] as [number, number],
    type: "year" as SliderType,
  },
});

export const useSliderStore = create<SliderState>((set) => ({
  ranges: getDefaultRanges(),
  setRange: (key: SliderKey, range: [number, number]) =>
    set((state) => ({
      ranges: {
        ...state.ranges,
        [key]: {
          ...state.ranges[key],
          values: range,
        },
      },
    })),
  reset: () => set({ ranges: getDefaultRanges() }),
}));
