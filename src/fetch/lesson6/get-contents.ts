export const getContents = async () => {
    const res = await fetch("http://localhost:3000/api/lesson6/lesson6-1", {
        cache: "no-store", //no-store＝cacheを使わない（変更がすぐに更新される）
        method: "GET", //APIのHTTPメソッド（route.tsで定数にしたGET）を持ってきている
    });
    return await res.json();
};
