import { IPurchase } from '../../purchase/purchase';
import { IConsumerUserProfile } from './profile';

export interface IConsumerUser {
	profile?: IConsumerUserProfile;
	purchase_history?: IPurchase[];
}
