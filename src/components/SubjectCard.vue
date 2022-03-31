<template>
  <section class="subjectCardContainer">
    <div class="subjectCard">
      <section class="cardGrid">
        <div class="content">
          <section class="meta-grid">
            <div class="subject-info">
              <h3 id="title">{{ subject.subjectName }}</h3>
              <h4 id="code">{{ subject.subjectCode }}</h4>
            </div>
            <div class="queue-info">
              <div id="imageContainer">
                <p>
                  <img
                    src="../assets/images/outline_people_black_24dp.png"
                    alt="Hourglass"
                  />
                  {{ subject.queueAmount }}
                </p>
                <p v-if="!studass">
                  <img
                    src="../assets/images/outline_hourglass_bottom_black_24dp.png"
                    alt="Hourglass"
                  />
                  {{ subject.eta }}
                </p>
              </div>
            </div>
          </section>
          <div class="subject-message">
            <p id="notice-message">
              {{ subject.message }}
            </p>
          </div>
        </div>
        <div v-if="!studass" class="queue-buttons">
          <button @click="dummyClick" id="exercise-button">
            Still deg i kø
          </button>
          <button @click.stop="goToQueue" id="queue-button">Se kø</button>
          <button @click.stop="goToAssignments" id="chat-button">Se dine øvinger</button>
        </div>
        <div v-if="studass">
          <button @click.stop="goToQueue" id="queue-button-studass">Se kø</button>

        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubjectCard",
  props: {
    subject: {
      type: Object,
      required: true,
    },
    studass: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    dummyClick() {
      console.log("Button is clicked");
    },
    goToQueue() {
      this.$emit("go-to-queue", this.subject.subjectId);
    },
    goToAssignments(){
      this.$emit("go-to-assignments", this.subject.subjectId);

    }
  },
};
</script>

<style scoped>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  margin-bottom: 1rem;
  justify-content: start;
  text-align: left;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
h4 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
button {
  text-transform: none;
  overflow: visible;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 15px 5px 15px;
  font-size: 1rem;
}
img {
  display: inline-block;
  margin: 0 auto;
}
#exercise-button {
  border: solid #2e74f3;
  color: #2e74f3;
  background: floralwhite;
}
#queue-button {
  border: solid green;
  color: green;
  background: floralwhite;
}
#chat-button {
  border: solid #2e74f3;
  color: #2e74f3;
  background: floralwhite;
}
#exercise-button:hover {
  color: floralwhite;
  background: #2e74f3;
}
#queue-button:hover {
  color: floralwhite;
  background: green;
}
#chat-button:hover {
  color: floralwhite;
  background: #2e74f3;
}

#title {
  grid-row: 1;
  margin: auto 0 2px 0;
  font-size: 1.65rem;
}
#code {
  margin: 0 0 0.5rem;
  grid-row: 2;
  font-size: 1.5rem;
}

#imageContainer {
  justify-content: left;
}
#notice-message {
  text-align: center;
}

.subjectCardContainer {
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
.subjectCardContainer:hover {
  box-shadow: 0 0.05rem 0.3rem 0.05rem;
}
.cardGrid {
  display: grid;
  grid-template-columns: 100%;
}
div.content {
  display: block;
}
.queue-buttons {
  display: grid;
  margin: auto;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  gap: 1rem;
}
.meta-grid {
  display: grid;
  grid-template-columns: 50% 50%;
}
.subject-info {
  padding: 20px;
  margin: auto;
}
.queue-info {
  grid-column: 2;
  padding: 20px;
  margin-bottom: auto;
}
.subject-message {
}
</style>
