//microCMSの情報
const SERVICE_ID = "mogumogu";
const ENDPOINT = "drink";
const API_KEY = "SoFk1jR4FDUlYlkawmIz2tA6V89N4xCGNT50";

//APIを呼び出す関数
export const getDrinkMenu = async () => {
    try {
        const res = await fetch(
            `https://${SERVICE_ID}.microcms.io/api/v1/${ENDPOINT}/`,
            {
                headers: {
                    "Content-Type": "application/json", // JSON形式でデータを送受信
                    "X-API-KEY": API_KEY, // microCMSのAPIキーをヘッダーに追加
                },
            },
        );
        if (!res.ok) {
            return { statusCode: res.status, error: res.statusText };
        }
        const data = await res.json(); //JSON形式でデータを受け取る
        console.log(data);
        return data;
    } catch (error) {
        return { statusCode: null, error: "ネットワークエラー" };
    }
};
