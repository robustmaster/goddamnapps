export const tagLabels = {
  "privacy-abuse": "隐私滥用",
  "malware-like": "类恶意软件",
  "dark-patterns": "暗黑模式",
  "subscription-traps": "续费陷阱",
  "refund-hell": "退款地狱",
  "ad-abuse": "广告滥用",
  "account-hostage": "账号绑架",
  "price-games": "价格套路"
};

export const statusLabels = {
  alleged: "待核实",
  reported: "公开报道",
  confirmed: "已确认",
  fixed: "已修复",
  unresolved: "未解决"
};

export const severityLabels = {
  annoying: "烦人",
  sketchy: "可疑",
  hostile: "反用户",
  goddamn: "狗日级",
  nuclear: "核爆级"
};

export function labelFor(labels, key) {
  return labels[key] ?? key;
}

