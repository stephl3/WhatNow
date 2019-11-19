https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=[api_key]&location=13.681099891662598,100.74700164794922&radius=1000&name=Suvarnabhumi Airport&type=airport


//https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

// Caution: Place Search requests and Place Details requests do not return the same fields.Place Search requests return a subset of the fields that are returned by Place Details requests.

// If the field you want is not returned by Place Search, you can use Place Search to get a place_id, then use that Place ID to make a Place Details request.


// places search params
// Optional parameters

// keyword — A term to be matched against all content that Google has indexed for this place, including but not limited to name, type, and address, as well as customer reviews and other third - party content.
//   language — The language code, indicating in which language the results should be returned, if possible.See the list of supported languages and their codes.Note that we often update supported languages so this list may not be exhaustive.
// minprice and maxprice(optional) — Restricts results to only those places within the specified range.Valid values range between 0(most affordable) to 4(most expensive), inclusive.The exact amount indicated by a specific value will vary from region to region.
//   name — A term to be matched against all content that Google has indexed for this place.Equivalent to keyword.The name field is no longer restricted to place names.Values in this field are combined with values in the keyword field and passed as part of the same search string.We recommend using only the keyword parameter for all search terms.
//     opennow — Returns only those places that are open for business at the time the query is sent.Places that do not specify opening hours in the Google Places database will not be returned if you include this parameter in your query.
//       rankby — Specifies the order in which results are listed.Note that rankby must not be included if radius(described under Required parameters above) is specified.Possible values are:
// prominence(default ).This option sorts results based on their importance.Ranking will favor prominent places within the specified area.Prominence can be affected by a place's ranking in Google's index, global popularity, and other factors.
//   distance.This option biases search results in ascending order by their distance from the specified location.When distance is specified, one or more of keyword, name, or type is required.
//     type — Restricts the results to places matching the specified type.Only one type may be specified(if more than one type is provided, all types following the first entry are ignored).See the list of supported types.
//       pagetoken — Returns up to 20 results from a previously run search.Setting a pagetoken parameter will execute a search with the same parameters used previously — all parameters other than pagetoken will be ignored.
// Note for Google Maps APIs Premium Plan customers: You must include an API key in your requests.You should not include a client or signature parameter with your requests.

// Nearby search example
// The following example is a search request for places of type 'restaurant' within a 1500m radius of a point in Sydney, Australia, containing the word 'cruise':