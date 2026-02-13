import getImageSrc from "common/getImageSrc.js";

export default function importAll(r) {
	const images = {};
	r.keys().forEach((item) => {
		images[item.replace("./", "")] = getImageSrc(r(item));
	});
	return images;
}
