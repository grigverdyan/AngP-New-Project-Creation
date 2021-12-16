import {Dropdown} from "../models/dropdown";


export const COUNTIES: Dropdown[] = [
  {id: 1, value: "Berat"},
  {id: 2, value: "Dibër"},
  {id: 3, value: "Durrës"},
  {id: 4, value: "Elbasan"},
  {id: 5, value: "Fier"},
  {id: 6, value: "Gjirokastër"},
  {id: 7, value: "Korçë"},
  {id: 8, value: "Kukës"},
];


export const DISTRICTS: Dropdown[] = [
  {id: 1, value: "Kuçovë", parentId: 1},
  {id: 2, value: "Poliçan", parentId: 2},
  {id: 3, value: "Skrapar", parentId: 3},
  {id: 4, value: "Ura Vajgurore", parentId: 4},

  {id: 5, value: "Bulqizë", parentId: 2},
  {id: 6, value: "Dibër", parentId: 2},
  {id: 7, value: "Klos", parentId: 2},
  {id: 8, value: "Mat", parentId: 2},

  {id: 9, value: "Gjepalaj", parentId: 3},
  {id: 10, value: "Durrës", parentId: 3},
  {id: 11, value: "Ishëm", parentId: 3},
  {id: 12, value: "Katund i Ri", parentId: 3},
  {id: 13, value: "Maminas", parentId: 3},

  {id: 14, value: "Belsh", parentId: 4},
  {id: 15, value: "Cërrik", parentId: 4},
  {id: 16, value: "Elbasan", parentId: 4},
  {id: 17, value: "Gramsh", parentId: 4},
  {id: 18, value: "Librazhd", parentId: 4},
  {id: 19, value: "Peqin", parentId: 4},
  {id: 20, value: "Prrenjas", parentId: 4},

  {id: 21, value: "Cakran", parentId: 5},
  {id: 22, value: "Dërmenas", parentId: 5},
  {id: 23, value: "Fier", parentId: 5},
  {id: 24, value: "Frakull", parentId: 5},
  {id: 25, value: "Kuman", parentId: 5},
  {id: 26, value: "Kurjan", parentId: 5},

  {id: 27, value: "Antigonë", parentId: 6},
  {id: 28, value: "Cepo", parentId: 6},
  {id: 29, value: "Gjirokastër", parentId: 6},
  {id: 30, value: "Lazarat", parentId: 6},
  {id: 31, value: "Libohovë", parentId: 6},
  {id: 32, value: "Lunxhëri", parentId: 6},

  {id: 33, value: "Drenovë", parentId: 7},
  {id: 34, value: "Gorë", parentId: 7},
  {id: 35, value: "Korçë", parentId: 7},
  {id: 36, value: "Lekas", parentId: 7},
  {id: 37, value: "Libonik", parentId: 7},
  {id: 38, value: "Maliq", parentId: 7},

  {id: 39, value: "Kukës", parentId: 8},
  {id: 40, value: "Arrën", parentId: 8},
  {id: 41, value: "Bicaj", parentId: 8},
  {id: 42, value: "Bushtricë", parentId: 8},
  {id: 43, value: "Grykë-Çaje", parentId: 8},
  {id: 44, value: "Kalis", parentId: 8},

]

