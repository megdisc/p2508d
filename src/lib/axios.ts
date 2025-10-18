// src/lib/axios.ts

import axios from 'axios';

// APIのベースURLを設定します。
// .envファイルなどから環境変数として読み込むのが一般的です。
const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 例：リクエストインターセプター
 * 全てのリクエストが送信される前に、ヘッダーに認証トークンを付与するなどの処理を挟むことができます。
 */
// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

/**
 * 例：レスポンスインターセプター
 * APIからのレスポンスを受け取った後に、グローバルなエラーハンドリングなどを行うことができます。
 */
// apiClient.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response?.status === 401) {
//       // 認証エラー時の処理（例：ログインページへリダイレクト）
//       console.error('Unauthorized access - redirecting to login.');
//     }
//     return Promise.reject(error);
//   }
// );