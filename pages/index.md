---
layout: layout
title: 転生したらTypeScriptのEnumだった件
subtitle: ～型安全性とエコシステムの変化で挫けそうになっているんだが～
description: TSKaigi 2025 DAY1のyamanokuの発表資料
lang: ja
---

![](../images/slide-01.png)

## 発表概要

「…ここは、一体？」

気づけば俺は、TypeScriptのEnumとして異世界転生していた。与えられたのは名前付き定数を表現する力「列挙型」。
しかし型安全性を重視する世界において、Union型とconst assertionsたちが我が物顔で闊歩し、俺の居場所を奪っていくのであった。

可読性と保守性を高めるために生まれたはずの俺が、今や時代遅れの遺物扱い。
さらに追い打ちをかけるように、Node.jsの「--experimental-strip-types」とTypeScriptの「--erasableSyntaxOnly」のオプションたちが、存在そのものを消し去ろうとする。

「このままでは…このままでは俺は消えてしまうのか…？」

それでも俺は諦めない。同じように居場所を失いかけている仲間たちと共に、俺は立ち上がる。型安全性、エコシステム、そして自身の存在意義についてを考える旅が今始まろうとしていた…。

---

この発表ではTypeScriptにおけるEnumが辿ってきた歴史とその苦境についてを解説していきます。聴者がEnumを使うことを改めて見つめ直すような内容を提供いたします。

## 発表内容

![](../images/slide-02.png)

主人公は「列挙 純」という名前の男性です。彼はシステムエンジニアとして働いていて、主にJavaを使っています。

静的型付け言語が大好きで、最近はTypeScriptという言語についても興味が湧いてきました。

![](../images/slide-03.png)

そんな彼は、以前から興味をもっていたTSKaigiへ参加するため、チケットを申し込み、会場へ向かっていました。

その道中、突如として暴走したトラックが彼の前に現れ、彼の視界は一気に真っ暗になりました。

![](../images/slide-04.png)

次に彼が目を覚ましたのは、見知らぬ暗闇の中。そこからぼんやりと光が差し込んできて、天から声が響きました。

「列挙 純よ、目覚めなさい」

「お前はこれから役割を与えられてこの世界で生きることになる」

![](../images/slide-05.png)

「それはTypeScriptのEnumだ」

彼はTypeScriptという国で、**列挙型**として生きていく運命を背負わされたのです。

![](../images/slide-06.png)

Javaで長年Enumを使いこなしてきた彼は、TypeScriptでもその力が存分に発揮されました。

定数をセットとしてまとめて見やすくしたり、定数に値を付与したり、数値の逆マッピングができたりと、様々な能力を発揮しTypeScriptの国民から慕われていました。

![](../images/slide-07.png)

しかし彼が活躍していたその裏で、次第に国民たちから不満の声が上がり始めました。

数値上の型安全性問題、バンドルサイズやTree Shakingが効かないこと、そもそも逆マッピングなんかしねぇよと、列挙の役割を疑うようになってきます。

![](../images/slide-08.png)

列挙は自らの欠点を改善していきましたが、人々はEnumよりも`as const`でのオブジェクトリテラルやUnion型の方が優れているのではないかと考えるようになりました。

さらに彼に追い打ちをかけることが起きます。

![](../images/slide-09.png)

Node.js国ではTypeScript国との交流を活発にさせるため`--experimental-strip-types`という型注釈を除去する新たな法律を制定しました

![](../images/slide-10.png)

さらにTypeScript国からは`--erasableSyntaxOnly`というEnumを含むTypeScript特有のコントラクトを警告する法律を制定しました。

これらの法律が制定され、EnumといったTypeScriptでの固有の役割をもつ者たちの立場はどんどんなくなっていきました。

![](../images/slide-11.png)

列挙はTypeScript国から居場所を失いつつあり、深い絶望の中にいました。

「俺は、この世界に転生してきたのに、いったいどう役立てばいいんだろう…？」

失意の中、彼は国にはいられなくなり、あてもなく彷徨っていました。

![](../images/slide-12.png)

そのとき、彼に対して歩み寄ってくる一人の人物が現れました。

その人物は、ECMA International国の王様でした。

王様は言いました。「列挙よ、君の力が必要だ。我々の国に来て、新たな役割を果たしてほしい」と。

![](../images/slide-13.png)

そうしてECMA International国ではEnumを正式にJavaScriptの一部として取り込もうとする「Proposal for ECMAScript enums」プロジェクトが動き出したのです。

![](../images/slide-14.png)

またTypeScript国でも、Enumの型注釈を作り列挙型を生かしつつ型情報だけを削除できるようにしたい声もあげられています。

そう、Enumの価値を理解し、必要としている人たちはそこに居たのです。

![](../images/slide-15.png)

居場所がなくなったと思われたEnumの役割が見直され、`as const`やUnion型らと一緒に肩を並べて笑える日がまた来るかもしれません。

![](../images/slide-16.png)

この物語は当初は**なろう系**のストーリーでした。

しかし、この話はいつの間にか**追放無双系**の物語へと変わりました。

![](../images/slide-17.png)

なのでタイトルは『パーティーから追放された俺、ECMAScriptの一員として、TypeScriptで無双してやります！』にしたほうがふさわしいかもしれません。

![](../images/slide-18.png)

ーーーすみません、ここで緊急ニュースです。

なんとこの続きを執筆する予定だった作者が、Microsoftからレイオフされてしまったとのことです。

タイトルが今の形だとちょっと使えない雰囲気になってしまいましたね。

![](../images/slide-19.png)

タイトルは改めまして、

『パーティーから追放された俺、ECMAScriptの一員としてTypeScriptで無双できるかな…？』

に変更されました。

列挙 純の今後に、皆様ご期待ください。

## 参考資料

- [TypeScript: Handbook - Enums](https://www.typescriptlang.org/docs/handbook/enums.html)
- [列挙型 (enum) | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/enum)
  - [列挙型(enum)の問題点と代替手段 | TypeScript入門『サバイバルTypeScript』](https://typescriptbook.jp/reference/values-types-variables/enum/enum-problems-and-alternatives-to-enums)
- [さようなら、TypeScript enum - 株式会社カブク](https://www.kabuku.co.jp/developers/good-bye-typescript-enum)
- [TypeScriptのenumを使わないほうがいい理由を、Tree-shakingの観点で紹介します](https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking)
- [tc39/proposal-enum: Proposal for ECMAScript enums](https://github.com/tc39/proposal-enum)
- [Why does TypeScript PM advice not to use const enum? If so, why not take out from language SPEC · Issue #30590 · microsoft/TypeScript](https://github.com/Microsoft/TypeScript/issues/30590)
- [Implement erasable Enum Annotations by caitp · Pull Request #61414 · microsoft/TypeScript](https://github.com/microsoft/TypeScript/pull/61414)
- [https://x.com/rbuckton/status/1922364558426911039](https://x.com/rbuckton/status/1922364558426911039)
