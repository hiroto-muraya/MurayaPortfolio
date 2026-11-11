"use client";

import { useEffect, useRef } from "react";

// 社名など、画面には表示したいが検索エンジンにはテキストとして拾わせたくない文字列を表示する。
// - HTML とリポジトリには scripts/encode-text.mjs で変換した文字列だけを置く
// - ブラウザで復号し、テキストではなく <canvas> に描画する(DOM に文字列が残らない)
const KEY = 0x5a;

function decode(encoded: string) {
  const bytes = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0) ^ KEY);
  return new TextDecoder().decode(bytes.reverse());
}

type Props = {
  encoded: string;
  className?: string;
};

export function HiddenText({ encoded, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const style = getComputedStyle(canvas);
      const fontSize = Number.parseFloat(style.fontSize);
      const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const text = decode(encoded);
      const ratio = window.devicePixelRatio || 1;

      ctx.font = font;
      const width = Math.ceil(ctx.measureText(text).width) + 2;
      const height = Math.ceil(fontSize * 1.5);

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(ratio, ratio);
      ctx.font = font;
      ctx.fillStyle = style.color;
      ctx.textBaseline = "middle";
      ctx.fillText(text, 0, height / 2);
    };

    draw();
    // Webフォントの読み込み後に描き直す
    document.fonts?.ready.then(draw);
  }, [encoded]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="社名"
      className={`inline-block align-middle ${className ?? ""}`}
      height={0}
      width={0}
    />
  );
}
