<script>
  export let headings
</script>

{#if headings.length}
  <aside class="">
    <h3 class="font-extrabold text-lg mb-2" id="table-of-contents">
      Table of Contents
    </h3>
    <ul class="overflow-auto h-40">
      {#each headings as heading}
        <li key={`heading-${heading.href}`}>
          <a href={heading.href}>{heading.label}</a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}
