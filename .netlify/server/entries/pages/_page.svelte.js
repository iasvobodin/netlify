import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder.svelte-2zxczi{width:100%;display:grid;grid-auto-flow:column;column-gap:20px;justify-content:space-around}img.svelte-2zxczi{width:600px}h1.svelte-2zxczi{color:azure}body{background-color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-2zxczi"}">netlify test</h1>
<div class="${"holder svelte-2zxczi"}"><img src="${"image/1.jpg"}" alt="${"1"}" class="${"svelte-2zxczi"}">
	<img src="${"image/2.webp"}" alt="${"2"}" class="${"svelte-2zxczi"}">
</div>`;
});
export {
  Page as default
};
