<template>
  <section class="subjectCardContainer">
    <div class="subjectCard">
      <section class="cardGrid">
        <div class="content">
          <section class="meta-grid">
            <div class="subject-info">
              <h3 id="title">{{ subject.title }}</h3>
              <h4 id="code">{{ subject.code }}</h4>
            </div>
            <div class="queue-info">
              <div>
                <p>{{ subject.queueAmount }}</p>
                <p>{{ subject.eta }}</p>
              </div>
            </div>
          </section>
          <div class="subject-message">
            <p id="notice-message">
              {{ subject.message }}
            </p>
          </div>
        </div>
        <div class="queue-buttons">
          <button id="exercise-button">Øvinger</button>
          <button id="queue-button">Til kø</button>
          <button id="chat-button">Chat</button>
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
  },
  data() {
    return {};
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

.subjectCardContainer {
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-radius: 5px;
  border: solid #42b983;
  background: #eceff4;
  box-shadow: rgb(3 8 20 / 10%) 0px 0.15rem 0.5rem,
    rgb(2 8 20 / 10%) 0px 0.075rem 0.175rem;
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
