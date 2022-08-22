import "./RadioCustom.css";
import { IconCheck } from "../../assets/img/IconCheck";

export const RadioCustom = ({ color1, color2 }) => {
  return (
    <div className="custom-radios">
      <div className="radio-item">
        <input
          type="radio"
          id="color-1"
          name="color"
          value="color-1"
          defaultChecked
        />
        <label htmlFor="color-1">
          <span style={{ backgroundColor: color1 }}>
            <IconCheck />
          </span>
        </label>
      </div>

      <div className="radio-item">
        <input type="radio" id="color-2" name="color" value="color-2" />
        <label htmlFor="color-2">
          <span style={{ backgroundColor: color2 }}>
            <IconCheck />
          </span>
        </label>
      </div>
    </div>
  );
};
