import type { MyImageProps } from "./MyImageDataTypes";

const MyImage: React.FC<MyImageProps> = ({ url, alt, w, h, css }) => {
	return <img alt={alt} className={css} height={h} src={url} width={w} />;
};

export default MyImage;
