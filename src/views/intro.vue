<template>
  <div class="main-intro">
    <div class="main-intro-first">
      <div class="main-intro-first-content">
        <h1>The Bloverse Story at a Glance</h1>
        <h4>Interaction from our global community</h4>
        <button>Join Bloverse</button>
      </div>
    </div>
    <div class="main-intro-second">
      <div>
        <img
          src="https://images.unsplash.com/photo-1483158139813-6143e26269dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=732&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1527370632562-249f04bb17fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1520720504205-80fec328ef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        >
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1527022683443-0ead6388eb4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1528723742752-2233399d69a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1533872152842-838eddee747a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1505075123357-35a9138620d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt=""
        >
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1529026933789-6ca86f8f988a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1521314443955-f10961bf479b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1528925986593-550a42f9eb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        >
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1506720403415-a876d7240c1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1534493872551-856c2bb2279f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1531265180709-e9b5fb594ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80"
          alt=""
        >
        <img
          src="https://images.unsplash.com/photo-1528313345669-162bbc5d5ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          alt=""
        >
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-intro {
  display: flex;
  height: 100vh;
}
.main-intro-first {
  flex: 1;
  background-image: linear-gradient(
    to bottom,
    #096dd9,
    #116ed3,
    #1a6fcc,
    #2370c5,
    #2b71be
  );
}
.main-intro-second {
  flex: 1;
  background-color: black;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.main-intro-second img {
  width: 100%;
  height: auto;
  opacity: 0.45;
  object-fit: fill;
}
.main-intro-second > div {
  width: 25%;
}
.main-intro-first-content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: center;
  color: #ffffff;
  margin-left: 80px;
}
.main-intro-first-content h1 {
  font-size: 48px;
}
.main-intro-first-content h4 {
  font-size: 20px;
  padding: 5px 0 10px;
}
.main-intro-first-content button {
  border-radius: 4px;
  width: 172px;
  height: 35px;
  color: #096dd9;
  background: #ffffff;
  border: none;
}
</style>
