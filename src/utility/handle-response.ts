export async function handleResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
        return await response.json() as T;
    } else {
        const text = await response.text();
        throw new Error(text);
    }
}