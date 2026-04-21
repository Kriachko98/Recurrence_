function initMap(link){
    link.remove();
    var map = L.map('map').setView([40.691576, -73.975210], 16);

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);

    const customMarker = L.icon({
        iconUrl: 'assets/img/map-point.svg',
        iconSize:     [38, 56], // size of the icon
    });

    L.marker([40.691348345592836, -73.98052061744247], {icon: customMarker}).addTo(map);
};