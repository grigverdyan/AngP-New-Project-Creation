
export interface Sector {
  sectorName: string,
  sectorPercent: number
}

export interface Project {
  code: string,
  title: string,
  description: string,
  status: string,
  start: Date,
  end: Date,
  duration: number
}
