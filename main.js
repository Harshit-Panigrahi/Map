mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFyc2hpdC1wYW5pZ3JhaGkiLCJhIjoiY2wyYnNzNTlmMGdlYzNrbnJ5dTM1YTF0eCJ9.0vGnTkUoxf2jTRkIwns4dg";

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [12.946914999549275, 77.71763389997041],
  zoom: 22,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  "top-left"
);
