import "./ProCard.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import pro1 from "./../assets/pro1.svg"
export default function ProCard() {
    return (
        <div className="ProCard">
            <div className="pro-img">
                <img src={pro1} alt="" />
            </div>
            <div className="pro-info">
                <div className="pro-info-text-1">
                <div className="pro-info-text">
                    <h2>Project Name</h2>
                    <p>&Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique iusto incidunt natus distinctio commodi qui debitis eos voluptatum! Non, voluptatibus!</p>
                </div>
                </div>

                <div className="pro-footer">
                    <div className="pro-footer-text-1">
                    <div className="pro-footer-text">
                        <p>MEARN Project</p>
                    </div>
                    </div>
                    <div className="pro-btn">
                        <button className="exp-arrow pro-arrow">
                            <ArrowOutwardIcon />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}