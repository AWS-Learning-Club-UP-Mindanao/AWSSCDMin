// Contact details for the closing CTA.
export const contactEmail = "awscc.upmindanao@gmail.com";

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/awscc.up",
    icon: "/assets/icons/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/awscc_upmin/",
    icon: "/assets/icons/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/awscc-upmin",
    icon: "/assets/icons/linkedin.svg",
  },
];

// Venue details for the location section. The name and the description are the design frame's
// copy. The map is the Google Maps Static API when GOOGLE_MAPS_API_KEY is set at build time, and
// falls back to the exported image so a keyless build still renders. mapUrl overrides the default
// Google Maps link for the venue.
export const venue = {
  name: "Finster Auditorium, Ateneo de Davao University, Davao City, Philippines",
  address: "",
  mapQuery: "Finster Auditorium, Ateneo de Davao University, Davao City",
  // Emilio Jacinto St. campus. Wikipedia gives 7°4′20″N 125°36′47″E and a coordinate lookup
  // 7.0731, 125.6128, hence the shared values below.
  mapCenter: { lat: 7.0711276, lng: 125.61342 },
  mapZoom: 16,
		mapId: "DEMO_MAP_ID", // swap for a JavaScript Vector map ID from your project
  mapFallbackSrc: "/assets/maps/venue-map.webp",
  mapUrl: "",
  mapLabel: "Open the venue location in Google Maps (opens in a new tab)",
};
