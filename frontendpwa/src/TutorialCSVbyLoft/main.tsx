import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

function TutorialCSVbyLoft() {
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

export default TutorialCSVbyLoft

// REFERENCE 
// 1. Youtube Video 
// * https://youtu.be/435HHLfR-c0?si=Jd6EH0_ElUCAem12
// 2. Code 
// * https://gist.github.com/thecodingloft/caec4950ce9e313ae33d77f000b20e76