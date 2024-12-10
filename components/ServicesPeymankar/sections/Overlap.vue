
<template>
  <div class="component-container px-14">
    <div class="title t24600 text--primary">{{ project?.name }}</div>

    <div class="details">
      <span>{{ project?.predictedStartDate }}</span>
      <span>{{project?.neighborhood?.name}}</span>
      <span>{{ project?.city?.name }}</span>
      <span>خاک‌برداری</span>

    </div>
    <div class="price dana-fa">125,000,000 تومان</div>

  </div>
</template>
<script>
export default {
  name: "Overlap",
  props:{
    project:null
  }
};
</script>
<style scoped>
.component-container {
  border: 1px solid #e0e0e0;
  padding: 16px 49px;
  font-family: "IRANSans", Arial, sans-serif;
  direction: rtl;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.10);
  border-radius: 40px;
  align-items: center;
}

.price {
  font-size: 24px;
  font-weight: 600;
  color: #0C385F;
  margin-bottom: 8px;
}

.details {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  color: #0C385F;
  margin-bottom: 8px;
}

.details span {
  background-color: #f4f4f4;
  padding: 4px 8px;
  border-radius: 4px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  color: #0C385F;
}
</style>
