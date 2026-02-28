import "./ProCard.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import pro1 from "./../assets/pro1.svg"
import { useNavigate } from "react-router-dom";




export default function ProCard({data}) {
    const navigate = useNavigate();

    //going to oproject desc
    function clicked(event) {
        navigate("/project",{
            state: {data}
        });
        console.log("Go to the required page");
    };


    return (
        <div className="ProCard">
            <div className="pro-img">
                <img src={data.image} alt="" />
            </div>
            <div className="pro-info">
                <div className="pro-info-text-1">
                    <div className="pro-info-text">
                        <h2>{data.name}</h2>
                        <p>{data.smallDesc}</p>
                    </div>
                </div>

                <div className="pro-footer">
                    <div className="pro-footer-text-1">
                        <div className="pro-footer-text">
                            <p>{data.type}</p>
                        </div>
                    </div>
                    <div className="pro-btn">
                        <button className="exp-arrow pro-arrow" onClick={clicked}>
                            <ArrowOutwardIcon />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}