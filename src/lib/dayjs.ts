// src/lib/dayjs.ts

import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import relativeTime from 'dayjs/plugin/relativeTime';

// 日本語ロケールをグローバルに設定
dayjs.locale('ja');

// 相対時間を表示するためのプラグインを有効化 (例: "3分前")
dayjs.extend(relativeTime);

// カスタマイズしたdayjsをデフォルトエクスポート
export default dayjs;