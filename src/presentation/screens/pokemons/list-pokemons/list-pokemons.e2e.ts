import { expect, device, element, by } from 'detox';

describe('List pokemons screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be able to list the pokemons and open the details', async () => {
    const cardElement = element(by.text('Bulbasaur'));

    await expect(cardElement).toBeVisible();

    await cardElement.tap();

    await expect(element(by.text('Species'))).toBeVisible();
    await expect(element(by.text('Grass, Poison'))).toBeVisible();

    await element(by.text('Base Stats')).tap();

    await expect(element(by.text('Total'))).toBeVisible();
    await expect(element(by.text('318'))).toBeVisible();
  });

  it('should be able to filter the pokemon list', async () => {
    await element(by.id('filter-button')).tap();
    await element(by.id('pokemon_name')).typeText('Pikachu');

    await element(by.id('apply-btn')).tap();

    await expect(element(by.text('Pikachu'))).toBeVisible();
    await expect(element(by.text('Chamander'))).not.toBeVisible();
  });

  it('should be able to sort the pokemon list', async () => {
    await element(by.id('sort-button')).tap();
    await expect(element(by.text('Organize results for...'))).toBeVisible();

    await element(by.text('A-Z')).tap();

    await expect(element(by.text('Abra'))).toBeVisible();
    await expect(element(by.text('Aerodactyl'))).toBeVisible();
  });
});
