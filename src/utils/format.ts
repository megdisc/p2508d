// src/utils/format.ts

/**
 * Dateオブジェクトまたは日付文字列を 'YYYY.MM.DD' 形式にフォーマットします。
 * 無効な日付の場合は、元の文字列をそのまま返します。
 * @param dateSource - Dateオブジェクトまたは日付として解釈可能な文字列
 * @returns フォーマットされた日付文字列 'YYYY.MM.DD'
 */
export const formatDate = (dateSource: Date | string): string => {
  try {
    const date = new Date(dateSource);
    // getTime()がNaNを返す場合は無効な日付と判定
    if (isNaN(date.getTime())) {
      // もし入力が文字列ならそのまま返す
      return typeof dateSource === 'string' ? dateSource : 'Invalid Date';
    }

    const year = date.getFullYear();
    // getMonth()は0から始まるため+1する
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  } catch (error) {
    console.error('Failed to format date:', dateSource, error);
    return typeof dateSource === 'string' ? dateSource : 'Invalid Date';
  }
};