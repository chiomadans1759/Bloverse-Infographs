<template>
  <main id="general-header">
    <div class="container">
        <div class="row">
					<div class="col" id="brand">
						<img src="@/assets/logo.svg" alt="Bloverse Logo" />
						<span>loverse</span>
					</div>

					<div class="col-auto">
						<a href="#" class="btn btn-outline-white">
							Get Started
						</a>

						<a href="#" class="btn btn-white">
							Become a creator
						</a>
					</div>
        </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'general-header'
}
</script>

<style>
#general-header {
  width: 100%;
  height: auto;
}

#general-header #brand img {
	width: 3rem;
	margin-top: -1rem;
}

#general-header #brand span {
	color: white;
	font-size: 28px;
}

#general-header .btn {
	border-radius: 3px;
}
</style>


