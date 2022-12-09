import { useDispatch } from "react-redux";
import { CloseContactUs } from "../Actions/ContactUs";
import "./index.css";

const ContactUs = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="wd-privacy">
      <div className="wd-privacy-content">
        <div>
          <h5>Mail us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Aadesh Mallya</span>&nbsp;
            <a href="mailto:mallya.aa@northeastern.edu">
              (mallya.aa@northeastern.edu)
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Rishi Goswamy</span>&nbsp;
            <a href="mailto:goswamy.r@northeastern.edu">
              (goswamy.r@northeastern.edu)
            </a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Valay Gundecha</span>&nbsp;
            <a href="mailto:gundecha.v@northeastern.edu">
              (gundecha.v@northeastern.edu)
            </a>
          </p>
          <br></br>

          <h5>Contact us at:</h5>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Aadesh Mallya</span>&nbsp;
            <a href="tel:+16178188523">(+1 6178188523)</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Rishi Goswamy</span>&nbsp;
            <a href="tel:+18573794365">(+1 8573794365)</a>
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;<span>Valay Gundecha</span>&nbsp;
            <a href="tel:+18578679241">(+1 8578679241)</a>
          </p>
        </div>
        <i
          className="fa fa-times position-absolute top-0 end-0 p-3"
          aria-hidden="true"
          onClick={() => CloseContactUs(dispatch)}
        ></i>
      </div>
    </div>
  );
};

export default ContactUs;
