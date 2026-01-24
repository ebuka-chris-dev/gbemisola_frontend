import { Link } from "react-router-dom";
import DonationImage from "../../assets/images/top.jpg";
import DonationBtm from "../../assets/images/btm.jpg";
import DonationBook from "../../assets/images/books.jpg";
import DonationRb from "../../assets/images/rb.jpg";
import DonationLb from "../../assets/images/dl.jpg";
import usdt from "../../assets/images/usdt.jpg";
import DD from "../../assets/images/dd.jpg";
import { useState } from "react";






const Index = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const options = [
    { amount: 10000, link: "https://paystack.shop/pay/x95-e2b1xo" },
    { amount: 20000, link: "https://paystack.shop/pay/xnpz3kr5kn" },
    { amount: 30000, link: "https://paystack.shop/pay/yosvgfux13" },
    { amount: 40000, link: "https://paystack.shop/pay/n9mdsyjgst" },
    { amount: 50000, link: "https://paystack.shop/pay/77fg2wy37o" },
  ];

  const choiceStyle = (isActive) => ({
    backgroundColor: isActive ? "#39B54A" : "#fff",
    color: isActive ? "#fff" : "#000",
    border: "1px solid #ddd",
    padding: "14px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  });



  return (
    <>
      <article className="post-863 page type-page status-publish hentry">
        <header>
          <div className="page-image focus-point-image focus-point-image-bg">
            {/* <h1 className="hl-underline hl-underline-centered">Donations</h1> */}
            <figure className="image image-866">
              <img
                loading="lazy"
                style={{ objectPosition: "50% 50%" }}
                width={1024}
                height={683}
                src={DonationImage}
                srcSet={`
                   ${DonationImage} 2048w,
                    ${DonationImage}  1440w,
                     ${DonationImage}   960w
                  `}
                alt="Small child looking at the camera while holding a water tank where water is coming out."
              />

            </figure>
          </div>
        </header>
        <div className="content-wrapper two-col-container donaion-container" >
          <div className="wp-block-columns" bis_skin_checked={1}>
            <div className="wp-block-column donation-image" bis_skin_checked={1} style={{ margin: "20px" }}>
              <figure className="wp-block-image size-full">
                <img
                  fetchpriority="high"
                  decoding="async"
                  width={2000}
                  height={1000}
                  src={DD}
                  alt="Image of Nigest Unche, standing and smiling in front of a blackboard in a school classroom. Nigest attends Sikela Primary School in Arba Minch, Ethiopia. She received glasses through 1, 2, 3 I can see! a school child eye health programme of Light for the World. ©Genaye Eshetu"
                  className="wp-image-6360"
                  srcSet={`${DD} 2000w,${DD} 300w, ${DD} 768w, ${DD} 1536w `}
                  sizes="(max-width: 2000px) 100vw, 2000px"
                />

              </figure>
              <p>
                Your donation enables
                access to life-changing education facilities.{" "}
              </p>
              <p>Thank you for your support!</p>
            </div>
            <div className="wp-block-column" bis_skin_checked={1}>
              <div
                id="fbIframeDiv"
                bis_skin_checked={1}
              >
                <form id="fbPaymentForm" method="post" noValidate="">
                  <p className="sr-only">Mandatory fields are marked with *</p>
                  <fieldset id="amountBox">
                    <span>
                      <strong style={{ fontSize: "20px" }}>Monthly Donation</strong>

                    </span>
                    <div
                      id="amountChoice"
                      className="frb-amount-desc-enhanced"
                      data-frb-amount-desc-enhanced={1}
                    >
                      <fieldset
                        className="flex flex-col mb-6 space-y-1 form-group input-amount-choices "
                        id="amountChoices"
                        aria-labelledby="amountChoicesLabel"
                      >
                        <span className="label" id="amountChoicesLabel">
                          Amount *
                        </span>
                        <div className="choiaces-grid">
                          <select
                          style={{width:"100%"}}
                            value={selectedLink}
                            onChange={(e) => setSelectedLink(e.target.value)}
                          >
                            <option>Select Amount</option>
                            {options.map(({ amount, link }) => (
                              <option key={amount} value={link}>
                                {amount.toLocaleString()} ₦
                              </option>
                            ))}
                          </select>
                        </div>

                        <a
                          href={selectedLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "100%",
                            marginLeft: "0px",
                            marginTop: "10px",
                            textAlign: "center",
                            display: "inline-block",
                          }}
                          className={`cta-button  cta-button-donate animated ${!selectedLink ? "disabled" : ""
                            }`}
                        >
                          Donate Now
                        </a>


                      </fieldset>
                    </div>

                  </fieldset>

                </form>
                <br />
                <form id="fbPaymentForm" method="post" noValidate="">
                  <p className="sr-only">Mandatory fields are marked with *</p>
                  <fieldset id="amountBox">
                    <span>
                      <strong style={{ fontSize: "20px" }}>One Time Donation</strong>

                    </span>
                    <div
                      id="amountChoice"
                      className="frb-amount-desc-enhanced"
                      data-frb-amount-desc-enhanced={1}
                    >
                      <fieldset
                        className="flex flex-col mb-6 space-y-1 form-group input-amount-choices "
                        id="amountChoices"
                        aria-labelledby="amountChoicesLabel"
                      >
                        {/* <span className="label" id="amountChoicesLabel">
                          Amount *
                        </span> */}
                        <div className="choices-grid">

                          {/* 5 */}
                          {/* <label
                            htmlFor="payment_customAmount"
                            style={{ gridColumn: "1/-1" }}
                          >
                            <span className="input-custom-amount flex items-center justify-center relative mb-4">
                              <input
                                id="payment_customAmount"
                                type="text"
                                autoComplete="off"
                                inputMode="decimal"
                                pattern="[\d,.\s]*"
                                defaultValue=""
                                style={{ width: "100%", background: "#fff", color: "black" }}
                              />
                              <span aria-hidden="true" style={{ color: "black" }}>₦</span>
                            </span>
                            <span className="relative description" aria-hidden="true">
                              Other amount
                            </span>
                          </label> */}

                          {/* btn */}
                        </div>
                        <a
                          href={'https://paystack.shop/pay/c3tryqx072'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-button cta-button-donate animated"
                          style={{
                            width: "100%",
                            marginLeft: "0px",
                            marginTop: "10px",
                            textAlign: "center",
                            display: "inline-block",
                          }}
                        >
                          Donate Now
                        </a>

                      </fieldset>
                    </div>

                  </fieldset>

                </form>
                <br />
                <form id="fbPaymentForm" method="post" noValidate="">
                  <p className="sr-only">Mandatory fields are marked with *</p>
                  <fieldset id="amountBox">
                    <span>
                      <strong style={{ fontSize: "20px" }}>Books Donation</strong>

                    </span>
                    {/* <div id="paypal-container-A3Z8PB6DWW8T4" ></div> */}
                    <Link to={'/donation-information'}
                      href={'https://paystack.shop/pay/c3tryqx072'}
                      rel="noopener noreferrer"
                      className="cta-button cta-button-donate animated"
                      style={{
                        width: "100%",
                        marginLeft: "0px",
                        marginTop: "10px",
                        textAlign: "center",
                        display: "inline-block",
                      }}
                    >
                      Click here for more information
                    </Link>
                  </fieldset>

                </form>
              </div>

            </div>
          </div>
        </div>

      </article>
    </>
  );
};

export default Index;
