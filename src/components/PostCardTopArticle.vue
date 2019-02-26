<template>
  <main>  
			<div class="card"	style="width:35%;">  
				<img src="./../assets/post-article.jpg" height="192px" alt="">
				<div class="card-body-title--content mt-2 ml-3">
					<p class="category">Technology</p>
					<h5 class="card-title font-weight-bold">
						Lorem ipsum dolor sit amet, vel accumsan iberaviss ex,
						ea nec elaboraret interpret
					</h5>
					<div class="mt-3 mb-3 d-flex count justify-content-start">
						<a class="btn btn-primary mr-0 rounded-circle p-1 text-uppercase name-initials " href="#">JD</a> &nbsp;
						<span class="font-weight-bold ml-1 name">John Doe</span>	
						<i class="fas fa-circle mx-2"></i>
						<span class="time">1 min ago</span>
					</div>
				</div>
				<div class="row ml-3 mr-2 mb-3 ">
          <p class="col-8 p-0 counts d-flex align-items-center justify-content-start">
            <span class="mr-1 views">4k views</span>
						<i class="fas fa-circle mx-2"></i>          
            <span class="comments">64 Comments</span>
          </p> 
					<b-link href="#foo" disabled class="col-4 pr-4 text-right ft-12 text-capitalize read-article">Read Article</b-link>
        </div>
				<div class="row border-top border-bottom mx-0 pl-3 pr-3 pt-3 d-flex">
					<div class="col-4 d-flex justify-content-between">
						<p class="thumbs-up">
							<span class="circle-border">
								<i class="far fa-thumbs-up"></i>
							</span>
							<span class="count">18</span>
						</p>
						<p class="thumbs-down border-right pr-4">
							<span class="circle-border">
								<i class="far fa-thumbs-down"></i>
							</span>
							<span class="count">1</span>
						</p>
					</div>
					<div class="col-4 d-flex justify-content-start"> 
						<p class="share">
							<span class="circle-border">
								<i class="fas fa-share"></i>
							</span>
							<span class="count">11</span>
						</p>
					</div>
					<div class="col-4 d-flex justify-content-end ">
						<p class="share mr-4">
							<span class="circle-border">
								<i class="far fa-bookmark"></i>
							</span> 
						</p> 
						<p class="share mr-1">
							<span class="option">
							<i class="fas fa-ellipsis-h"></i>
							</span> 
						</p> 
					</div>
				</div>
			</div> 
  </main>
</template>
<script> 
</script>
<style scoped> 
	.category{
		position:absolute;
		top:8px;
		right:8px;
		color:#096DD9;
		display:inline-block;
		padding:5px 3px;
		border-radius:2px;
		background-color:#fff;
		font-size:12px;
	}
	.read-article, .time{
		font-size:12px;
	}
	.name-initials{ 
		font-size:8px;
	}
	.counts, .name{
		font-size:14px;
		font-weight:600;
		color:#565656;
	}
	.name{
		color:#096DD9;
	}
	.count, .option, .circle-border{
		display:inline-flex;
		justify-content: center;
		align-items: center; 
		font-size:12px; 
	}
	.fa-circle{ 
		font-size:4px;
		color:#096DD9;
	}
	.circle-border{
		height:25px;
		width:25px; 
		border:1px solid #ccc;
		border-radius:50%; 
		color:#096DD9;
	}
	
</style>