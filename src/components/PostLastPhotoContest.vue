

<template>
  <main id="read-later-card" style="width: 8rem;" class="card border-top read-later-card">
    <div class="row mx-0">
      <div :class="[{ 'col-4 read-later-image-list': listView, 'col-12 read-later-image': !listView, }]" :style="{backgroundImage: 'url(' + readLaterImage + ')'}">
        <button v-show="!listView" type="button" class="btn btn-sm bg-white m-2 rounded-0 float-right">Category
        </button>
      </div>
      <div :class="['card-body', { 'col-8 py-0': listView }]">
        <div class="card-body-title--content mt-2">
          <button v-show="listView" type="button" class="btn btn-sm bg-white mx-0 my-2">Category</button>
          <h5 class="card-title font-weight-bold">
            Lorem ipsum dolor sit amet, vel accumsan iberaviss ex,
            ea nec elaboraret interpret
          </h5>
          <p :class="['username', { 'mt-3': listView }]">
            <a class="btn btn-primary mr-1 rounded-circle text-uppercase initials" href="#" role="button">JD</a> &nbsp;
            <span class="font-weight-bold name">John Doe</span>&nbsp;
            <span class="time">1 min ago</span>
          </p>
        </div>
        <div :class="['row m-0 text-capitalize actions', { 'd-none': listView }]">
          <p class="col-8 p-0 counts">
            <span class="mr-2 views">4k views</span>            
            <span class="comments">64 Comments</span>
          </p>
          <p class="col-4 p-0 text-right text-capitalize">Read More</p>
        </div>
      </div>
    </div>
    <div :class="['row px-0 border bg-white card-footer', { 'mt-1': listView }]">
      <div class="col-6 row mx-0 actions--a">
        <div class="col-6 d-flex justify-content-between border-right likes">
          <p class="thumbs-up">
            <span class="border rounded-circle mr-1 icons thumbs-up-icon">
              <i class="fal fa-thumbs-up"></i>
            </span>
            <span class="count">18</span>
          </p> 
          <p class="thumbs-down">
            <span class="border rounded-circle mr-1 icons thumbs-down-icon">
              <i class="fal fa-thumbs-down"></i>
            </span>
            <span class="count">1</span>
          </p>         
        </div>
        <div class="col-6 d-flex justify-content-start share">
          <p class="share">
            <span class="border rounded-circle mr-1 share icons">
              <i class="fal fa-share"></i>
            </span>
            <span class="count">11</span>
          </p> 
        </div>
      </div>
      <div class="col-6 mx-0 d-flex justify-content-end actions--b">
        <p class="share mr-2">
          <span class="border rounded-circle mr-1 icons bookmark">
            <i class="fal fa-bookmark"></i>
          </span>
        </p> 
        <div class="d-flex justify-content-center align-items-center ellipsis-div">
          <p class="px-2 ellipsis dropdown-toggle" href="#" id="navbarDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span id="option-icon"/>
            <span id="option-icon"/>
            <span id="option-icon"/>
          </p> 
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import readLaterImage from "@/assets/images/ChrisBrown.jpg";
export default {
  name: "PostCard",
  data() {
    return {
      readLaterImage
    };
  } 
};
</script>
<style lang="scss" scoped> 
#read-later-card {
  width: 40% !important;
  border:0.25px !important;
  border-top:1px solid #dee2e6 !important;
  &>img {
    height:192px;
  }
  .read-later-image {
    height:192px;
    background-color: #cccccc;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    button {
      color: #2F80ED;
      font-size:12px;
    }
    &-list {
      height: 160px;
      background-color: #cccccc;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      button {
        color: #2F80ED;
        font-size: 12px;
      }
    }
  }
  .list-view-height {
    height:160px;
  }
  .card-body {
    &-title--content {
      margin-bottom: 24px;
      .card-title {
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height:48px;
        text-align: left;
      }
      .username {
        display: flex;
        align-items: center;
        max-width: none;
        width: 100%;
        text-transform: capitalize;
        padding: 0;
        font-size:14px;
        color: #565656;
        .initials {
          height:24px;
          width:24px;
          font-size:8px;
          text-align: center;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          background-color: #2980B9;
          border: none;
        }
        .name {
          color: #096DD9;
          font-weight: 500;
          font-size:14px;
          text-transform: capitalize;
        }
        .name::after {
          content: '\2022';
          color: #2F80ED;
          margin-left:5px;
          font-weight: 800;
        }
        .time {
          font-size:12px;
          color: #868686;
        }
      }
    }
    .actions {
      font-size:14px;
      .counts {
        .views, .comments {
          cursor: pointer;
        }
        .views::after {
          content: '\2022';
          color: #2F80ED;
          margin-left:5px;
          font-weight: 800;
        }
      }
      .keypoints {
        font-size:12px;
        color: #2F80ED;
        cursor: pointer;
      }
    }
    button {
      color: #2F80ED;
      font-size:12px;
      border: 1px solid #dee2e6;
    }
  }
  .card-footer {
    margin-left:-9px;
    margin-right:-9px;
    .clicked {
      background-color: #cccccc;
    }
    .actions {
      &--a {
        .thumbs-down, .thumbs-up, .share {
          cursor: pointer;
          .icons {
            color: #2F80ED;
            height: 24px;
            width:24px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            .fa-thumbs-down {
              transform: rotateY(180deg);
            }
          }
        }
      }
      &--b {
        .thumbs-down, .thumbs-up, .share {
          cursor: pointer;
          .icons {
            color: #2F80ED;
            height:24px;
            width: 24px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
        }
        .ellipsis-div {
          .ellipsis {
            cursor: pointer;
            #option-icon {
              display: inline-block !important;
              background-color: #000000;
              color: #000000;              
              width:3px;
              height:3px;
              margin-left:2px;
              border-radius: 50%;
            }
          }
          .dropdown-item {
            font-size:17px;
            padding:.55rem 1.5rem;
            svg{
              color: #096DD9 !important;
            }
            .badges{
              float: right;
              color: #096DD9;
              border: 1px solid #096DD9;
              border-radius:3px;
              padding: 0 3px;
            }
          }
          .dropdown-toggle {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>