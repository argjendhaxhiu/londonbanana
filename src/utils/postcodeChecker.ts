// London "banana" postcodes - matched with coordinate boundaries
export const BANANA_POSTCODES = new Set([
  // North West London (coordinates: -0.270 to -0.167, 51.528 to 51.680)
  'NW1',  // Camden area (coordinate: -0.145, 51.540)
  'NW1X', // Camden sub-districts
  'NW3',  // Hampstead (coordinate: -0.220, 51.555)
  'NW5',  // Kentish Town (coordinate: -0.145, 51.555)
  'NW7',  // Mill Hill (coordinate: -0.240, 51.615)
  'NW8',  // St. John's Wood (coordinate: -0.167, 51.528)
  
  // North London (coordinates: -0.155 to -0.120, 51.545 to 51.680)
  'N1',   // Islington/Kings Cross (coordinate: -0.115, 51.545)
  'N1C',  // Kings Cross sub-district
  'N1P',  // Islington sub-district
  'N2',   // East Finchley (coordinate: -0.165, 51.590)
  'N3',   // Finchley Central (coordinate: -0.195, 51.600)
  'N6',   // Highgate (coordinate: -0.145, 51.575)
  'N10',  // Muswell Hill (coordinate: -0.145, 51.590)
  'N11',  // Friern Barnet (coordinate: -0.142, 51.612)
  'N12',  // North Finchley (coordinate: -0.175, 51.615)
  'N15',  // Finsbury Park (coordinate: -0.120, 51.555)
  'N20',  // Whetstone (coordinate: -0.220, 51.630)
  
  // Enfield area (coordinates: -0.155, 51.648 to 51.675)
  'EN4',  // Cockfosters (coordinate: -0.155, 51.675)
  
  // Watford area (coordinates: -0.270, 51.660)
  'WD6',  // Borehamwood (coordinate: -0.270, 51.660)
  
  // Central London - East Central (coordinates: -0.110 to -0.070, 51.515 to 51.540)
  'EC1',  // Finsbury area (coordinate: -0.110, 51.540)
  'EC1A', // Barbican/City
  'EC1M', // Farringdon
  'EC1N', // Hatton Garden
  'EC1R', // Saffron Hill
  'EC1V', // Aldersgate
  'EC1Y', // Clerkenwell
  'EC2',  // Shoreditch area (coordinate: -0.080, 51.525)
  'EC2A', // Shoreditch
  'EC2M', // Moorgate
  'EC2N', // Bank
  'EC2R', // Bank
  'EC2V', // Guildhall
  'EC2Y', // Barbican
  
  // Central London - West Central (coordinates: -0.125, 51.515)
  'WC1',  // Bloomsbury
  'WC1A', // Holborn
  'WC1B', // Bloomsbury
  'WC1E', // Bloomsbury
  'WC1H', // Bloomsbury
  'WC1N', // Bloomsbury
  'WC1R', // Bloomsbury
  'WC1V', // Bloomsbury
  'WC1X', // Kings Cross
  'WC2',  // Covent Garden (coordinate: -0.125, 51.515)
  'WC2A', // Holborn
  'WC2B', // Holborn
  'WC2E', // Covent Garden
  'WC2H', // Covent Garden
  'WC2N', // Covent Garden
  'WC2R', // Covent Garden
  
  // West London (coordinates: -0.220 to -0.175, 51.495 to 51.520)
  'W1',   // West End (coordinate: -0.145, 51.515)
  'W1A',  // Westminster/West End
  'W1B',  // Fitzrovia/Marylebone
  'W1C',  // Fitzrovia
  'W1D',  // Soho
  'W1F',  // Fitzrovia
  'W1G',  // Marylebone
  'W1H',  // Marylebone (includes W1H 5LG area)
  'W1J',  // Mayfair
  'W1K',  // Mayfair
  'W1S',  // Mayfair
  'W1T',  // Fitzrovia
  'W1U',  // Marylebone
  'W1W',  // Fitzrovia
  'W2',   // Paddington (coordinate: -0.175, 51.520)
  'W6',   // Brook Green/Hammersmith (coordinate: -0.220, 51.495)
  'W10',  // North Kensington (coordinate: -0.215, 51.525)
  'W11',  // Notting Hill (coordinate: -0.205, 51.515)
  'W14',  // West Kensington (coordinate: -0.205, 51.495)
  
  // South West London (coordinates: -0.240 to -0.115, 51.420 to 51.490)
  'SW1',  // Westminster/Belgravia (coordinate: -0.145, 51.500)
  'SW1A', // Westminster
  'SW1E', // Belgravia
  'SW1H', // Westminster
  'SW1P', // Westminster
  'SW1V', // Belgravia
  'SW1W', // Belgravia
  'SW1X', // Knightsbridge/Belgravia
  'SW1Y', // Westminster
  'SW3',  // Chelsea
  'SW4',  // Clapham (coordinate: -0.130, 51.465)
  'SW5',  // Earls Court
  'SW6',  // Fulham (coordinate: -0.195, 51.480)
  'SW7',  // South Kensington
  'SW8',  // South Lambeth (coordinate: -0.125, 51.475)
  'SW9',  // Stockwell (coordinate: -0.115, 51.470)
  'SW10', // Chelsea
  'SW11', // Battersea (coordinate: -0.185, 51.475)
  'SW12', // Balham (coordinate: -0.155, 51.445)
  'SW13', // Barnes (coordinate: -0.240, 51.483)
  'SW15', // Putney (coordinate: -0.210, 51.465)
  'SW18', // Wandsworth (coordinate: -0.185, 51.455)
  'SW19', // Wimbledon (coordinate: -0.205, 51.420)
  'SW20', // Raynes Park (coordinate: -0.230, 51.405)
  
  // South East London (coordinates: -0.075 to -0.065, 51.490 to 51.500)
  'SE1',  // Southwark/London Bridge (coordinate: -0.065, 51.500)
  'SE1P', // Southwark
  
  // Twickenham/Richmond area (coordinates: -0.340 to -0.305, 51.405 to 51.460)
  'TW9',  // Richmond (coordinate: -0.305, 51.460)
  'TW10', // Ham/Petersham (coordinate: -0.315, 51.450)
  'TW12', // Hampton Court (coordinate: -0.340, 51.405)
  
  // Kingston area (coordinates: -0.290 to -0.255, 51.365 to 51.400)
  'KT3',  // New Malden (coordinate: -0.255, 51.400)
  'KT5',  // Surbiton (removed - not in current coordinates)
  'KT6',  // Tolworth (coordinate: -0.270, 51.385)
  'KT9',  // Chessington (coordinate: -0.290, 51.365)
]);

export interface PostcodeResult {
  isValid: boolean;
  isInBanana: boolean;
  message: string;
  normalizedPostcode?: string;
  additionalData?: {
    housePriceAverage?: number;
    crimeRate?: number;
    crimeDescription?: string;
    location?: {
      district: string;
      ward: string;
    };
  };
}

export function validatePostcode(postcode: string): boolean {
  // Basic London postcode validation pattern
  const londonPostcodePattern = /^(E|EC|N|NW|SE|SW|W|WC)\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
  const outwardOnlyPattern = /^(E|EC|N|NW|SE|SW|W|WC)\d{1,2}$/i;
  
  const normalizedPostcode = postcode.replace(/\s+/g, '').toUpperCase();
  
  return londonPostcodePattern.test(normalizedPostcode) || outwardOnlyPattern.test(normalizedPostcode);
}

export function normalizePostcode(postcode: string): string {
  return postcode.replace(/\s+/g, '').toUpperCase();
}

export function extractOutwardCode(postcode: string): string {
  const normalized = normalizePostcode(postcode);
  // Extract the outward code (e.g., "SW1" from "SW1A 1AA", "NW8" from "NW8 8TY")
  // Handle full postcodes by splitting on the inward part pattern
  
  // For full postcodes like "NW8 8TY" -> "NW88TY", we need to split before the inward part
  // Inward part is always: digit + two letters at the end
  const fullPostcodeMatch = normalized.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)(\d[A-Z]{2})$/);
  if (fullPostcodeMatch) {
    return fullPostcodeMatch[1]; // Return just the outward code part
  }
  
  // For outward-only codes like "NW8", match directly
  const outwardOnlyMatch = normalized.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)$/);
  return outwardOnlyMatch ? outwardOnlyMatch[1] : '';
}

// Enhanced postcode checking with additional data for ALL valid London postcodes
export async function checkPostcodeWithData(postcode: string): Promise<PostcodeResult> {
  const basicResult = checkPostcode(postcode);
  
  // Fetch additional data for ALL valid London postcodes, not just banana zone ones
  if (basicResult.isValid) {
    try {
      // Import the comprehensive data function
      const { getComprehensivePostcodeData, getCrimeRateDescription, formatCurrency } = await import('./postcodeData');
      const additionalData = await getComprehensivePostcodeData(postcode);
      
      if (additionalData && !additionalData.error) {
        basicResult.additionalData = {
          housePriceAverage: additionalData.housePriceAverage,
          crimeRate: additionalData.crimeRate,
          crimeDescription: additionalData.crimeRate ? getCrimeRateDescription(additionalData.crimeRate) : undefined,
          location: additionalData.location ? {
            district: additionalData.location.district,
            ward: additionalData.location.ward
          } : undefined
        };
        
        // Enhanced message with additional info
        let enhancedMessage = basicResult.message;
        if (additionalData.housePriceAverage) {
          enhancedMessage += `\n💰 Avg. House Price: ${formatCurrency(additionalData.housePriceAverage)}`;
        }
        if (additionalData.crimeRate !== undefined) {
          enhancedMessage += `\n🚔 Crime Rate: ${getCrimeRateDescription(additionalData.crimeRate)} (${additionalData.crimeRate} incidents/month)`;
        }
        if (additionalData.location) {
          enhancedMessage += `\n📍 District: ${additionalData.location.district}`;
        }
        
        basicResult.message = enhancedMessage;
      }
    } catch (error) {
      console.error('Error fetching additional postcode data:', error);
    }
  }
  
  return basicResult;
}

// Keep the original synchronous function for basic checking
export function checkPostcode(postcode: string): PostcodeResult {
  const trimmedPostcode = postcode.trim();
  
  if (!trimmedPostcode) {
    return {
      isValid: false,
      isInBanana: false,
      message: 'Please enter a postcode'
    };
  }

  const normalizedPostcode = normalizePostcode(trimmedPostcode);
  
  if (!validatePostcode(normalizedPostcode)) {
    return {
      isValid: false,
      isInBanana: false,
      message: 'Please enter a valid London postcode (e.g., SW1A 1AA, W1 1AA, EC1A 1AA)'
    };
  }

  const outwardCode = extractOutwardCode(normalizedPostcode);
  const isInBanana = BANANA_POSTCODES.has(outwardCode);

  return {
    isValid: true,
    isInBanana,
    normalizedPostcode,
    message: isInBanana 
      ? `🍌 Yes! ${normalizedPostcode} is in the London Banana zone!`
      : `❌ No, ${normalizedPostcode} is outside the London Banana zone.`
  };
}
