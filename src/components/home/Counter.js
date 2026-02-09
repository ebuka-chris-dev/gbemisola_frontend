import ReachImg from "../../assets/images/reach.svg";
import HouseImg from "../../assets/images/house.svg";
import TrainImg from "../../assets/images/train.svg"
const Counter = () => {
  return (
    <>
       <section className="counter-icons">
        <div className="content-wrapper-inner">
          <h2 className="h1 hl-underline">Together, we can archieve:</h2>
          <div className="counter-icons-items">
            <div className="counter-icons-item">
              <div className="counter-icons-item-image">
                <img decoding="async" src={ReachImg} />
              </div>
              <h3>100,000</h3>
              <p>
                Reach 100,000 children annually through expanded learning programs by 2027
              </p>
            </div>
            <div className="counter-icons-item">
              <div className="counter-icons-item-image">
                <img decoding="async" src={TrainImg} />
              </div>
              <h3>2,000</h3>
              <p>
              Train 2,000 teachers in innovative, culturally relevant pedagogies.

              </p>
            </div>
            <div className="counter-icons-item">
              <div className="counter-icons-item-image">
                <img decoding="async" src={HouseImg} />
              </div>
              <h3>20</h3>
              <p>Build  or refurbish 20 library in Government schools across the Northern Nigeria</p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default Counter;
