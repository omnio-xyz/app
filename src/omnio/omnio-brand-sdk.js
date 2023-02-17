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
			return productA.gtin.localeCompare(productB.gtin, undefined, {
				numeric: true,
				sensitivity: 'base',
			});
		});
	}

	mergeWithExistingProfile(existingProfile, profileUpdated) {
		return {
			name: profileUpdated.name ?? existingProfile?.name,
			description: profileUpdated.description ?? existingProfile?.description,
			contactEmail: profileUpdated.contactEmail ?? existingProfile?.contactEmail,
			url: profileUpdated.url ?? existingProfile?.url,
			logoImageUrl: profileUpdated.logoImageUrl ?? existingProfile?.logoImageUrl,
		};
	}
}

const omnio = new OmnioBrand();

export default omnio;
