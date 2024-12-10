<template>
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">{{ project?.name }}</h3>

      <span class="project-date">{{ project?.predictedStartDate }}</span>
    </div>
    <div class="project-details">
<!--      <span class="detail">خاک برداری</span>-->
      <div class="location-details">
        <span class="location">{{ project?.city?.name }}</span>
        <span class="location">{{project?.neighborhood?.name}}</span>
      </div>
    </div>
    <div class="project-cost text-center dana-fa">125,000,000 تومان</div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props:{
    project:null
  }
};
</script>

<style scoped>
.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 40px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: 'IRANSans', sans-serif;
  width: 300px;
  text-align: right;
}

.project-header {
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-date {
  font-size: 14px;
  font-weight: 400;
  color: #0C385F;
  display: block;
}

.project-title {
  font-size: 24px;
  font-weight: 600;
  color: #0C385F;
}

.project-details {
  margin: 12px 0;
}

.detail {
  font-size: 18px;
  font-weight: +400;
  color: #0C385F;
}

.location-details {
  display: flex;
  justify-content: start;
  gap: 8px;
  margin-top: 8px;
}

.location {
  font-size: 14px;
  background-color: #f0f0f0;
  padding: 6px 12px;
  border-radius: 8px;
  color: #1a237e;
}

.project-cost {
  font-size: 24px;
  font-weight: 600;
  color: #0C385F;
  margin-top: 40px;
}
</style>
