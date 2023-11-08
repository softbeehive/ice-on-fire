import { ref } from 'vue'
import type { Ref } from 'vue'

export type House = {
  coatOfArms: string
  founded: string
  name: string
  region: string
  titles: string[]
  url: string
  words: string
}

export function useHouses(query: Ref<string>) {
  const houses = ref<House[]>()
  const loading = ref(false)

  const loadHouses = async () => {
    loading.value = true
    const relativeBase = import.meta.env.PUBLIC_API_SEARCH_HOUSES
    const housesURL = `${relativeBase}/${query.value}`
    return fetch(housesURL)
      .then((res) => res.json())
      .then((data) => {
        houses.value = data.houses || []
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    houses,
    loadHouses,
    loading,
  }
}

export function useHouse(id: Ref<string>) {
  const house = ref<House>()
  const loading = ref(false)

  const loadHouse = async () => {
    loading.value = true
    const relativeBase = import.meta.env.PUBLIC_API_HOUSES
    const houseURL = `${relativeBase}/${id.value}`
    return fetch(houseURL)
      .then((res) => res.json())
      .then((data) => {
        house.value = data
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    house,
    loadHouse,
    loading,
  }
}
