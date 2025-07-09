<script lang="ts">
  import Tab1 from './lib/Tab1.svelte';
  import TabCont from './lib/TabCont.svelte';
  import type { TabItems } from './interface/TabItems';

  let activeTab: Number = $state(1);

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

  const setActiveTab = (tabValue: Number) => () => { activeTab = tabValue };
</script>

<main class="p-5">
  <ul class="flex flex-wrap pl-0 mb-0 list-none">
    {#each tabItems as items}
      <li>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <span class="p-4 cursor-pointer" onclick={setActiveTab(items.value)} role="button" tabindex={items.value} aria-label={items.title}>
          {items.title}
        </span>
      </li>
    {/each}
  </ul>

    {#each tabItems as item}
      {#if activeTab == item.value}
        <svelte:component this={item.content} />
      {/if}
    {/each}
</main>
