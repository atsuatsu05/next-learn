export const getTopProducts = async () => {
    try {
        const res = await fetch(
            "http://localhost:3000/api/challenge/furniture/products?limit=3",
            {
                cache: "no-store",
                method: "GET",
            },
        );
        if (!res.ok) {
            return { statusCode: res.status, error: res.statusText };
        }

        return await res.json();
    } catch (error) {
        return { statusCode: null, error: "ネットワークエラー" };
    }
};
