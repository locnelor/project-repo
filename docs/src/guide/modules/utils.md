# 工具

## 概述

`packages/utils` 是项目的通用工具函数库，提供了丰富的工具函数和实用程序，包括数据处理、格式化、验证、加密、日期处理等功能。旨在提高开发效率，减少重复代码。

## 架构

### 技术栈

- **TypeScript**: 类型安全的工具函数
- **Lodash-es**: 基础工具函数库
- **Day.js**: 日期处理库
- **Crypto-js**: 加密解密库
- **Validator**: 数据验证库
- **Vite**: 构建工具
- **Vitest**: 单元测试

### 项目结构

```
packages/utils/
├── src/
│   ├── array/              # 数组工具
│   │   ├── index.ts       # 数组工具入口
│   │   ├── chunk.ts       # 数组分块
│   │   ├── unique.ts      # 数组去重
│   │   ├── flatten.ts     # 数组扁平化
│   │   └── sort.ts        # 数组排序
│   ├── object/            # 对象工具
│   │   ├── index.ts       # 对象工具入口
│   │   ├── clone.ts       # 对象克隆
│   │   ├── merge.ts       # 对象合并
│   │   ├── pick.ts        # 对象选择
│   │   └── transform.ts   # 对象转换
│   ├── string/            # 字符串工具
│   │   ├── index.ts       # 字符串工具入口
│   │   ├── format.ts      # 字符串格式化
│   │   ├── validate.ts    # 字符串验证
│   │   ├── transform.ts   # 字符串转换
│   │   └── template.ts    # 模板字符串
│   ├── number/            # 数字工具
│   │   ├── index.ts       # 数字工具入口
│   │   ├── format.ts      # 数字格式化
│   │   ├── calculate.ts   # 数字计算
│   │   ├── random.ts      # 随机数生成
│   │   └── precision.ts   # 精度处理
│   ├── date/              # 日期工具
│   │   ├── index.ts       # 日期工具入口
│   │   ├── format.ts      # 日期格式化
│   │   ├── calculate.ts   # 日期计算
│   │   ├── validate.ts    # 日期验证
│   │   └── timezone.ts    # 时区处理
│   ├── crypto/            # 加密工具
│   │   ├── index.ts       # 加密工具入口
│   │   ├── hash.ts        # 哈希算法
│   │   ├── encrypt.ts     # 加密解密
│   │   ├── base64.ts      # Base64 编码
│   │   └── uuid.ts        # UUID 生成
│   ├── validate/          # 验证工具
│   │   ├── index.ts       # 验证工具入口
│   │   ├── rules.ts       # 验证规则
│   │   ├── patterns.ts    # 正则模式
│   │   ├── schema.ts      # 模式验证
│   │   └── custom.ts      # 自定义验证
│   ├── format/            # 格式化工具
│   │   ├── index.ts       # 格式化工具入口
│   │   ├── currency.ts    # 货币格式化
│   │   ├── file.ts        # 文件格式化
│   │   ├── phone.ts       # 电话格式化
│   │   └── address.ts     # 地址格式化
│   ├── dom/               # DOM 工具
│   │   ├── index.ts       # DOM 工具入口
│   │   ├── element.ts     # 元素操作
│   │   ├── event.ts       # 事件处理
│   │   ├── style.ts       # 样式操作
│   │   └── scroll.ts      # 滚动处理
│   ├── storage/           # 存储工具
│   │   ├── index.ts       # 存储工具入口
│   │   ├── local.ts       # 本地存储
│   │   ├── session.ts     # 会话存储
│   │   ├── cookie.ts      # Cookie 操作
│   │   └── cache.ts       # 缓存管理
│   ├── url/               # URL 工具
│   │   ├── index.ts       # URL 工具入口
│   │   ├── parse.ts       # URL 解析
│   │   ├── build.ts       # URL 构建
│   │   ├── params.ts      # 参数处理
│   │   └── validate.ts    # URL 验证
│   ├── file/              # 文件工具
│   │   ├── index.ts       # 文件工具入口
│   │   ├── upload.ts      # 文件上传
│   │   ├── download.ts    # 文件下载
│   │   ├── compress.ts    # 文件压缩
│   │   └── convert.ts     # 文件转换
│   ├── performance/       # 性能工具
│   │   ├── index.ts       # 性能工具入口
│   │   ├── debounce.ts    # 防抖函数
│   │   ├── throttle.ts    # 节流函数
│   │   ├── memoize.ts     # 记忆化
│   │   └── lazy.ts        # 懒加载
│   ├── browser/           # 浏览器工具
│   │   ├── index.ts       # 浏览器工具入口
│   │   ├── detect.ts      # 浏览器检测
│   │   ├── feature.ts     # 特性检测
│   │   ├── device.ts      # 设备检测
│   │   └── clipboard.ts   # 剪贴板操作
│   ├── tree/              # 树形工具
│   │   ├── index.ts       # 树形工具入口
│   │   ├── traverse.ts    # 树遍历
│   │   ├── transform.ts   # 树转换
│   │   ├── search.ts      # 树搜索
│   │   └── filter.ts      # 树过滤
│   ├── color/             # 颜色工具
│   │   ├── index.ts       # 颜色工具入口
│   │   ├── convert.ts     # 颜色转换
│   │   ├── generate.ts    # 颜色生成
│   │   ├── palette.ts     # 调色板
│   │   └── contrast.ts    # 对比度计算
│   ├── index.ts           # 主入口
│   └── types.ts           # 类型定义
├── tests/                 # 测试文件
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 核心工具

### 1. 数组工具

```typescript
// src/array/index.ts
/**
 * 数组分块
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

/**
 * 数组去重
 */
export const unique = <T>(
  array: T[],
  key?: keyof T | ((item: T) => any),
): T[] => {
  if (!key) {
    return [...new Set(array)];
  }

  const seen = new Set();
  return array.filter((item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

/**
 * 数组扁平化
 */
export const flatten = <T>(array: (T | T[])[], depth = 1): T[] => {
  return depth > 0
    ? array.reduce<T[]>(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val),
        [],
      )
    : (array.slice() as T[]);
};

/**
 * 数组排序
 */
export const sortBy = <T>(
  array: T[],
  key: keyof T | ((item: T) => any),
  order: "asc" | "desc" = "asc",
): T[] => {
  return [...array].sort((a, b) => {
    const aVal = typeof key === "function" ? key(a) : a[key];
    const bVal = typeof key === "function" ? key(b) : b[key];

    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });
};

/**
 * 数组分组
 */
export const groupBy = <T, K extends string | number | symbol>(
  array: T[],
  key: keyof T | ((item: T) => K),
): Record<K, T[]> => {
  return array.reduce(
    (groups, item) => {
      const groupKey = typeof key === "function" ? key(item) : (item[key] as K);
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    },
    {} as Record<K, T[]>,
  );
};

/**
 * 数组差集
 */
export const difference = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter((item) => !array2.includes(item));
};

/**
 * 数组交集
 */
export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter((item) => array2.includes(item));
};

/**
 * 数组并集
 */
export const union = <T>(...arrays: T[][]): T[] => {
  return unique(arrays.flat());
};
```

### 2. 对象工具

```typescript
// src/object/index.ts
/**
 * 深度克隆
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item)) as T;
  }

  if (typeof obj === "object") {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }

  return obj;
};

/**
 * 深度合并
 */
export const deepMerge = <T extends Record<string, any>>(
  target: T,
  ...sources: Partial<T>[]
): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
};

/**
 * 选择对象属性
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

/**
 * 排除对象属性
 */
export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[],
): Omit<T, K> => {
  const result = { ...obj } as Omit<T, K>;
  keys.forEach((key) => {
    delete (result as any)[key];
  });
  return result;
};

/**
 * 获取嵌套属性值
 */
export const get = <T = any>(
  obj: Record<string, any>,
  path: string,
  defaultValue?: T,
): T => {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result == null || typeof result !== "object") {
      return defaultValue as T;
    }
    result = result[key];
  }

  return result === undefined ? (defaultValue as T) : result;
};

/**
 * 设置嵌套属性值
 */
export const set = (
  obj: Record<string, any>,
  path: string,
  value: any,
): void => {
  const keys = path.split(".");
  const lastKey = keys.pop()!;
  let current = obj;

  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }

  current[lastKey] = value;
};

/**
 * 判断是否为对象
 */
export const isObject = (value: any): value is Record<string, any> => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

/**
 * 对象转换
 */
export const mapObject = <T, U>(
  obj: Record<string, T>,
  mapper: (value: T, key: string) => U,
): Record<string, U> => {
  const result: Record<string, U> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = mapper(value, key);
  }
  return result;
};
```

### 3. 字符串工具

```typescript
// src/string/index.ts
/**
 * 驼峰命名转换
 */
export const camelCase = (str: string): string => {
  return str.replace(/[-_\s]+(.)?/g, (_, char) =>
    char ? char.toUpperCase() : "",
  );
};

/**
 * 短横线命名转换
 */
export const kebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

/**
 * 下划线命名转换
 */
export const snakeCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[-\s]+/g, "_")
    .toLowerCase();
};

/**
 * 首字母大写
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * 标题格式化
 */
export const titleCase = (str: string): string => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
};

/**
 * 字符串截断
 */
export const truncate = (
  str: string,
  length: number,
  suffix = "...",
): string => {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * 字符串模板
 */
export const template = (str: string, data: Record<string, any>): string => {
  return str.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] !== undefined ? String(data[key]) : match;
  });
};

/**
 * 移除 HTML 标签
 */
export const stripHtml = (str: string): string => {
  return str.replace(/<[^>]*>/g, "");
};

/**
 * 转义 HTML
 */
export const escapeHtml = (str: string): string => {
  const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[&<>"']/g, (match) => htmlEscapes[match]);
};

/**
 * 反转义 HTML
 */
export const unescapeHtml = (str: string): string => {
  const htmlUnescapes: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  return str.replace(
    /&(?:amp|lt|gt|quot|#39);/g,
    (match) => htmlUnescapes[match],
  );
};

/**
 * 生成随机字符串
 */
export const randomString = (length: number, chars?: string): string => {
  const defaultChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const characters = chars || defaultChars;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
```

### 4. 数字工具

```typescript
// src/number/index.ts
/**
 * 数字格式化
 */
export const formatNumber = (
  num: number,
  options: {
    decimals?: number;
    separator?: string;
    delimiter?: string;
  } = {},
): string => {
  const { decimals = 2, separator = ".", delimiter = "," } = options;

  const parts = num.toFixed(decimals).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

  return parts.join(separator);
};

/**
 * 货币格式化
 */
export const formatCurrency = (
  amount: number,
  currency = "CNY",
  locale = "zh-CN",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

/**
 * 百分比格式化
 */
export const formatPercent = (
  value: number,
  decimals = 2,
  locale = "zh-CN",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

/**
 * 数字范围限制
 */
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

/**
 * 随机数生成
 */
export const random = (min: number, max: number, float = false): number => {
  const result = Math.random() * (max - min) + min;
  return float ? result : Math.floor(result);
};

/**
 * 精度计算
 */
export const precision = {
  add: (a: number, b: number): number => {
    const factor = Math.pow(10, Math.max(getDecimals(a), getDecimals(b)));
    return (Math.round(a * factor) + Math.round(b * factor)) / factor;
  },

  subtract: (a: number, b: number): number => {
    const factor = Math.pow(10, Math.max(getDecimals(a), getDecimals(b)));
    return (Math.round(a * factor) - Math.round(b * factor)) / factor;
  },

  multiply: (a: number, b: number): number => {
    const factor = Math.pow(10, getDecimals(a) + getDecimals(b));
    return (
      (Math.round(a * factor) * Math.round(b * factor)) / (factor * factor)
    );
  },

  divide: (a: number, b: number): number => {
    const factor = Math.pow(10, Math.max(getDecimals(a), getDecimals(b)));
    return Math.round(a * factor) / Math.round(b * factor);
  },
};

/**
 * 获取小数位数
 */
const getDecimals = (num: number): number => {
  const str = num.toString();
  const index = str.indexOf(".");
  return index === -1 ? 0 : str.length - index - 1;
};

/**
 * 数字转中文
 */
export const numberToChinese = (num: number): string => {
  const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const units = ["", "十", "百", "千", "万", "十万", "百万", "千万", "亿"];

  if (num === 0) return digits[0];

  let result = "";
  let unitIndex = 0;

  while (num > 0) {
    const digit = num % 10;
    if (digit !== 0) {
      result = digits[digit] + units[unitIndex] + result;
    } else if (result && !result.startsWith("零")) {
      result = digits[0] + result;
    }
    num = Math.floor(num / 10);
    unitIndex++;
  }

  return result.replace(/零+/g, "零").replace(/零$/, "");
};
```

### 5. 日期工具

```typescript
// src/date/index.ts
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

/**
 * 日期格式化
 */
export const formatDate = (
  date: string | number | Date,
  format = "YYYY-MM-DD HH:mm:ss",
): string => {
  return dayjs(date).format(format);
};

/**
 * 相对时间
 */
export const fromNow = (date: string | number | Date): string => {
  return dayjs(date).fromNow();
};

/**
 * 时间差
 */
export const diffTime = (
  date1: string | number | Date,
  date2: string | number | Date,
  unit: "day" | "hour" | "minute" | "second" = "day",
): number => {
  return dayjs(date1).diff(dayjs(date2), unit);
};

/**
 * 添加时间
 */
export const addTime = (
  date: string | number | Date,
  amount: number,
  unit: "day" | "hour" | "minute" | "second" = "day",
): Date => {
  return dayjs(date).add(amount, unit).toDate();
};

/**
 * 减少时间
 */
export const subtractTime = (
  date: string | number | Date,
  amount: number,
  unit: "day" | "hour" | "minute" | "second" = "day",
): Date => {
  return dayjs(date).subtract(amount, unit).toDate();
};

/**
 * 获取时间范围
 */
export const getTimeRange = (
  type: "today" | "yesterday" | "week" | "month" | "year",
): [Date, Date] => {
  const now = dayjs();

  switch (type) {
    case "today":
      return [now.startOf("day").toDate(), now.endOf("day").toDate()];
    case "yesterday":
      const yesterday = now.subtract(1, "day");
      return [
        yesterday.startOf("day").toDate(),
        yesterday.endOf("day").toDate(),
      ];
    case "week":
      return [now.startOf("week").toDate(), now.endOf("week").toDate()];
    case "month":
      return [now.startOf("month").toDate(), now.endOf("month").toDate()];
    case "year":
      return [now.startOf("year").toDate(), now.endOf("year").toDate()];
    default:
      return [now.toDate(), now.toDate()];
  }
};

/**
 * 时区转换
 */
export const convertTimezone = (
  date: string | number | Date,
  timezone: string,
): Date => {
  return dayjs(date).tz(timezone).toDate();
};

/**
 * 判断是否为工作日
 */
export const isWorkday = (date: string | number | Date): boolean => {
  const day = dayjs(date).day();
  return day >= 1 && day <= 5;
};

/**
 * 获取月份天数
 */
export const getDaysInMonth = (date: string | number | Date): number => {
  return dayjs(date).daysInMonth();
};

/**
 * 获取季度
 */
export const getQuarter = (date: string | number | Date): number => {
  return Math.ceil((dayjs(date).month() + 1) / 3);
};
```

### 6. 加密工具

```typescript
// src/crypto/index.ts
import CryptoJS from "crypto-js";

/**
 * MD5 哈希
 */
export const md5 = (text: string): string => {
  return CryptoJS.MD5(text).toString();
};

/**
 * SHA256 哈希
 */
export const sha256 = (text: string): string => {
  return CryptoJS.SHA256(text).toString();
};

/**
 * AES 加密
 */
export const aesEncrypt = (text: string, key: string): string => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

/**
 * AES 解密
 */
export const aesDecrypt = (ciphertext: string, key: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

/**
 * Base64 编码
 */
export const base64Encode = (text: string): string => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
};

/**
 * Base64 解码
 */
export const base64Decode = (encoded: string): string => {
  return CryptoJS.enc.Base64.parse(encoded).toString(CryptoJS.enc.Utf8);
};

/**
 * UUID 生成
 */
export const uuid = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 短 ID 生成
 */
export const shortId = (length = 8): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * 密码强度检测
 */
export const checkPasswordStrength = (
  password: string,
): {
  score: number;
  level: "weak" | "medium" | "strong" | "very-strong";
  feedback: string[];
} => {
  let score = 0;
  const feedback: string[] = [];

  // 长度检查
  if (password.length >= 8) score += 1;
  else feedback.push("密码长度至少8位");

  // 包含小写字母
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("包含小写字母");

  // 包含大写字母
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("包含大写字母");

  // 包含数字
  if (/\d/.test(password)) score += 1;
  else feedback.push("包含数字");

  // 包含特殊字符
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
  else feedback.push("包含特殊字符");

  let level: "weak" | "medium" | "strong" | "very-strong";
  if (score <= 2) level = "weak";
  else if (score === 3) level = "medium";
  else if (score === 4) level = "strong";
  else level = "very-strong";

  return { score, level, feedback };
};
```

### 7. 验证工具

```typescript
// src/validate/index.ts
/**
 * 邮箱验证
 */
export const isEmail = (email: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

/**
 * 手机号验证
 */
export const isPhone = (phone: string): boolean => {
  const pattern = /^1[3-9]\d{9}$/;
  return pattern.test(phone);
};

/**
 * 身份证验证
 */
export const isIdCard = (idCard: string): boolean => {
  const pattern =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  return pattern.test(idCard);
};

/**
 * URL 验证
 */
export const isUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * IP 地址验证
 */
export const isIp = (ip: string): boolean => {
  const pattern =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return pattern.test(ip);
};

/**
 * 银行卡号验证
 */
export const isBankCard = (cardNumber: string): boolean => {
  const pattern = /^[1-9]\d{12,18}$/;
  if (!pattern.test(cardNumber)) return false;

  // Luhn 算法验证
  let sum = 0;
  let isEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * 中文验证
 */
export const isChinese = (text: string): boolean => {
  const pattern = /^[\u4e00-\u9fa5]+$/;
  return pattern.test(text);
};

/**
 * 数字验证
 */
export const isNumber = (value: any): boolean => {
  return !isNaN(value) && !isNaN(parseFloat(value));
};

/**
 * 整数验证
 */
export const isInteger = (value: any): boolean => {
  return Number.isInteger(Number(value));
};

/**
 * 正整数验证
 */
export const isPositiveInteger = (value: any): boolean => {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
};

/**
 * 范围验证
 */
export const inRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * 长度验证
 */
export const lengthInRange = (
  str: string,
  min: number,
  max: number,
): boolean => {
  return str.length >= min && str.length <= max;
};

/**
 * 自定义验证规则
 */
export interface ValidationRule {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  validator?: (value: any) => boolean | string;
  message?: string;
}

/**
 * 验证器
 */
export const validate = (value: any, rules: ValidationRule[]): string[] => {
  const errors: string[] = [];

  for (const rule of rules) {
    // 必填验证
    if (
      rule.required &&
      (value === undefined || value === null || value === "")
    ) {
      errors.push(rule.message || "此字段为必填项");
      continue;
    }

    // 如果值为空且非必填，跳过其他验证
    if (
      !rule.required &&
      (value === undefined || value === null || value === "")
    ) {
      continue;
    }

    // 最小值/长度验证
    if (rule.min !== undefined) {
      if (typeof value === "string" && value.length < rule.min) {
        errors.push(rule.message || `最小长度为 ${rule.min}`);
      } else if (typeof value === "number" && value < rule.min) {
        errors.push(rule.message || `最小值为 ${rule.min}`);
      }
    }

    // 最大值/长度验证
    if (rule.max !== undefined) {
      if (typeof value === "string" && value.length > rule.max) {
        errors.push(rule.message || `最大长度为 ${rule.max}`);
      } else if (typeof value === "number" && value > rule.max) {
        errors.push(rule.message || `最大值为 ${rule.max}`);
      }
    }

    // 正则验证
    if (rule.pattern && !rule.pattern.test(String(value))) {
      errors.push(rule.message || "格式不正确");
    }

    // 自定义验证
    if (rule.validator) {
      const result = rule.validator(value);
      if (result !== true) {
        errors.push(
          typeof result === "string" ? result : rule.message || "验证失败",
        );
      }
    }
  }

  return errors;
};
```

### 8. 性能工具

```typescript
// src/performance/index.ts
/**
 * 防抖函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };
};

/**
 * 节流函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 记忆化函数
 */
export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  getKey?: (...args: Parameters<T>) => string,
): T => {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = getKey ? getKey(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

/**
 * 懒加载函数
 */
export const lazy = <T>(factory: () => T): (() => T) => {
  let instance: T;
  let initialized = false;

  return () => {
    if (!initialized) {
      instance = factory();
      initialized = true;
    }
    return instance;
  };
};

/**
 * 异步队列
 */
export class AsyncQueue {
  private queue: (() => Promise<any>)[] = [];
  private running = false;

  add<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      this.process();
    });
  }

  private async process() {
    if (this.running || this.queue.length === 0) return;

    this.running = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift()!;
      await task();
    }

    this.running = false;
  }
}

/**
 * 并发控制
 */
export const concurrent = async <T>(
  tasks: (() => Promise<T>)[],
  limit: number,
): Promise<T[]> => {
  const results: T[] = [];
  const executing: Promise<any>[] = [];

  for (const [index, task] of tasks.entries()) {
    const promise = task().then((result) => {
      results[index] = result;
    });

    executing.push(promise);

    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(
        executing.findIndex((p) => p === promise),
        1,
      );
    }
  }

  await Promise.all(executing);
  return results;
};
```

## 构建配置

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "QiyunUtils",
      formats: ["es", "cjs"],
      fileName: (format) => `utils.${format}.js`,
    },
    rollupOptions: {
      external: ["dayjs", "crypto-js", "lodash-es"],
    },
  },
});
```

## 使用方法

### 1. 基本使用

```typescript
import {
  chunk,
  unique,
  deepClone,
  formatDate,
  debounce,
  isEmail,
} from "@qiyun/utils";

// 数组操作
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunks = chunk(numbers, 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const duplicates = [1, 2, 2, 3, 3, 4];
const uniqueNumbers = unique(duplicates); // [1, 2, 3, 4]

// 对象操作
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

// 日期格式化
const now = new Date();
const formatted = formatDate(now, "YYYY-MM-DD"); // '2024-01-15'

// 防抖
const debouncedSearch = debounce((query: string) => {
  console.log("搜索:", query);
}, 300);

// 验证
const email = "user@example.com";
const isValidEmail = isEmail(email); // true
```

### 2. 高级用法

```typescript
import {
  AsyncQueue,
  concurrent,
  memoize,
  validate,
  precision,
} from "@qiyun/utils";

// 异步队列
const queue = new AsyncQueue();

queue.add(async () => {
  const response = await fetch("/api/data1");
  return response.json();
});

queue.add(async () => {
  const response = await fetch("/api/data2");
  return response.json();
});

// 并发控制
const tasks = Array.from(
  { length: 10 },
  (_, i) => () => fetch(`/api/item/${i}`).then((r) => r.json()),
);

const results = await concurrent(tasks, 3); // 最多同时执行3个任务

// 记忆化
const expensiveCalculation = memoize((a: number, b: number) => {
  console.log("计算中..."); // 只在第一次调用时执行
  return a * b + Math.random();
});

console.log(expensiveCalculation(2, 3)); // 计算并缓存
console.log(expensiveCalculation(2, 3)); // 直接返回缓存结果

// 表单验证
const validateUser = (data: any) => {
  const usernameErrors = validate(data.username, [
    { required: true, message: "用户名不能为空" },
    { min: 3, max: 20, message: "用户名长度为3-20个字符" },
    { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名只能包含字母、数字和下划线" },
  ]);

  const emailErrors = validate(data.email, [
    { required: true, message: "邮箱不能为空" },
    { validator: isEmail, message: "邮箱格式不正确" },
  ]);

  return {
    username: usernameErrors,
    email: emailErrors,
  };
};

// 精度计算
const price1 = 0.1;
const price2 = 0.2;
const total = precision.add(price1, price2); // 0.3 (避免浮点数精度问题)
```

### 3. 树形数据处理

```typescript
import { treeTraverse, treeTransform, treeSearch } from "@qiyun/utils";

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    id: "1",
    name: "根节点1",
    children: [
      { id: "1-1", name: "子节点1-1" },
      { id: "1-2", name: "子节点1-2" },
    ],
  },
  {
    id: "2",
    name: "根节点2",
    children: [{ id: "2-1", name: "子节点2-1" }],
  },
];

// 树遍历
treeTraverse(
  treeData,
  (node) => {
    console.log(node.name);
  },
  "children",
);

// 树搜索
const foundNode = treeSearch(treeData, (node) => node.id === "1-1", "children");

// 树转换
const flatList = treeTransform(
  treeData,
  (node, level, parent) => ({
    ...node,
    level,
    parentId: parent?.id,
  }),
  "children",
);
```

### 4. 文件处理

```typescript
import {
  uploadFile,
  downloadFile,
  compressImage,
  getFileInfo,
} from "@qiyun/utils";

// 文件上传
const handleFileUpload = async (file: File) => {
  try {
    // 压缩图片
    if (file.type.startsWith("image/")) {
      const compressed = await compressImage(file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.8,
      });
      file = compressed;
    }

    // 上传文件
    const result = await uploadFile(file, {
      url: "/api/upload",
      onProgress: (progress) => {
        console.log(`上传进度: ${progress}%`);
      },
    });

    console.log("上传成功:", result);
  } catch (error) {
    console.error("上传失败:", error);
  }
};

// 文件下载
const handleDownload = async (url: string, filename: string) => {
  try {
    await downloadFile(url, filename, {
      onProgress: (progress) => {
        console.log(`下载进度: ${progress}%`);
      },
    });
    console.log("下载完成");
  } catch (error) {
    console.error("下载失败:", error);
  }
};

// 获取文件信息
const fileInfo = getFileInfo(file);
console.log("文件信息:", fileInfo);
```

## 最佳实践

### 1. 按需导入

```typescript
// ✅ 推荐 - 按需导入
import { debounce, throttle } from "@qiyun/utils/performance";
import { formatDate, fromNow } from "@qiyun/utils/date";

// ❌ 避免 - 全量导入
import * as utils from "@qiyun/utils";
```

### 2. 类型安全

```typescript
// ✅ 推荐 - 使用 TypeScript 类型
import type { ValidationRule } from "@qiyun/utils/validate";

const rules: ValidationRule[] = [{ required: true }, { min: 3, max: 20 }];

// ❌ 避免 - 忽略类型
const rules = [{ required: true }, { min: 3, max: 20 }];
```

### 3. 错误处理

```typescript
// ✅ 推荐 - 适当的错误处理
try {
  const result = await uploadFile(file);
  console.log("上传成功:", result);
} catch (error) {
  console.error("上传失败:", error);
  // 显示用户友好的错误信息
}

// ❌ 避免 - 忽略错误
const result = await uploadFile(file);
```

### 4. 性能优化

```typescript
// ✅ 推荐 - 使用记忆化优化重复计算
const memoizedCalculation = memoize(expensiveFunction);

// ✅ 推荐 - 使用防抖优化频繁操作
const debouncedSearch = debounce(searchFunction, 300);

// ✅ 推荐 - 使用并发控制避免过载
const results = await concurrent(tasks, 5);
```

### 5. 代码组织

```typescript
// ✅ 推荐 - 创建工具模块
// utils/user.ts
export const formatUserName = (user: User) => {
  return `${user.firstName} ${user.lastName}`;
};

export const validateUserData = (data: any) => {
  // 验证逻辑
};

// ❌ 避免 - 在组件中写工具函数
const MyComponent = () => {
  const formatUserName = (user: User) => {
    // 工具函数应该提取到独立模块
  };
};
```

## 相关资源

- [Lodash 文档](https://lodash.com/docs/)
- [Day.js 文档](https://day.js.org/docs/)
- [Crypto-js 文档](https://cryptojs.gitbook.io/docs/)
- [TypeScript 工具类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [类型定义](/guide/modules/types)
- [组件开发](/guide/modules/components)
