
export interface BuildingType {
  id?: number,
  name?: string,
  address?: string,
  description?: string,
  equimentListId: number[]
}

export interface EquipmentType {
  id: number,
  name: string,
  type?: string,
  description?: string
}
