export const baseUrl = import.meta.env.VITE_API_URL; 

// The app won't start if the VITE_API_URL is missing
if (!baseUrl) {
  throw new Error(
    "VITE_API_URL is missing. Create ClientApp/.env and restart the dev server.",
  );
}

export async function errorFromResponse(response : Response): Promise<Error> {
    try {
        const problem: { title?: string } = await response.json();
        if (problem.title) {
            return new Error(problem.title);
        }
    } catch {
        // The body wasn't .json, the generic message below will do
    }
    return new Error(`Request failed with status ${response.status}`);
}

