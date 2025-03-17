let token: string | null = null;
let tokenCreated: Date | null = null;

export async function auth0GetUserByAccessToken(accessToken: string) {
  const response = await fetch(process.env.AUTH0_ISSUER_BASE_URL as string + '/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user info');
  }

  const userInfo = await response.json();
  console.log(userInfo);

  return {
    id: userInfo.sub,
    firstName: userInfo.given_name,
    lastName: userInfo.family_name,
    email: userInfo.email,
  }
}

export async function auth0UpdateUser(userId: string, data: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const managementToken = await getManagementToken();

  const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${managementToken}`,
    },
    body: JSON.stringify({
      family_name: data.lastName,
      given_name: data.firstName,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("this error: ", errorData);
    throw new Error('Failed to update user');
  }

  const user = await response.json();
  return {
    id: user.user_id,
    firstName: user.given_name,
    lastName: user.family_name,
    name: user.name,
    email: user.email,
  };
}

export async function auth0UpdatePassword(userId: string, password: string) {
  const managementToken = await getManagementToken();

  const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${managementToken}`,
    },
    body: JSON.stringify({
      password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("this error: ", errorData);
    throw new Error('Failed to update password');
  }

  const user = await response.json();
  return {
    id: user.user_id,
    firstName: user.given_name,
    lastName: user.family_name,
    email: user.email,
  };
}

// Management API Access
/**
 * Fetches a new Management API token using the client credentials grant.
 * @returns {Promise<string>} The Management API token
 * @throws {Error} If the token request fails
 */
export async function refreshManagementApiToken(): Promise<string> {
  const url = `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`;
  const body = JSON.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
    grant_type: "client_credentials",
  });

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  };

  console.log("Requesting new management token with options:", options);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error response from Auth0:", errorDetails);
      throw new Error(`Failed to fetch management token: ${errorDetails.error_description || "Unknown error"}`);
    }

    const data = await response.json();
    console.log("Successfully fetched new management token");
    tokenCreated = new Date(); // Store the token creation time
    return data.access_token;
  } catch (error) {
    console.error("Error fetching new management token:", error);
    throw new Error("Failed to refresh management token");
  }
}

/**
 * Retrieves the Management API token, refreshing it if necessary.
 * @returns {Promise<string>} The Management API token
 * @throws {Error} If unable to refresh the token
 */
export async function getManagementToken(): Promise<string> {
  const tokenIsExpired =
    !tokenCreated || new Date().getTime() - tokenCreated.getTime() > 24 * 60 * 60 * 1000;

  if (!token || tokenIsExpired) {
    console.log("Management token is missing or expired, refreshing...");
    token = await refreshManagementApiToken();
  } else {
    console.log("Using cached management token");
  }

  return token;
}
