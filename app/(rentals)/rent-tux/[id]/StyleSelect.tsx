import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function StyleSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full py-6 border-black shadow-none rounded-none">
        <SelectValue placeholder="Choose" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Style</SelectLabel>
          <SelectItem value="Classic">Classic</SelectItem>
          <SelectItem value="Shawl Collar">Shawl Collar</SelectItem>
          <SelectItem value="Double-Breasted">Double-Breasted</SelectItem>
          <SelectItem value="Velvet">Velvet</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
