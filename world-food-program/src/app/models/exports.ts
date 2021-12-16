
// export interface Project {
//   id:number
//   code: string,
//   title: string,
//   description: string,
//   status: string,
//   // start: Date,
//   // end: Date,
//   // duration: number,
//   sectors:ProjectSector[],
//   locations:ProjectLocation[]
// }

//projectSector projectid s3ectorid, percent
//location

export interface Sector {
  id:number
  sectorName: string,
}

export interface Location {
  id:number;
  county: string;
  district: string;
  locationPercent: number
}
