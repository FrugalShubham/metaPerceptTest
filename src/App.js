import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const divStyle = {
    background: "#B482E5",
    background: "linear-gradient(135deg, #B482E5, #8558B5)"
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span class="fs-4">Title</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="btn btn-outline-primary" aria-current="page">
                Button
              </a>
            </li>
          </ul>
        </header>
      </div>

      <div class="px-4 py-5 my-5 text-center text-white" style={divStyle}>
        <h1 class="display-5 fw-bold text-body-emphasis">Title</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            the world’s most popular front-end open source toolkit, featuring
            Sass variables and mixins, responsive grid system, extensive
            prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center text-white">
            <button type="button" class="btn btn-primary btn-lg px-4 ">
              Read More
            </button>
          </div>
        </div>
      </div>

      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data ? (
              data.map((article) => (
                <div class="col" key={article.id}>
                  <div class="card shadow-sm">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>{article.Name}</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="15%" y="50%" fill="#eceeef" dy=".3em">
                        {article.Name}
                      </text>
                    </svg>
                    <div class="card-body">
                      <p class="card-text">{article.ShortDesc}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            View
                          </button>
                        </div>
                        <small class="text-body-secondary">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
