<h1>netlify test</h1>
<div class="holder">
	<img src="image/1.jpg?nf_resize=fit&w=300" alt="1" />
	<img src="https://ik.imagekit.io/iasvobodin/2560_20-08-29-14-32-32.jpg" alt="3" />
	<img src="image/2.webp?nf_resize=fit&w=500" alt="2" />
</div>

<style>
	.holder {
		width: 100%;
		display: grid;
		grid-auto-flow: column;
		column-gap: 20px;
		justify-content: space-around;
	}
	img {
		width: 600px;
	}
	h1 {
		color: azure;
	}
	:global(body) {
		background-color: black;
	}
</style>
