import { extractGeneralTokens } from './extractGeneralTokens';

describe('mixColors', () => {
	it('should return new object', () => {
		const testData = {};

		expect(extractGeneralTokens(testData as any)).not.toBe(testData);
	});

	it('should delete colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
		};

		expect(extractGeneralTokens(testData as any)).toStrictEqual<any>({});
	});

	it('should save another props except colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
			anotherProp: 'prop',
		};

		expect(extractGeneralTokens(testData as any)).toStrictEqual<any>({
			anotherProp: 'prop',
		});
	});
});
