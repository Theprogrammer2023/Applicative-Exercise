/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidDiscoveriesByYear = {};

  for (let i = 0; i < data.asteroids.length; i++) {
    const asteroid = data.asteroids[i];
    const discoveryYear = asteroid.discoveryYear;
    if (asteroidDiscoveriesByYear[discoveryYear]) {
      asteroidDiscoveriesByYear[discoveryYear]++;
    } else {
      asteroidDiscoveriesByYear[discoveryYear] = 1;
    }
  }

  let greatestYear = null;
  let maxDiscoveries = -1;
  for (const year in asteroidDiscoveriesByYear) {
    if (asteroidDiscoveriesByYear[year] > maxDiscoveries) {
      greatestYear = year;
      maxDiscoveries = asteroidDiscoveriesByYear[year];
    }
  }

  return parseInt(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
