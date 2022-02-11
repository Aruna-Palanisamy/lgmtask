import Loader from "react-js-loader";
import "../containers/Styles.css";

const Loaderc = () => {
  // const [spinnerLoading, setSpinnerLoading] = useState(true);
  return (
    <div style={{ textAlign: "center" }} className="app">
      <Loader
        type="spinner-cub"
        bgColor={"brown"}
        color={"#000000"}
        size={200}
      />
      {/* <button onClick={() => setSpinnerLoading(!spinnerLoading)}>Toggle Loader</button> */}
    </div>
  );
};
export default Loaderc;
