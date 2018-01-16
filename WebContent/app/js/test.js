/**
 * Fichier test
 */
'use strict';
describe('1', function() {
	describe('plus', function() {
		it('0 doit être 1', function() {
			expect(1 + 0).toBe(1);
		});
		it('2 doit être 3', function() {
			expect(1 + 2).toBe(3);
		});
	});
	describe('multiplier par', function() {
		it('0 doit être 0', function() {
			expect(1 * 0).toBe(0);
		});
		it('2 doit être 2', function() {
			expect(1 * 2).toBe(2);
		});
	});
});