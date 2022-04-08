<script>
  import { onMount } from 'svelte'

  export let author
  const getUserDetails = async () => {
    const res = await fetch(`/${author}.json`)
    return await res.json()
  }
  let data = {}
  onMount(async () => {
    data = await getUserDetails()
  })
</script>

<p class="text-sm">Contribution by:</p>
<article
  class="not-prose border border-primary shadow-lg p-4 rounded-2xl"
>
  <div class="flex space-x-5 justify-evenly">
    <a href={data.html_url} target="_blank" rel="noopener">
      <img
        class="w-20 h-20 p-0 m-0 rounded-full"
        src={data.avatar_url}
        alt={data.name}
      />
    </a>
    <a href={data.html_url} target="_blank" rel="noopener">
      <div class="text-sm">
        <p class="text-lg font-bold tracking-widest">{data.name}</p>
        <p>{data.bio}</p>
      </div>
    </a>
  </div>
</article>
