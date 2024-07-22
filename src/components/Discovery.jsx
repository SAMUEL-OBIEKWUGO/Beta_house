import discovery1 from "../assets/property1.svg";
import discovery2 from "../assets/property2.svg";
import discovery3 from "../assets/property3.svg";
import discovery4 from "../assets/property4.svg"; 
import "../Styles/discovery.css"

const Discovery = () => {
  return (
    <main className="container">
      <h1 className="text-center my-4">Discover Our Popular Properties</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={discovery1} alt="Property 1" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={discovery2} alt="Property 2" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={discovery3} alt="Property 3" className="img-fluid" />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <img src={discovery4} alt="Property 4" className="img-fluid" />
        </div>
      </div>
    </main>
  );
}

export default Discovery;
