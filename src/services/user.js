import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  // return request('/api/currentUser');
  return request.post('/auth/login')
}
export async function queryNotices() {
  return request('/api/notices');
}
