// src/entities/office.ts

import type { Contact } from './contact';
import type { WageSystem } from './wage';

// ... (BusinessHours, ServiceOffering, Staffing の定義は変更なし) ...
export type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export interface BusinessHours {
  isOpen: boolean;
  startTime: string;
  endTime: string;
}

export interface ServiceOffering {
  id: string;
  name: string;
  description?: string;
}

export interface Staffing {
  manager: number;
  serviceManager: number;
  jobCoach: number;
  lifeSupporter: number;
}


// 事業所情報のインターフェース定義
export interface Office {
  id: string; // 事業所を一意に識別するためのID
  corporationId: string; // 所属する運営法人のID
  officeNumber: string; // 事業所番号
  serviceType: string; // サービス種別（例: "就労継続支援B型"）
  capacity: number; // 利用者定員
  
  // 事業所の連絡先情報
  contact: Contact;
  
  // 提供しているサービスの一覧
  services: ServiceOffering[];

  // 職種ごとの人員配置
  staffing: Staffing;
  
  // 週ごとの基本営業時間を定義
  defaultBusinessHours: { [key in DayOfWeek]: BusinessHours };
  
  // 工賃の計算体系
  wageSystem: WageSystem;
  
  // --- ここから追加 ---
  // 受け入れ可能な障害種別のIDリスト
  acceptableDisabilityCategoryIds: string[];
}