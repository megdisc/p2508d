// src/constants/uiText.ts

export const UI_TEXT = {
  SYSTEM_NAME: 'p2508d',
  // ページのタイトル
  PAGE_TITLES: {
    DASHBOARD: 'ダッシュボード',
    MEMBER_LIST: '利用者一覧',
    STAFF_LIST: '職員一覧',
  },
  // ナビゲーションの項目名
  NAVIGATION: {
    DASHBOARD: 'ダッシュボード',
    MEMBER_MANAGEMENT: '利用者管理',
    STAFF_MANAGEMENT: '職員管理',
  },
  // セクションなどの見出し
  HEADINGS: {
    MEMBER_LIST: '利用者一覧',
    STAFF_LIST: '職員一覧',
  },
  LABELS: {
    EMAIL: 'メールアドレス',
    PASSWORD: 'パスワード',
    STATUS: '状態',
    ARTICLE_TITLE: '記事名称',
    DATES: '作成日 - 最終更新日',
    AUTHOR: '著作者',
    FULL_NAME: '氏名',
    CONTRACT_STATUS: '契約ステータス',
    JOB_TITLE: '職種',
    OPERATION: '操作',
  },
  BUTTONS: {
    LOGIN: 'ログイン',
    LOGOUT: 'ログアウト',
    SIGN_IN: 'サインイン',
    SIGN_OUT: 'サインアウト',
    CREATE: '作成', // 「+ 作成」から「作成」に変更済み
    EDIT: '編集',
    SAVE_DRAFT: '下書き保存',
    PUBLISH: '公開',
    DELETE: '削除',
    RESET: 'リセット',
    ADD: '追加',
    SAVE: '保存',
    DETAILS: '詳細',
    ADD_MEMBER: '利用者追加',
    BACK: '戻る', // ★ 新しく追加
  },
  ROLES: {
    ADMIN: '管理者',
    EDITOR: '編集者',
    VIEWER: '閲覧者',
  },
  PLACEHOLDERS: {
    EMAIL: 'user@example.com',
    PASSWORD: '********',
    SEARCH: '検索...',
    ARTICLE_TITLE: '記事のタイトルを入力',
    CONTENT: '記事の本文を入力',
    USER_NAME: 'ユーザー名',
    NEW_EMAIL: 'メールアドレス',
    INITIAL_PASSWORD: '初期パスワード',
  },
  STATIC_TEXT: {
    ANONYMOUS_USER: '画面越しのあなた',
  },
  MISC: {
    MOCKUP_TITLE: 'モックアップ'
  }
} as const;