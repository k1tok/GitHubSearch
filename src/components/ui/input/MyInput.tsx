import classes from "./MyInput.module.css";
import type { MyInputProps } from "./MyInputDataTypes";

const MyInput: React.FC<MyInputProps> = (props) => {
	return <input {...props} className={classes["myInput"]} />;
};

export default MyInput;
