export const getProductsList = async (list?: number) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/challenge/furniture/products?perPage=12&current=${list}`,
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
