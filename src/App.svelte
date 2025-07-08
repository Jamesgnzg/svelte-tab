<script lang="ts">
  import Tab1 from './lib/Tab1.svelte';
  import TabCont from './lib/TabCont.svelte';
  import type { TabItems } from './interface/TabItems';

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
</script>

<main class="p-5">
  <ul class="flex flex-wrap pl-0 mb-0 list-none">
    {#each tabItems as items}
      <li>
        <span class="p-4 cursor-pointer">
          {items.title}
        </span>
      </li>
    {/each}
  </ul>
</main>
