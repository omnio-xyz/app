import { Ceramic } from './ceramic';
import publicDataModelAliases from './models/brand/ceramic/aliases.json';

class OmnioBrand {
	nodeUrl;

	ceramic;

	modelDefinitionName;

	constructor(nodeUrl = 'https://ceramic-clay.3boxlabs.com') {
		this.nodeUrl = nodeUrl;
		this.ceramic = new Ceramic(publicDataModelAliases, nodeUrl);
		this.modelDefinitionName = Object.keys(publicDataModelAliases.definitions)[0];
	}

	async saveProfile(profile) {
		let brandData = await this.ceramic.get(this.modelDefinitionName);
		brandData = {
			...brandData,
			profile: this.mergeWithExistingProfile(brandData?.profile, profile),
		};

		await this.ceramic.update(this.modelDefinitionName, brandData);
		return profile;
	}

	async getProfile() {
		const brandData = await this.ceramic.get(this.modelDefinitionName);
		if (brandData == null || !brandData?.profile) {
			return null;
		}

		return brandData.profile;
	}

	async saveProducts(newProducts) {
		let brandData = await this.ceramic.get(this.modelDefinitionName);
		brandData = {
			...brandData,
			products: this.sortProducts(newProducts),
		};

		await this.ceramic.update(this.modelDefinitionName, brandData);
		return brandData.products;
	}

	async getProducts() {
		const brandData = await this.ceramic.get(this.modelDefinitionName);
		if (brandData == null || !brandData?.products) {
			return null;
		}

		return brandData.products;
	}

	sortProducts(products) {
		return [...products].sort(function (productA, productB) {
			if (productA.gtin > productB.gtin) return 1;
			if (productA.gtin < productB) return -1;
			return 0;
		});
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

const omnio = new OmnioBrand();

export default omnio;
