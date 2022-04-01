<template>
  <div class="form-container">
    <h1 class="title">Still deg i kø!</h1>
    <form class="form" @submit.prevent="submit">
      <fieldset>
        <legend id="title">Lokasjon</legend>
        <div class="location">
          <BaseSelect
              :options="Campus"
              v-model="subjectQueue.campus"
              label="Select a campus"

          />
        </div>
        <p></p>
        <div class="location">
          <BaseSelect
              :options="Buildings"
              v-model="subjectQueue.building"
              label="Select a building"
          />
        </div>
        <p></p>
        <div class="location">
          <BaseSelect
              :options="Rooms"
              v-model="subjectQueue.room"
              label="Select a room"
              class="location"
          />
        </div>
        <p></p>
        <div class="location">
          <BaseSelect
              :options="Tables"
              v-model="subjectQueue.table"
              label="Select a table"
              class="location"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend class="title">Øvinger</legend>
        <div class="assignments">
          <AssignmentFormCard
            v-for="assignment in assignments"
            :key="assignment.assignmentId"
            :assignment="assignment"
            @click="updateAssignmentNumber(assignment.assignmentNumber)"
            type="button"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend class="title">Type</legend>

        <BaseRadioGroup
          v-model="subjectQueue.type"
          name="type"
          :options="typeOptions"
        />
      </fieldset>

      <BaseButton
        type="submit"
        class="mybtn"
        :disabled="isError"
        something="else"
      >
        Still deg i kø
      </BaseButton>
    </form>
    <pre>{{ subjectQueue }}</pre>
    <pre> {{ $store.state.currentSubjectId }} </pre>
  </div>
</template>

<script>
import AssignmentFormCard from "../components/AssignmentFormCard";

export default {
  components: {
    AssignmentFormCard,
  },
  data() {

    return {
      subjectQueue: {
        campus: "",
        building: "",
        room: "",
        table: "",
        assignment: null,
        type: 1,
      },
      typeOptions: [
        { label: "Hjelp", value: 1 },
        { label: "Godkjenning", value: 0 },
      ],
      Campus: ["Gløshaugen", "Dragvold", "Tunga", "Kalvskinnet"],
      Buildings: [
        "Realfagsbygget",
        "elektrobygget",
        "Hovedbygget",
        "Sentralbygg IV",
      ],
      Rooms: ["A4", "A3", "Kantine"],
      Tables: ["1", "2", "3"],
    };
  },

  computed: {
    assignments() {
      return this.$store.state.assignments;
    },
  },
  methods: {
    updateAssignmentNumber(assignmentNumber) {
      this.subjectQueue.assignment = assignmentNumber;
      console.log(this.subjectQueue.assignment);
      console.log(assignmentNumber);
    },
    submit() {
      const subjectQueueRequest = {
        userId: this.$store.state.userInfo.userID,
        subjectId: this.$store.state.currentSubjectId,
        campus: this.subjectQueue.campus,
        building: this.subjectQueue.building,
        room: this.subjectQueue.room,
        table: this.subjectQueue.table,
        assignment: this.subjectQueue.assignment,
        type: this.subjectQueue.type,
      };

      console.log("Dette er køobjektet: " + this.subjectQueue.assignment);
      this.$store
        .dispatch("createSubjectQueue", subjectQueueRequest)
        .then(() => {
          this.$store.dispatch(
            "getSubjectQueueUser",
            subjectQueueRequest.subjectId
          );
          this.$store.dispatch(
            "getSubjectQueueUser",
            subjectQueueRequest.subjectId
          );
          this.$store.dispatch("getAllSubjectQueues");
        })
        .then(() => {
          this.$router.push({
            name: "QueueList",
          });
        });
    },
  },
};
</script>
<style scoped>
fieldset {
  border: 0;
  margin: 2.5rem;
  padding: 0;
}
legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
.title {
  margin: 5px;
}
#title {
  margin: 2rem auto;
}
.assignments {
  margin: 0 auto;
  padding: 10px;
}
.form {
  border: solid #1c658c;
  border-radius: 10px;
  max-width: 500px;
  margin: 0 auto;
}
.location {
  max-width: 300px;
  text-align: left;
  margin: 0 auto;
}

.mybtn,
label,
input,
select,
textarea {
  display: inline-flex;
  font-family: "Open sans", sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.mybtn,
input {
  overflow: visible;
}
.mybtn,
select {
  text-transform: none;
}
.mybtn,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
}
mybtn::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
mybtn:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 2px solid #39b982;
}
label {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
}
input,
textarea {
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
}
input.error,
select.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
textarea {
  width: 100%;
  overflow: auto;
  font-size: 20px;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
[type="text"],
[type="number"],
[type="search"],
[type="password"] {
  height: 52px;
  width: 40%;
  padding: 0 10px;
  font-size: 20px;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
[hidden] {
  display: none;
}
.mybtn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 20px;
  margin: 10px;
  background-color: lightgreen;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
}
.mybtn:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mybtn:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.mybtn:focus {
  outline: 0;
}
.mybtn:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}

#header {
  color: #39b982;
}
</style>
