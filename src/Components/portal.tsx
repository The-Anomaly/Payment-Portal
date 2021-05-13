import * as React from "react";
import "./portal.css";
import { Container } from "react-bootstrap";
import NaijaStates from "naija-state-local-government";
import ngn from "../assets/naira.png";
import tick from "../assets/tick.png";

const Portal = () => {
  const [state, setState] = React.useState({
    page: 1,
  });
  const { page } = state;

  React.useEffect(() => {
    window.scrollTo(-0,-0)
  },[])

  const cancelPayment = () => {
    window.scrollTo(-0,-0)
    return setState({
        ...state,
        page: 1,
      });
  }

  const Next = () => {
    window.scrollTo(-0,-0)
    if (page === 1) {
        return setState({
          ...state,
          page: 2,
        });
      }
      else if (page === 2) {
        return setState({
          ...state,
          page: 3,
        });
      }
    else if (page === 3) {
        return setState({
          ...state,
          page: 4,
        });
      }
  };

  return (
    <>
      <Container className="p-container" fluid={true}>
        <div className="p-form-sec">
          {page !== 4 && (
            <>
              <h3 className="p-form-ttl">Complete your Purchase</h3>
              <div className="p-form-head">
                <span
                  className={
                    page === 1
                      ? "p-form-head-txt p-form-head-txt-opt p-form-head-txt-start"
                      : "p-form-head-txt"
                  }
                >
                  Personal Info
                </span>
                <span
                  className={
                    page === 2
                      ? "p-form-head-txt p-form-head-txt-opt p-form-head-txt-mid"
                      : "p-form-head-txt"
                  }
                >
                  Billing Info
                </span>
                <span
                  className={
                    page === 3
                      ? "p-form-head-txt p-form-head-txt-opt p-form-head-txt-end"
                      : "p-form-head-txt"
                  }
                >
                  Confirm Payment
                </span>
              </div>
            </>
          )}
          {page === 1 && (
            <div className="p-form">
              <div className="p-form-list">
                <label htmlFor="name" className="p-form-list-label">
                  Name
                </label>
                <input
                  id="name"
                  className="p-form-list-input"
                  type="text"
                  name="name"
                  placeholder="Opara Linus Ahmed"
                />
              </div>
              <div className="p-form-list">
                <label htmlFor="email" className="p-form-list-label">
                  Email Address <span className="p-compulsory">*</span>
                </label>
                <div className="p-form-list-subtxt">
                  The purchase reciept would be sent to this address
                </div>
                <input
                  id="email"
                  className="p-form-list-input"
                  type="email"
                  name="email"
                  placeholder="OparaLinusAhmed@devmail.com"
                  required
                />
              </div>
              <div className="p-form-list">
                <label htmlFor="address1" className="p-form-list-label">
                  Address 1
                </label>
                <input
                  id="address1"
                  className="p-form-list-input"
                  type="text"
                  name="address"
                  placeholder="The address of the user goes here"
                />
              </div>
              <div className="p-form-list">
                <label htmlFor="address2" className="p-form-list-label">
                  Address 2
                </label>
                <input
                  id="address2"
                  className="p-form-list-input"
                  type="text"
                  name="address"
                  placeholder="and here"
                />
              </div>
              <div className="p-form-list2">
                <div className="p-form-list p-form-list2-1">
                  <label htmlFor="lga" className="p-form-list-label">
                    Local Government
                  </label>
                  <input
                    id="lga"
                    className="p-form-list-input"
                    type="text"
                    name="lga"
                    placeholder="Surulere"
                  />
                </div>
                <div className="p-form-list p-form-list2-2">
                  <label htmlFor="state" className="p-form-list-label">
                    State
                  </label>
                  <select
                    id="state"
                    className="p-form-list-input"
                    name="address"
                  >
                    <option value="" disabled selected hidden>
                      Lagos
                    </option>
                    {NaijaStates.states().map((i) => (
                      <option value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          {page === 2 && (
            <div className="p-form">
              <div className="p-form-list">
                <label htmlFor="cardname" className="p-form-list-label">
                  Name on Card <span className="p-compulsory">*</span>
                </label>
                <input
                  id="cardname"
                  className="p-form-list-input"
                  type="text"
                  name="cardname"
                  placeholder="Opara Linus Ahmed"
                  required
                />
              </div>
              <div className="p-form-list">
                <label htmlFor="cardtype" className="p-form-list-label">
                  Card Type <span className="p-compulsory">*</span>
                </label>
                <select
                  id="cardtype"
                  className="p-form-list-input"
                  name="cardtype"
                  required
                >
                  <option value="Visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="Verve">Verve</option>
                </select>
              </div>
              <div className="p-form-list2 p-card">
                <div className="p-form-list p-ccn">
                  <label htmlFor="ccn" className="p-form-list-label">
                    Card details <span className="p-compulsory">*</span>
                  </label>
                  {/* <input className="p-form-list-input" type="number" name="cardno" placeholder="Surulere" /> */}
                  <input
                    id="ccn"
                    className="p-form-list-input"
                    name="ccn"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\s]{13,19}"
                    autoComplete="cc-number"
                    maxLength={19}
                    placeholder="xxxx xxxx xxxx xxxx"
                    required
                  />
                </div>
                <div className="p-form-list p-exp">
                  <label htmlFor="month" className="p-form-list-label">
                    Expiry <span className="p-compulsory">*</span>
                  </label>
                  {/* <input
                    className="p-form-list-input"
                    type="month"
                    name="expiry"
                    placeholder="-- / --"
                    required
                  /> */}
                    <div className="p-form-list-input p-exp-input-sec">
                        <input autoComplete="off" className="p-exp-input" id="month" maxLength={2} pattern="[0-9]*" inputMode="numeric" placeholder="MM" type="text" data-pattern-validate />
                        <span className="p-exp-input-slash">/</span>
                        <input autoComplete="off" className="p-exp-input" name="exp-month" id="year" maxLength={2} pattern="[0-9]*" inputMode="numeric" placeholder="YY" type="text" data-pattern-validate />
                    </div>
                </div> 
                <div className="p-form-list p-cvv">
                  <label className="p-form-list-label">
                    CVV <span className="p-compulsory">*</span>
                  </label>
                  <input
                    className="p-form-list-input"
                    type="text"
                    name="cvv"
                    placeholder="923"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          {page === 3 && (
            <div className="p-confirm-sec">
              <div className="p-confirm">
                <span>Item Name</span>
                <span>
                  <img className="p-ngn" src={ngn} alt="" /> Price
                </span>
              </div>
              <div className="p-item">
                <div className="p-item-list">
                  <span>Data science and usability</span>
                  <span>50,000.00</span>
                </div>
                <div className="p-item-list">
                  <span>Shipping</span>
                  <span className="p-item-list-2">0.00</span>
                </div>
                <hr />
                <div className="p-total">
                  <span>Total</span>
                  <span>50,000.00</span>
                </div>
              </div>
            </div>
          )}
          {page !== 4 && (
            <div className="p-buttons">
              <button
                className="p-buttons-btn p-buttons-btn1"
                onClick={Next}
              >
                {page === 3 ? "Pay" : "Next"}
              </button>
              <button className="p-buttons-btn p-buttons-btn2" onClick={cancelPayment}>
                Cancel Payment
              </button>
            </div>
          )}
          {page === 4 && (
            <div className="p-complete">
                <div>
              <div className="p-complete-tick">
                <img src={tick} alt="" />
              </div>
              <h3 className="p-complete-ttl">Purchase Completed</h3>
              
              </div>
              <p className="p-complete-txt">
                Please check your email for details concerning this transaction
              </p>
              <a href="" className="p-complete-link">Return Home</a>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Portal;
