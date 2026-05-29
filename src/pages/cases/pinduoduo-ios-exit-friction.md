---
layout: ../../layouts/CaseLayout.astro
title: "拼多多 iOS 版“防误触退出”争议"
company: "拼多多 / PDD Holdings"
companySlug: "pinduoduo"
app: "拼多多 iOS 版"
date: "2026-05-29"
status: "user-report"
severity: "hostile"
tags:
  - exit-friction
  - dark-patterns
summary: "V2EX 用户反馈称，拼多多 iOS 版在部分场景下会让上滑退出变得困难，回复中有人指出可能与 iOS 的屏幕边缘手势延迟机制有关。"
sources:
  - label: "V2EX 讨论：请问这个算是 iPhone 被 pdd 劫持了吗？"
    url: "https://www.v2ex.com/t/1216165"
  - label: "Apple Developer：preferredScreenEdgesDeferringSystemGestures"
    url: "https://developer.apple.com/documentation/uikit/uiviewcontroller/preferredscreenedgesdeferringsystemgestures"
  - label: "Apple Human Interface Guidelines：Going full screen"
    url: "https://developer.apple.com/design/human-interface-guidelines/going-full-screen"
---

## 发生了什么？

2026 年 5 月 28 日，一名 V2EX 用户发帖称，自己在 iPhone 17、iOS 26 上使用拼多多时，
上滑退出 App 会多次失败，有时需要三四次才能成功。该用户表示，这个问题不是每次都能复现，
但频率较高，并且其他 App 没有同样表现。

帖子回复里，有用户提到拼多多设置中存在“防误触退出”选项；也有人推测它可能使用了 iOS 的
屏幕边缘系统手势延迟机制。Apple 文档中确实存在相关接口，允许特定界面让 App 手势优先于系统边缘手势，
典型场景是全屏游戏、视频或沉浸式内容。

## 为什么这很狗日？

购物 App 的主要任务是让用户浏览、下单、支付，而不是增加退出成本。全屏游戏为了防误触延迟系统手势，
用户还能理解；一个电商 App 如果把类似机制用于普通浏览流程，就会把系统级“回到桌面”的基本控制权变成产品留存工具。

更糟的是，这种设计很容易被包装成“防误触”。用户感受到的是退出失败、需要重复上滑、系统手势不可靠；
产品侧却可以说自己只是提供了一个可关闭的体验设置。入口藏在设置里，不等于它对用户是公平的。

## 需要继续核实

这条记录目前来自论坛用户反馈，尚未独立复现。后续需要确认：

- 受影响的拼多多 iOS 版本号；
- 是否只在视频、直播、沉浸式页面出现，还是普通商品浏览也会触发；
- “防误触退出”是否默认开启；
- 关闭该选项后，上滑退出是否恢复正常；
- App 是否实际调用了 iOS 的屏幕边缘手势延迟相关接口。

## 当前状态

标记为“用户反馈”。它还不是已确认漏洞或已确认违规行为，但作为“退出阻挠”和“暗黑模式”线索，值得记录。
