import classes from "./MyImage.module.css";
import type { MyImageProps } from "./MyImageDataTypes";

const MyImage: React.FC<MyImageProps> = ({ url, alt, w, h }) => {
	return (
		<img
			alt={alt}
			className={classes["myImage"]}
			height={h}
			src={url}
			width={w}
		/>
	);
};

export default MyImage;
