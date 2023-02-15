class ImageStorageImgBBClient {
	static readonly API_KEY = process.env.REACT_APP_IMG_BB_API_KEY;

	static readonly BASE_URL = 'https://api.imgbb.com/1';

	static async uploadImage(file: File): Promise<any> {
		const base64EncodedImage = await this.getBase64EncodedImage(file);

		const formData = new FormData();
		formData.append('image', base64EncodedImage);

		const response = await fetch(`${this.BASE_URL}/upload?&key=${this.API_KEY}`, {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error(`Failed to upload image: ${response.statusText}`);
		}
	}

	static getBase64EncodedImage(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const base64EncodedImage = reader.result as string;
				resolve(base64EncodedImage.split(',')[1]);
			};
			reader.onerror = () => {
				reject(new Error('Failed to read file'));
			};
		});
	}
}

const imgBbClient = new ImageStorageImgBBClient();

export default imgBbClient;
