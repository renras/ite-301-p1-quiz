import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="p-5">
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
    </div>
  );
}

export default App;
