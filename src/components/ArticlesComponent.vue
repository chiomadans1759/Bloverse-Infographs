<template>
  <div class="articlesComponent">
    <span class="articlesSpan">Articles</span>
    <b-list-group>
      <b-list-group-item
        v-for="(item, index) in sortedQuotes"
        :key="index"
      >
        {{item}}
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
import endData from "@/utils/data.json";

export default {
  data() {
    return {
      endData,
      quotesArray: [],
      sortedQuotes: [],
      arr: [],
      currentpage: 0,
      pagesize: 9
    };
  },
  methods: {
    getSortedQuotes() {
      endData.forEach((data, index) => {
        let list = data.quotes.quote_list;
        list.forEach(d => {
          this.arr.push(d.quote);
        });
      });

      this.sortedQuotes = this.arr.slice(
        this.currentpage,
        this.currentpage + 9
      );
      this.currentpage = this.currentpage + 9;
    }
  },
  mounted() {
    this.getSortedQuotes();
  },
  created() {
    setInterval(() => {
      this.sortedQuotes = this.arr.slice(
        this.currentpage,
        this.currentpage + 9
      )
      this.currentpage = this.currentpage + 9;
    
       if(this.sortedQuotes.length < 9){
         this.currentpage = 0
   
       }
    }, 5000);

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articlesSpan {
  background: #636e72;
  display: block;
  color: white;
  font-size: 30px;
  padding: 5px 0px 10px;
}
.list-group-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.list-group-item{
  margin-bottom: -5px;
}
</style>