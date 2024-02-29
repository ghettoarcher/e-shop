export default function Timer(){
      return(
            <div className="Deals__timer">
            <div className="title">Deals and offers</div>
            <div className="subtitle">Hygiene equipments</div>
            <div className="timer-wrapper">
              <div className="timer-item">
                <div className="timer-number">04</div>
                <div className="timer-text">Days</div>
              </div>
              <div className="timer-item">
                <div className="timer-number">13</div>
                <div className="timer-text">Hour</div>
              </div>
              <div className="timer-item">
                <div className="timer-number">34</div>
                <div className="timer-text">Min</div>
              </div>
              <div className="timer-item">
                <div className="timer-number">56</div>
                <div className="timer-text">Sec</div>
              </div>
            </div>
          </div>
      );
}