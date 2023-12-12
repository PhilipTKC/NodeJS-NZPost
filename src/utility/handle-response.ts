export async function handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
        return await response.json() as T;
    } else {
        const text = await response.text();
        
        const { error_description, error } = JSON.parse(text);

        if (error_description) {
            throw new Error(`Error calling NZ Post API (${response.status} - ${response.statusText}) \n${error_description}`);
        }

        throw new Error(`Error calling NZ Post API (${response.status} - ${response.statusText}) \n${error}`);

    }
}