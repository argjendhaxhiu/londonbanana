// API integration for postcode data (house prices, crime rates, etc.)

export interface PostcodeData {
  postcode: string;
  housePriceAverage?: number;
  crimeRate?: number;
  demographics?: {
    population?: number;
    averageAge?: number;
    employmentRate?: number;
  };
  location?: {
    latitude: number;
    longitude: number;
    district: string;
    ward: string;
  };
  amenities?: {
    schools?: number;
    transport?: string[];
    shops?: number;
  };
  error?: string;
}

// Postcodes.io API - Free geographic and basic demographic data
export async function getPostcodeLocation(postcode: string): Promise<any> {
  try {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postcode.replace(/\s+/g, '')}`);
    if (!response.ok) throw new Error('Postcode not found');
    
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching postcode location:', error);
    return null;
  }
}

// Police.uk API - Free crime data
export async function getCrimeData(latitude: number, longitude: number): Promise<any> {
  try {
    // Get crime data for the area around this postcode
    const response = await fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=${latitude}&lng=${longitude}`
    );
    if (!response.ok) throw new Error('Crime data not available');
    
    const crimes = await response.json();
    return crimes;
  } catch (error) {
    console.error('Error fetching crime data:', error);
    return [];
  }
}

// House price data - placeholder for now (no free API currently implemented)
export async function getHousePriceData(postcode: string): Promise<number | null> {
  try {
    // For demo purposes, return mock data based on postcode areas
    // In production, you would integrate with a real house price API
    
    const mockPrices: Record<string, number> = {
      'NW': 850000,
      'W': 750000,
      'SW': 650000,
      'N': 550000,
      'EC': 900000,
      'WC': 950000,
      'SE': 500000,
      'TW': 600000,
      'KT': 550000,
      'EN': 450000,
      'WD': 400000
    };
    
    const area = postcode.match(/^([A-Z]+)/)?.[1];
    return area && mockPrices[area] ? mockPrices[area] : null;
  } catch (error) {
    console.error('Error fetching house price data:', error);
    return null;
  }
}

// Main function to get comprehensive postcode data
export async function getComprehensivePostcodeData(postcode: string): Promise<PostcodeData> {
  const result: PostcodeData = { postcode };

  try {
    // 1. Get basic location and demographic data
    const locationData = await getPostcodeLocation(postcode);
    if (locationData) {
      result.location = {
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        district: locationData.admin_district,
        ward: locationData.admin_ward
      };

      // 2. Get crime data using coordinates
      const crimeData = await getCrimeData(locationData.latitude, locationData.longitude);
      if (crimeData && crimeData.length > 0) {
        // Calculate crime rate (crimes per month in the area)
        result.crimeRate = crimeData.length;
      }

      // 3. Get house price data
      const housePrice = await getHousePriceData(postcode);
      result.housePriceAverage = housePrice ?? undefined;

      // 4. Add demographic data from postcodes.io
      if (locationData.codes) {
        result.demographics = {
          population: locationData.population || undefined,
          // Add more demographic data as available
        };
      }
    }
  } catch (error) {
    result.error = `Failed to fetch data: ${error}`;
  }

  return result;
}

// Helper function to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(amount);
}

// Helper function to get crime rate description
export function getCrimeRateDescription(crimeCount: number): string {
  if (crimeCount <= 5) return 'Very Low';
  if (crimeCount <= 15) return 'Low';
  if (crimeCount <= 30) return 'Moderate';
  if (crimeCount <= 50) return 'High';
  return 'Very High';
}
