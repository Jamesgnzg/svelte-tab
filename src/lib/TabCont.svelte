<script lang="ts">
    let count = $state(1);
</script>

<p>
    The count is: {count}
</p>
<div class="flex gap-5 m-3">
    <button class="p-5 border border-blue-300 rounded-md cursor-pointer" onclick={() => count++}>
        Increment
    </button>

    <button class="p-5 border border-red-300 rounded-md cursor-pointer" onclick={() => count--}>
        Decrement
    </button>
</div>