import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function SizeToggleGroup() {
  return (
    <ToggleGroup defaultValue="S" type="single" className="w-fit">
      <ToggleGroupItem value="S" aria-label="Toggle small">
        S
      </ToggleGroupItem>
      <ToggleGroupItem value="M" aria-label="Toggle medium">
        M
      </ToggleGroupItem>
      <ToggleGroupItem value="L" aria-label="Toggle large">
        L
      </ToggleGroupItem>
      <ToggleGroupItem value="XL" aria-label="Toggle extral-large">
        XL
      </ToggleGroupItem>
      <ToggleGroupItem value="XXL" aria-label="Toggle double-extral-large">
        XXL
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
