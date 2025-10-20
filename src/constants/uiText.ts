export const UI_TEXT = {
  SYSTEM_NAME: 'p2508d',
  // ページタイトル
  PAGE_TITLES: {
    DASHBOARD: 'ダッシュボード',
    MEMBER_LIST: '利用者一覧',
    STAFF_LIST: '職員一覧',
    SETTINGS: '設定',
  },
  // ボタンのラベル
  BUTTONS: {
    LOGIN: 'ログイン',
    LOGOUT: 'ログアウト',
    CREATE: '新規作成',
    SAVE: '保存',
    DELETE: '削除',
    DETAILS: '詳細',
    BACK: '一覧へ戻る',
  },
  // フォームのラベル
  LABELS: {
    EMAIL: 'メールアドレス',
    PASSWORD: 'パスワード',
    NAME: '氏名',
    NAME_KANA: 'フリガナ',
  },
  // テーブルヘッダー
  TABLE_HEADERS: {
    MEMBER_NAME: '利用者名',
    STAFF_NAME: '職員名',
    STATUS: 'ステータス',
  },
  // 通知メッセージ
  MESSAGES: {
    SAVE_SUCCESS: '保存しました。',
    DELETE_CONFIRM: '本当に削除しますか？',
  },
} as const;
