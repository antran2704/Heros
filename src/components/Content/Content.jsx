import { useViewport } from "../hooks";
import "./Content.scss";
import ContentItem from "./ContentItem";

function Content({ data }) {
  const width = useViewport();
  

  return (
    <div
      className="content"
      style={{
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

export default Content;
