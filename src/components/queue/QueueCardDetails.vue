<template>
  <section class="queueCardContainer">
    <div class="queueCard">
      <section class="cardGrid">
        <div class="content">
          <h2>Godkjenning</h2>
          <section class="campus-building">
            <div class="location" id="campus">
              <p>Campus: </p>
              <h3>{{ $store.state.subjectQueue.campus }}</h3>
            </div>
            <div class="location" id="building">
              <p>Bygning: </p>
              <h3>{{ $store.state.subjectQueue.bygning }}</h3>
            </div>
          </section>
          <section class="room-table">
            <div class="location" id="room">
              <p>Rom: </p>
              <h4>{{ $store.state.subjectQueue.rom }}</h4>
            </div>
            <div class="location" id="table">
              <p>Bord nr: </p>
              <h4>{{ $store.state.subjectQueue.bord }}</h4>
            </div>
          </section>
          <secton class="assignments-section">
            <div class="assignments">
              <p>Øvinger: </p>
              <h4>3, 4</h4>
            </div>
          </secton>
        </div>
        <div class="approveButtons">
          <div class="approve">Godkjenn</div>
          <div class="wait">Vent</div>
          <div class="disapprove">Underkjenn</div>
        </div>
      </section>
    </div>
  </section>
  <div>{{ personId }}</div>

  <button @click="$router.go(-1)"></button>
  <button @click="test"></button>
</template>

<script>
export default {
  name: "QueueCardDetails",
  data() {
    return {
      campus: "",
      bygning: "",
      rom: "",
      bord: "",
      øvinger: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      },
      type: 1,
    };
  },
  props: {
    personId: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.queueCardContainer {
  max-width: 50rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: solid #1c658c;
  background: #eceff4;
  box-shadow: rgb(3 8 20 / 10%) 0px 0.15rem 0.5rem,
    rgb(2 8 20 / 10%) 0px 0.075rem 0.175rem;
  cursor: pointer;
  transition: 0.3s ease;
}

.cardGrid {
  display: grid;
  grid-template-columns: 100%;
}
div.content {
  display: block;
}

.campus-building {
  display: grid;
  grid-template-columns: 50% 50%;
}
#campus {
  padding: 20px;
  margin: auto;
}
#building {
  grid-column: 2;
  padding: 20px;
  margin-bottom: auto;
}
.room-table {
  display: grid;
  grid-template-columns: 50% 50%;
}

.approveButtons {
  display: grid;
  margin: auto;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  gap: 1rem;
}
.approve {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: #1c658c;
  border-radius: 5px;
}
.approve:hover {
  background: green;
  color: white;
}
.disapprove {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: crimson;
  border-radius: 5px;
}
.disapprove:hover {
  background: crimson;
  color: white;
}
.wait {
  text-decoration: none;
  padding: 10px 20px;
  background: white;
  margin: auto 2rem auto 2rem;
  color: #e8ac16;
  border-radius: 5px;
}
.wait:hover {
  color: white;
  background: #e8ac16;
}
</style>
