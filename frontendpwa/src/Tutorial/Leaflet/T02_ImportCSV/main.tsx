import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';

export default function LT02_ImportCSV() {
  const [data, setData] = useState<any[]>([])
  const { fetchCsvData }  = useFetch();

  useEffect(() => {
    fetchCsvData('/tutorialdata_02.csv', setData)
  }, [])

  console.log(data);

  return (
    <>
      <h3>City in Thailand</h3>
      {data.map(recipe => (
        <p>{recipe.name_en}</p>
      ))}
    </>
  )
}
