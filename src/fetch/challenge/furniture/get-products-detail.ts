export const getProductsDetail = async (id: string) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/challenge/furniture/products/${id}`,
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
