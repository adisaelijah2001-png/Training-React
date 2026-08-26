import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() =>{
        setdata(data);
        setIsPending(false);
        },3000);
       
      })
      .catch((error) => {
        console.error("Failed to load blogs:", error);
        setIsPending(false);
      });
  }, [url]);

    return { data, isPending}
}
 
export default useFetch;