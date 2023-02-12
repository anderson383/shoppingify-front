import {useEffect, useState} from "react";


export const useFetch = <TypeData = any>(repository: Function, params:any, deps: Array<any>) => {
  const [data, setData] = useState<TypeData>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>()

  useEffect(() => {
    setLoading(true)
    repository(params)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, deps)

  return { data, loading, error }
}
