import mockData from './mock-data';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const getAccessToken = async () => {
};

export const getEvents = async () => { // This function will fetch the list of all events
  return mockData;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) { // if no token found, code checks for an authorisation code
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) { //If no authorisation code found: user redirected to Google Authorisation: can sign in & receive their code.
      const response = await fetch(
        "https://nkgw84qfc6.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

