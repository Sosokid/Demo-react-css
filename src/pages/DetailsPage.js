import { useNavigate } from "react-router-dom";

function DetailsPage() {
    const navigate = useNavigate();
    const handleToDetall = () => {
        navigate("/");
    };
    return (
        <div className="text-center font-mono">
            <p>DetailsPage</p>
            <button className="text-xl font-bold underline" onClick={() => handleToDetall()}>BACK</button>
        </div>
    );
}

export default DetailsPage;