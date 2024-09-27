import { Apartment } from "@mui/icons-material"
import { ItemListComponent } from "../components/ItemListComponent"

interface BuildingType {
  id: number,
  name: string,
  address: string,
  description: string,
}
const buildingArr: BuildingType[] = [
  {
    id: 1,
    name: 'Batiment A',
    address: 'aile A',
    description: 'Lorem Ipsum dolor sit amet'
  },
  {
    id: 2,
    name: 'Batiment B',
    address: 'aile B',
    description: 'Lorem Ipsum dolor sit amet'
  }
]

export const ListBuilding = () => {
  return (
    <>
      {
        buildingArr.map((item) => (
          <ItemListComponent onView={() => console.log('test')} onEdit={() => { }} icon={<Apartment />}>
            <>{item.name}</>
          </ItemListComponent>
        ))
      }
    </>
  )
}
