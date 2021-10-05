import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function dashboard(limit: number, offset: number) {
  let params = {
    limit: limit,
    offset: offset,
  };
  return apiClient.get(ApiConfig.DASHBOARD, { params });
}
