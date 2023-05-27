import { useState } from "react"; 


const Footer = () => {
    const [ footerData, setFooterData ] = useState([
        {id: 1, title: 'Company Info', link1: 'About Us', link2: 'Carrier', link3: 'We are hiring', link4: 'Blog'},
        {id: 2, title: 'Legal', link1: 'About Us', link2: 'Carrier', link3: 'We are hiring', link4: 'Blog'},
        {id: 3, title: 'Features', link1: 'Business Marketing', link2: 'User Analytic', link3: 'Live Chat', link4: 'Unlimited Support'},
        {id: 4, title: 'Resources', link1: 'IOS & Android', link2: 'Watch a Demo', link3: 'Customers', link4: 'API'},
    ])
    return (
        <footer className="footer mt-50">
            <div className="container">
                <div className="row">
                    {   footerData.map(data => (
                        <div className="col-12 col-sm-6 col-xl-2" key={data.id}>
                            <div>
                                <h3 className="fw-bold fs-6 mb-20">{data.title}</h3>
                                <a href="/" className="fs-14 text-gray d-block text-decoration-none mb-2">{data.link1}</a>
                                <a href="/" className="fs-14 text-gray d-block text-decoration-none mb-2">{data.link2}</a>
                                <a href="/" className="fs-14 text-gray d-block text-decoration-none mb-2">{data.link3}</a>
                                <a href="/" className="fs-14 text-gray d-block text-decoration-none mb-2">{data.link4}</a>
                            </div>
                        </div>
                    ))
                    }

                    <div className="col-12 col-md-12 col-xl-4">4</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;