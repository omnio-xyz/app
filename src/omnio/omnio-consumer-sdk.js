import { Integration } from './integration';

class OmnioConsumer {
	integration;

	DATA_FIELD_HOLDER_MAPPER = {
		add_to_wishlist: 'wishlist',
		content_view: 'content_view',
		purchase: 'purchase_history',
		add_to_cart: 'add_to_cart',
		initiate_checkout: 'initiated_checkouts',
	};

	constructor() {
		this.integration = new Integration();
	}

	async saveUserConsumerProfile(profile) {
		let userOmnioData = await JSON.parse(await this.integration.readAndDecrypt());
		userOmnioData = {
			...userOmnioData,
			profile: this.mergeWithExistingProfile(userOmnioData?.profile, profile),
		};

		await this.integration.encryptAndWrite(JSON.stringify(userOmnioData));
		return userOmnioData;
	}

	async removeConsumerDataPoint(dataPoint) {
		const fieldHolder = this.DATA_FIELD_HOLDER_MAPPER[dataPoint.type];
		let userOmnioData = await JSON.parse(await this.integration.readAndDecrypt());
		userOmnioData[fieldHolder] = userOmnioData[fieldHolder].filter(
			(dp) => dp?.date !== dataPoint?.date,
		);
		await this.integration.encryptAndWrite(JSON.stringify(userOmnioData));
		return userOmnioData;
	}

	async getUserData() {
		return JSON.parse(await this.integration.readAndDecrypt());
	}

	mergeWithExistingProfile(existingProfile, profileUpdated) {
		return {
			username: profileUpdated.username ?? existingProfile?.username,
			prefix: profileUpdated.prefix ?? existingProfile?.prefix,
			firstName: profileUpdated.firstName ?? existingProfile?.firstName,
			middleName: profileUpdated.middleName ?? existingProfile?.middleName,
			surname: profileUpdated.surname ?? existingProfile?.surname,
			email: profileUpdated.email ?? existingProfile?.email,
			phone: profileUpdated.phone ?? existingProfile?.phone,
			address: {
				line: profileUpdated.address?.line ?? existingProfile?.address?.line,
				line2: profileUpdated.address?.line2 ?? existingProfile?.address?.line2,
				city: profileUpdated.address?.city ?? existingProfile?.address?.city,
				country: profileUpdated.address?.country ?? existingProfile?.address?.country,
				zip: profileUpdated.address?.zip ?? existingProfile?.address?.zip,
			},
		};
	}
}

const omnio = new OmnioConsumer();

export default omnio;
