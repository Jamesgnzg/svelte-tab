import type { Component } from "svelte";

export interface TabItems {
  title: string;
  value: number;
  content: Component;
}
