<template>
<div class="trending">
  <div class="container mt-5">
    <h2>Trending</h2>
    <h4>See the most popular keywords used on our platform</h4>
    <div class="trending-container mt-4">
      <div class="trending-bubble">
        <bubble :endData="endData"></bubble>
      </div>
      <div class="trending-metrics">
        <keywordMetric 
        :totalKeywords="totalKeywords"
        :endData="endData"
        ></keywordMetric>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import bubble from "@/components/Bubbles";
import endData from "@/utils/data.json";
import keywordMetric from "@/components/KeywordMetrics";

export default {
  components: {
    bubble,
    keywordMetric
  },
  data() {
    return {
      endData,
      totalKeywords: null
    };
  },
  methods: {
    calculateData() {
      let sum = [];
      let keyWordTotal = this.endData[0];
      keyWordTotal.forEach(data => {
        sum.push(data.quotes.total);
      });
      this.totalKeywords = sum.reduce((a, b) => a + b, 0);
    }
  },
  created() {
    this.calculateData();
  }
};
</script>

<style scoped>
.trending {
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.trending h2 {
  font-size: 24px;
}

.trending h4 {
  font-size: 14px;
  color: #868686;
}

.trending .trending-container {
  display: flex;
}

.trending .trending-bubble {
  flex: 2.5;
}

.trending .trending-metrics {
  flex: 1;
}
</style>
