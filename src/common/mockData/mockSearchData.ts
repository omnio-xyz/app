import moment, { Moment } from 'moment';
import PAYMENTS from '../data/enumPaymentMethod';

const data: {
	id: number;
	name: string;
  type: string;
	membershipDate: Moment;
	payout: string;

}[] = [
	{
		id: 1,
		name: 'Product #1',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 2,
		name: 'Product #2',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 3,
		name: 'Product #3',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 4,
		name: 'Product #4',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 5,
		name: 'Product #5',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 6,
		name: 'Product #6',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 7,
		name: 'Product #7',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 8,
		name: 'Product #8',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 9,
		name: 'Product #9',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 10,
		name: 'Product #10',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 11,
		name: 'Product #11',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 12,
		name: 'Product #12',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 13,
		name: 'Product #13',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 14,
		name: 'Product #14',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 15,
		name: 'Product #15',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 16,
		name: 'Product #16',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 17,
		name: 'Product #17',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 18,
		name: 'Product #18',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 19,
		name: 'Product #19',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 20,
		name: 'Product #20',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 21,
		name: 'Product #21',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 22,
		name: 'Product #22',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 23,
		name: 'Product #23',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 24,
		name: 'Product #24',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 25,
		name: 'Product #25',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 26,
		name: 'Product #26',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 27,
		name: 'Product #27',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 28,
		name: 'Product #28',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 29,
		name: 'Product #29',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 30,
		name: 'Product #30',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 31,
		name: 'Product #31',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 32,
		name: 'Product #32',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 33,
		name: 'Product #33',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 34,
		name: 'Product #34',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 35,
		name: 'Product #35',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 36,
		name: 'Product #36',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 37,
		name: 'Product #37',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 38,
		name: 'Product #38',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 39,
		name: 'Product #39',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 40,
		name: 'Product #40',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 41,
		name: 'Product #41',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 42,
		name: 'Product #42',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 43,
		name: 'Product #43',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 44,
		name: 'Product #44',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 45,
		name: 'Product #45',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 46,
		name: 'Product #46',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 47,
		name: 'Product #47',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 48,
		name: 'Product #48',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 49,
		name: 'Product #49',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
  {
		id: 50,
		name: 'Product #50',
    type: 'Search',
    membershipDate: moment('2023-01-01'),
		payout: PAYMENTS.PAYPAL.name,
	},
];
export default data;