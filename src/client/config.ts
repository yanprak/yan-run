export default function urlOauth(
  service_id: string,
  redirectUrl: string,
): string {
  return `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirectUrl}`;
}
