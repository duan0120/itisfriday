'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

  // 状态：存储时间和星期
  const [currentTime, setCurrentTime] = useState("");
  const [isFriday, setIsFriday] = useState("");

  // useEffect：处理客户端副作用
  useEffect(() => {
    // 确认在客户端运行
    console.log("useEffect running in client");

    // 设置初始时间（本地时区）
    setCurrentTime(new Date().toLocaleString());

    // 计算星期几（本地时区）
    const itIsFriday = () => {
      const day = new Date().getDay();
      console.log("Client day:", day);
      switch (day) {
        case 4:
          return "Soon";
        case 5:
          return "Yes";
        default:
          return "No";
      }
    };
    setIsFriday(itIsFriday());

    // 实时更新时间（每秒）
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // 清理函数：在组件卸载时清除定时器
    return () => {
      clearInterval(interval);
      console.log("Timer cleared");
    };
  }, []); // 空依赖数组，只在首次渲染后运行

  return (
    <div className="w-screen h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <h1 className="text-8xl font-bold">{isFriday || "No"}</h1>
      </main>
      <footer className="py-4 flex items-center justify-center">
        <Link href="https://blog.crazykids.tech" className="text-center">© CrazyKids Studio</Link>
        <span className="mx-2">•</span>
        <Link href="https://www.memora.top">Memora</Link>
        <span className="mx-2">•</span>
        <Link href="https://www.blackscreennow.space">Black Screen</Link>
        <span className="mx-2">•</span>
        <span className="mx-2">{currentTime || "Loading..."}</span>
      </footer>
    </div>
  );
}
