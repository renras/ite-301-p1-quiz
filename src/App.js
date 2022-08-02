import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [universities, setUniversities] = useState(null);

  useEffect(() => {
    if (!universities) {
      (async () => {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=United+States"
        );
        const data = await response.json();
        setUniversities(data.slice(0, 5));
      })();
    }
  }, [universities]);

  if (!universities) return <div>Loading...</div>;

  return (
    <div className="p-5">
      {/* image, name, section */}
      <div className="d-flex gap-5 align-items-center">
        <img
          src="https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg"
          alt="banana"
          className="img-thumbnail"
          style={{ aspectRatio: "1 / 1", width: "10rem" }}
        />
        <div className="d-flex flex-column">
          <p>RENZO VISPERAS</p>
          <p>UP-FA1-BSITWEBDEV3-7</p>
        </div>
      </div>

      {/* universities */}
      <div className="d-flex flex-column gap-5 mt-5">
        {universities.map((university, index) => (
          <div
            key={index}
            className="p-5 shadow-sm"
            style={{ maxWidth: "50rem" }}
          >
            <label htmlFor={university.name} className="form-label">
              Name
            </label>
            <input
              id={university.name}
              className="form-control"
              readOnly
              value={university.name}
            />
            <label
              htmlFor={`${university.country} - ${university.name}`}
              className="form-label mt-4"
            >
              Country
            </label>
            <input
              id={`${university.country} - ${university.name}`}
              className="form-control"
              readOnly
              value={university.country}
            />
            <label htmlFor="web-pages" className="form-label mt-4">
              Web Pages
            </label>
            {university.web_pages.map((page, index) => (
              <input
                id="web-pages"
                key={index}
                value={page}
                className="form-control"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
