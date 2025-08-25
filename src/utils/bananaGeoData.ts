// GeoJSON data for the London Banana area boundaries
// This represents the approximate boundaries of the yellow highlighted area from the map
export const LONDON_BANANA_GEOJSON = {
  "type": "FeatureCollection" as const,
  "features": [
    {
      "type": "Feature" as const,
      "properties": {
        "name": "London Banana Zone",
        "description": "Greater London's banana zone covering multiple boroughs and areas"
      },
      "geometry": {
        "type": "Polygon" as const,
        "coordinates": [[
          // === STARTING POINT: Far Northwest ===
          [-0.270, 51.660],    // WD6 (Borehamwood) - northwesternmost point
          
          // === NORTHERN BOUNDARY - HORIZONTAL LINE (West to East) ===
          [-0.260, 51.665],    // Just east of Borehamwood
          [-0.250, 51.668],    // Filling gap towards Barnet
          [-0.240, 51.670],    // Approaching Chipping Barnet
          [-0.230, 51.672],    // Chipping Barnet area
          [-0.220, 51.674],    // East of Chipping Barnet
          [-0.210, 51.676],    // Continuing east
          [-0.200, 51.678],    // Between Barnet and Cockfosters
          [-0.190, 51.680],    // Approaching Cockfosters area
          [-0.180, 51.682],    // Near Cockfosters
          [-0.170, 51.680],    // East of Cockfosters
          [-0.160, 51.678],    // Cockfosters area
          [-0.155, 51.675],    // EN4 (Cockfosters) - northeastern point
          
          // === TURNING SOUTH FROM COCKFOSTERS ===
          [-0.150, 51.670],    // Starting to turn south
          [-0.148, 51.665],    // Continuing south
          [-0.146, 51.660],    // Moving towards main areas
          
          // === EASTERN BOUNDARY (North to South - Including Finsbury, Shoreditch, Southwark) ===
          [-0.145, 51.630],    // Around Cockfosters/Barnet area
          [-0.142, 51.612],    // N11 Friern Barnet
          [-0.140, 51.600],    // Moving south from Barnet
          [-0.138, 51.585],    // Continuing south
          [-0.130, 51.570],    // Approaching central areas  
          [-0.125, 51.560],    // Moving towards Finsbury Park
          [-0.120, 51.555],    // Finsbury Park area
          [-0.115, 51.545],    // Islington/Finsbury area
          [-0.110, 51.540],    // Finsbury area (EC1)
          [-0.100, 51.535],    // Moving towards Shoreditch
          [-0.090, 51.530],    // Approaching Shoreditch
          [-0.080, 51.525],    // Shoreditch area (EC2) - further east
          [-0.075, 51.522],    // Eastern Shoreditch coverage
          [-0.070, 51.520],    // Extended Shoreditch
          [-0.080, 51.515],    // City of London eastern edge
          [-0.075, 51.510],    // Moving towards river
          [-0.070, 51.505],    // Approaching Thames
          [-0.065, 51.500],    // SE1 (Southwark) - easternmost point
          [-0.070, 51.495],    // Southern Southwark
          [-0.075, 51.490],    // Continuing in Southwark
          
          // === SOUTHERN BOUNDARY (East to West - Vertical line Stockwell to Clapham) ===
          [-0.115, 51.470],    // SW9 (Stockwell)
          [-0.118, 51.468],    // Moving south from Stockwell
          [-0.120, 51.466],    // Continuing south
          [-0.122, 51.464],    // Approaching Clapham vertically
          [-0.125, 51.462],    // Near Clapham
          [-0.128, 51.460],    // Clapham approach
          [-0.130, 51.465],    // SW4 (Clapham) - slightly adjusted
          [-0.135, 51.463],    // Central Clapham
          [-0.140, 51.461],    // Extended Clapham area
          [-0.145, 51.450],    // SW4 (South Clapham)
          [-0.155, 51.445],    // SW12 (Balham)
          [-0.165, 51.440],    // Between Balham and Streatham
          [-0.175, 51.435],    // SW16 (Streatham area)
          [-0.185, 51.430],    // Continuing towards Wimbledon
          [-0.195, 51.425],    // SW19 (Approaching Wimbledon)
          [-0.205, 51.420],    // SW19 (Wimbledon)
          [-0.215, 51.415],    // Moving towards Raynes Park
          [-0.225, 51.410],    // Approaching Raynes Park
          [-0.230, 51.405],    // SW20 (Raynes Park)
          [-0.255, 51.400],    // KT3 (New Malden)
          [-0.260, 51.395],    // Moving south from New Malden
          [-0.265, 51.390],    // Continuing south
          [-0.270, 51.385],    // KT6 (Tolworth area)
          [-0.275, 51.380],    // South of Tolworth
          [-0.280, 51.375],    // Continuing south vertically
          [-0.285, 51.370],    // Approaching Chessington
          [-0.290, 51.365],    // KT9 (Chessington) - southernmost point
          
          // === WESTERN BOUNDARY (South to North) ===
          [-0.340, 51.405],    // TW12 (Hampton Court) - westernmost point
          [-0.315, 51.450],    // TW10 (Ham/Petersham)
          [-0.305, 51.460],    // TW9 (Richmond)
          [-0.240, 51.483],    // SW13 Barnes
          [-0.230, 51.488],    // Moving towards Brook Green
          [-0.220, 51.495],    // W6 Brook Green area
          [-0.218, 51.502],    // Continuing north from Brook Green
          [-0.210, 51.508],    // Approaching Shepherd's Bush
          [-0.205, 51.515],    // W11 (Notting Hill)
          [-0.175, 51.520],    // W2 (Paddington)
          [-0.167, 51.528],    // NW8 (St. John's Wood)
          [-0.180, 51.540],    // Cricklewood area (NW2)
          [-0.190, 51.550],    // Between Cricklewood and Hampstead
          [-0.220, 51.555],    // NW3 (Hampstead)
          
          // === CLOSING THE POLYGON ===
          [-0.270, 51.660]     // Back to WD6 (Borehamwood) - complete the loop
        ]]
      }
    }
  ]
};

// Greater London coordinates for map centering
export const LONDON_CENTER = {
  lat: 51.5074,
  lng: -0.1278
} as const;

// Map bounds to show Greater London - expanded for zoom level 6
export const LONDON_BOUNDS = {
  north: 51.75,   // Further north to include all northern areas
  south: 51.25,   // Further south to include all southern areas
  east: 0.15,     // Extended east boundary
  west: -0.55     // Extended west boundary
} as const;
