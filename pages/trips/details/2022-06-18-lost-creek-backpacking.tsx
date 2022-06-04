import {TripDetails} from "../../../components/TripDetails"

export default () => {
  return (
    <TripDetails 
      title="Lost Creek Backpacking"
      dateStart="June 18, 2022"
      dateEnd="June 19, 2022"
      party={[
        "Ian Forsyth",
        "Lexi White",
        "Mary-Therese Heintzkill",
        "Joel Leichnetz",
        "Chris Brady",
        "Kristi Brecht",
        "Nick Evens",
      ]}
      itinerary={[{
        item: "We'll meet at the Ute Creek Trailhead at 10:00am on 6/18",
        link: "https://goo.gl/maps/jZgBeWRZsVRQ2UKb6",
      }, {
        item:  "Hike a little under 5 miles to our camp",
        link: "https://www.gaiagps.com/public/pFxLZdCzqZRbCkjhdqtID6QN/?layer=GaiaTopoRasterFeet",
        linkName: "route"
      }, {
        item: "If we want, we can checkout the top of the Bison Mountain pass (~4 miles roundtrip)",
        link: "https://www.gaiagps.com/datasummary/track/c7d98205-8364-4890-8962-b6045d809989/",
        linkName: "route",
      }, {
        item:  "Enjoy the night at camp",
      }, {
        item: "Wake up the morning of 6/19, hike the same route back the cars",
      }]}
      otherDetails={[
        "The route and campsite run along the creek, plenty of water to filter",
        "We may encounter small patches of snow, but recent trip report say it's clear",
        "Recent weather in the area has ranged from highs in the upper 60°s to lows at night in mid 30°s, dress warm",
      ]}
    >
    </TripDetails>
  );
}
