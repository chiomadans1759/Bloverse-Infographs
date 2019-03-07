<template>
  <main id="post-card">
    <div class="mb-4">
      <h6 v-if="card_type == 'article'">Top Article of the Month</h6>
      <h6 v-else>Last Photo Contest winner</h6>
    </div>
    <div class="card" style="height:360px;">
      <img src="./../assets/post-article.jpg" v-if="card_type == 'article'" :class="{ 'article_img-height': card_type == 'article'}" alt>
      <img src="./../assets/photo-contest.jpg" v-else :class="{ 'photo-img-height': card_type == 'photo'}" alt>
      <div class="card-body-title--content mt-2 ml-4">
        <p class="card-body-category" v-show="card_type == 'article'">Technology</p>
        <h5 class="card-title mb-3 mt-2 font-weight-bold" v-show="card_type == 'article'">
          Lorem ipsum dolor sit amet, vel accumsan iber avis ex,
          ea nec elaboraret interpret
        </h5>
        <div class="mt-3 mb-3 d-flex count justify-content-start">
          <a
            class="btn btn-primary mr-0 rounded-circle p-1 text-uppercase name-initials"
            href="#"
          >JD</a> &nbsp;
          <span class="font-weight-bold ml-1 name">John Doe</span>
          <i class="fas fa-circle mx-2"></i>
          <span class="time" v-if="card_type == 'article'">1 min ago</span>
          <span class="time" v-else>Greeting to the Sun</span>
        </div>
      </div>
      <div class="row ml-4 mt-3">
        <p class="col-8 p-0 counts d-flex align-items-center justify-content-start">
          <span class="mr-1 views">4k views</span> 
        </p>
        <b-link
          href="#foo"
          disabled
          class="col-4 pr-4 text-right ft-12 text-capitalize read-article"
        >Read Article</b-link>
      </div> 
    </div>
  </main>
</template>

<script>
	export default {
		name: "post-card",
		props: {
			card_type: String
		}
	}
</script>

<style scoped>
#post-card h6 {
  font-size:16px;
  font-weight:bold;
  color:#565656;
}

#post-card .card { 
  box-shadow:none; 
	border:1px solid #ccc;
}

#post-card .card-title{
  font-size:22px;
  color:#252525;
  line-height:30px;
  font-weight:200;
}

#post-card img {
  object-fit: cover;
  padding:8px;
}

#post-card img.article_img-height {
  height: 192px;
}

#post-card img.photo-img-height {
  height: 257px;
}

#post-card .card-body-category {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #096dd9;
  display: inline-block;
  padding: 5px 3px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 12px;
}

#post-card .read-article,
#post-card .time {
  font-size: 12px;
}

#post-card .time {
  color: #565656;
}

#post-card .name-initials {
  font-size: 8px;
}

#post-card .counts,
#post-card.name {
  font-size: 14px;
  font-weight: 600;
  color: #565656;
}

#post-card .name {
  color: #096dd9;
}

#post-card .count, 
#post-card .circle-border {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}

#post-card .fa-circle {
  font-size: 4px;
  color: #096dd9;
}
 
</style>