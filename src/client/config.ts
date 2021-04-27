export default function urlOauth(
  service_id: string,
  redirectUrl: string,
): string {
  return `https://ya-praktikum.tech/api/v2/oauth/yandex/service-id?redirect_uri=${redirectUrl}`;
}
