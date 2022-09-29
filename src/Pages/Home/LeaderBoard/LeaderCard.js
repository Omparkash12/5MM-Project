import React from 'react';
import './LeaderBoard.css';


const LeaderCard = (props) => {
    return (
        <div className="leader-board-data-os-1">
            <div className="leader-data-image-os">
                <img src={props.card_image} alt="" />
            </div>

            <div className="leader-data-content-os">
                <div className="leader-data-content-1">
                    <div className="leader-data-heading-os">
                        {props.card_heading}
                    </div>
                    <div className="leader-losses-data-os">
                        <div className="leader-losses-data-os-11">
                            <h5>{props.card_data_1}</h5>
                            <h6>{props.card_data_2}</h6>
                        </div>
                        <div className="leader-losses-data-os-11">
                            <h5>{props.card_data_3}</h5>
                            <h6>{props.card_data_4}</h6>
                        </div>
                    </div>

                    <div className="leader-losses-data-os">
                        <div className="leader-losses-data-os-22">
                            <h5>{props.card_data_5}</h5>
                            <h6>{props.card_data_6}</h6>
                        </div>
                        <div className="leader-losses-data-os-22">
                            <h5>{props.card_data_7}</h5>
                            <h6>{props.card_data_8}</h6>
                        </div>
                    </div>
                </div>

                <div className="leader-break-even-win-os">
                    <div className="leader-break-even-os">{props.card_data_9}</div>
                    <div className="leader-win-os">{props.card_data_10}</div>
                </div>

                <a href='#/' className="leader-select-my-model-os">{props.card_data_11}</a>
            </div>
        </div>
    )
}

export default LeaderCard;
