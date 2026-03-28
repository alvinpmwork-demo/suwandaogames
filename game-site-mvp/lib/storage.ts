'use client';

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'suwandao_favorites';
const HISTORY_KEY = 'suwandao_history';

// 获取收藏列表
export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

// 添加/移除收藏
export function toggleFavorite(slug: string): boolean {
  const favorites = getFavorites();
  const index = favorites.indexOf(slug);
  
  if (index > -1) {
    favorites.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return false; // 已取消收藏
  } else {
    favorites.push(slug);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return true; // 已添加收藏
  }
}

// 检查是否已收藏
export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug);
}

// 添加游玩历史
export function addToHistory(slug: string) {
  if (typeof window === 'undefined') return;
  
  const history = getHistory();
  // 移除已存在的相同项（移到最前面）
  const filtered = history.filter(item => item !== slug);
  // 添加到开头
  filtered.unshift(slug);
  // 只保留最近20个
  const trimmed = filtered.slice(0, 20);
  
  localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
}

// 获取游玩历史
export function getHistory(): string[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Hook: 使用收藏状态
export function useFavorite(slug: string) {
  const [favorited, setFavorited] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    setFavorited(isFavorite(slug));
  }, [slug]);
  
  const toggle = () => {
    const result = toggleFavorite(slug);
    setFavorited(result);
  };
  
  return { favorited, toggle, mounted };
}
