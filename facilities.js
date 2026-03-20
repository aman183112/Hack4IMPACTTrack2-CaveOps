// facilities.js — Mock Health Facility Data by Pincode
// In production: replace with HFR API (https://facility.ndhm.gov.in)

const FACILITIES_BY_PINCODE = {
  // Bhubaneswar pincodes
  "751001": [
    { name: "SCB Medical College & Hospital", type: "District Hospital", distance: "1.2 km", lat: 20.4686, lng: 85.8830, contact: "0671-2414078", ayushman: true },
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "2.4 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "4.1 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true }
  ],
  "751002": [
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "1.1 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true },
    { name: "Hi-Tech Medical College & Hospital", type: "District Hospital", distance: "3.2 km", lat: 20.3017, lng: 85.8378, contact: "0674-2310001", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "5.0 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true }
  ],
  "751003": [
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "1.8 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true },
    { name: "SUM Hospital", type: "District Hospital", distance: "2.5 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true },
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "4.0 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true }
  ],
  "751004": [
    { name: "SUM Hospital", type: "District Hospital", distance: "1.3 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true },
    { name: "KIMS Hospital Bhubaneswar", type: "District Hospital", distance: "2.7 km", lat: 20.2972, lng: 85.8220, contact: "0674-3011000", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "3.5 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true }
  ],
  "751005": [
    { name: "KIMS Hospital Bhubaneswar", type: "District Hospital", distance: "1.0 km", lat: 20.2972, lng: 85.8220, contact: "0674-3011000", ayushman: true },
    { name: "Sparsh Hospital", type: "District Hospital", distance: "2.2 km", lat: 20.3050, lng: 85.8300, contact: "0674-2722222", ayushman: true },
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "3.8 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true }
  ],
  "751006": [
    { name: "Hi-Tech Medical College & Hospital", type: "District Hospital", distance: "0.9 km", lat: 20.3017, lng: 85.8378, contact: "0674-2310001", ayushman: true },
    { name: "SUM Hospital", type: "District Hospital", distance: "2.0 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "4.2 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true }
  ],
  "751007": [
    { name: "Apollo Hospitals Bhubaneswar", type: "District Hospital", distance: "1.5 km", lat: 20.2684, lng: 85.8400, contact: "0674-6661066", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "2.8 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true },
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "4.5 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true }
  ],
  "751010": [
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "0.5 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true },
    { name: "Apollo Hospitals Bhubaneswar", type: "District Hospital", distance: "3.1 km", lat: 20.2684, lng: 85.8400, contact: "0674-6661066", ayushman: true },
    { name: "SUM Hospital", type: "District Hospital", distance: "4.0 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true }
  ],
  "751024": [
    { name: "Sparsh Hospital", type: "District Hospital", distance: "1.4 km", lat: 20.3050, lng: 85.8300, contact: "0674-2722222", ayushman: true },
    { name: "KIMS Hospital Bhubaneswar", type: "District Hospital", distance: "2.3 km", lat: 20.2972, lng: 85.8220, contact: "0674-3011000", ayushman: true },
    { name: "Hi-Tech Medical College & Hospital", type: "District Hospital", distance: "3.6 km", lat: 20.3017, lng: 85.8378, contact: "0674-2310001", ayushman: true }
  ],
  "751025": [
    { name: "SUM Hospital", type: "District Hospital", distance: "1.0 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true },
    { name: "Apollo Hospitals Bhubaneswar", type: "District Hospital", distance: "2.6 km", lat: 20.2684, lng: 85.8400, contact: "0674-6661066", ayushman: true },
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "3.9 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true }
  ],

  // Default fallback for any unknown pincode — points to Bhubaneswar
  "DEFAULT": [
    { name: "AIIMS Bhubaneswar", type: "District Hospital", distance: "Approx 2–10 km", lat: 20.2494, lng: 85.7716, contact: "0674-2476789", ayushman: true },
    { name: "Capital Hospital Bhubaneswar", type: "District Hospital", distance: "Approx 3–12 km", lat: 20.2961, lng: 85.8245, contact: "0674-2392314", ayushman: true },
    { name: "SUM Hospital", type: "District Hospital", distance: "Approx 4–15 km", lat: 20.2987, lng: 85.8170, contact: "0674-2386877", ayushman: true }
  ]
};

function getFacilitiesByPincode(pincode) {
  return FACILITIES_BY_PINCODE[pincode] || FACILITIES_BY_PINCODE["DEFAULT"];
}

module.exports = { getFacilitiesByPincode };
