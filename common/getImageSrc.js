export default function getImageSrc(image) {
	if (!image) return image;
	if (typeof image === "string") return image;
	if (typeof image === "object") {
		if (typeof image.src === "string") return image.src;
		if (typeof image.default === "string") return image.default;
		if (image.default && typeof image.default.src === "string") {
			return image.default.src;
		}
	}
	return image;
}
