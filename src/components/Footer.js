import { useState } from "react";

const Footer = () => {
  const [footerData] = useState([
    {
      id: 1,
      title: "Company Info",
      link1: "About Us",
      link2: "Carrier",
      link3: "We are hiring",
      link4: "Blog",
    },
    {
      id: 2,
      title: "Legal",
      link1: "About Us",
      link2: "Carrier",
      link3: "We are hiring",
      link4: "Blog",
    },
    {
      id: 3,
      title: "Features",
      link1: "Business Marketing",
      link2: "User Analytic",
      link3: "Live Chat",
      link4: "Unlimited Support",
    },
    {
      id: 4,
      title: "Resources",
      link1: "IOS & Android",
      link2: "Watch a Demo",
      link3: "Customers",
      link4: "API",
    },
  ]);
  return (
    <footer className="footer py-50">
      <div className="container">
        <div className="row gy-3">
          {footerData.map((data) => (
            <div className="col-12 col-sm-6 col-md-3 col-xl-2" key={data.id}>
              <div>
                <h3 className="fw-bold fs-6 mb-20">{data.title}</h3>
                <a
                  href="/"
                  className="fs-14 text-gray d-block text-decoration-none mb-2"
                >
                  {data.link1}
                </a>
                <a
                  href="/"
                  className="fs-14 text-gray d-block text-decoration-none mb-2"
                >
                  {data.link2}
                </a>
                <a
                  href="/"
                  className="fs-14 text-gray d-block text-decoration-none mb-2"
                >
                  {data.link3}
                </a>
                <a
                  href="/"
                  className="fs-14 text-gray d-block text-decoration-none mb-2"
                >
                  {data.link4}
                </a>
              </div>
            </div>
          ))}

          <div className="col-12 col-md-12 col-xl-4">
            <div>
              <h3 className="fw-bold fs-6 mb-20">Get In Touch</h3>

              <form className="bg-gray-light position-relative border-radius-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control bg-gray-light h-58 ps-20 pe-137 text-gray fs-14 fw-normal"
                />
                <button
                  type="submit"
                  className="text-white fs-14 border-1 border-gray-light bg-blue-light btn position-absolute top-0 end-0 btn-submit h-58 text-capitalize"
                >
                  subscribe
                </button>
              </form>
              <p className="fs-12 text-gray fw-normal mb-0 mt-2">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
