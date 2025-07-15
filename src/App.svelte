<script lang="ts">
  import Tab1 from './lib/Tab1.svelte';
  import TabCont from './lib/TabCont.svelte';
  import type { TabItems } from './interface/TabItems';
  import type { Component } from 'svelte';

   const tabItems:TabItems[] = [
    {
      title: "Tab1",
      value: 1,
      content: Tab1,
    },
    {
      title: "TabCont",
      value: 2,
      content: TabCont,
    }
  ]

  let activeTab: Number = $state(1);
  let ActiveContent: Component = $state(tabItems[0].content);

  const setActiveTab = (tabValue: number) => () => {
    const selectedTab: TabItems | undefined = tabItems.find((item) => {
      return item.value === tabValue;
    });
    
    activeTab = selectedTab?.value ?? 0;
    ActiveContent = selectedTab?.content ?? tabItems[0].content;
  };
</script>

<main class="p-5">
  <ul class="flex flex-wrap pl-0 list-none border-b-1 border-[#dee2e6] rounded-md">
    {#each tabItems as items}
      <li class={activeTab === items.value ? `border rounded-md border-b-white border-[#dee2e6] bg-white text-[#495057] -mb-[1px]` : ''}>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <span class={`p-4 cursor-pointer block border border-transparent rounded-md ${activeTab !== items.value ? `hover:border-[#dee2e6] hover:border-b-white` : ''}`} onclick={setActiveTab(items.value)} role="button" tabindex={items.value} aria-label={items.title}>
          {items.title}
        </span>
      </li>
    {/each}
  </ul>
  <div class="p-5 min-h-screen">
      <ActiveContent />
  </div>
</main>
