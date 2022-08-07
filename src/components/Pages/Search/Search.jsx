import ContentItem from "../../Content/ContentItem";
import { useViewport } from "../../hooks";
import "./Search.scss"
import "../../Content/Content.scss"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
function Search() {
    const width = useViewport();
    const {listHeros,search} = useSelector(state => state)
    const [data,setData] = useState([]);
    console.log(data)
    useEffect(() => {
       const result = listHeros.filter((hero) => {
            return hero.name.toLowerCase().includes(search.toLowerCase());
        })
        setData(result)
    },[search])
    return ( 
        <div className="search"style={{
            gridTemplateColumns: `repeat(${
              width > 1200
                ? 5
                : width > 1000
                ? 4
                : width > 760
                ? 3
                : width > 600
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {data.map((item) => item && <ContentItem key={item.id} data={item} />)}
        </div>
     );
}

export default Search;