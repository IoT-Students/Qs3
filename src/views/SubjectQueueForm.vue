<template>
  <div class="form-container">
    <h1>Still deg i kø!</h1>
    <form class="form" @submit.prevent="submit">
      <fieldset>
        <legend>Lokasjon</legend>

        <BaseSelect
          :options="Campus"
          v-model="campus"
          label="Select a campus"
          :error="errors.campus"
        />
        <p></p>
        <BaseSelect
          :options="Buildings"
          v-model="building"
          label="Select a building"
          :error="errors.building"
        />
        <p></p>
        <BaseSelect
          :options="Rooms"
          v-model="room"
          label="Select a room"
          :error="errors.room"
        />
        <p></p>
        <BaseSelect
          :options="Tables"
          v-model="table"
          label="Select a table"
          :error="errors.table"
        />
      </fieldset>

      <fieldset>
        <legend>Øvinger</legend>

        <BaseCheckBox
          v-model="assignmentOne"
          label="1"
          :error="errors.assignmentOne"
        />
        <BaseCheckBox
          v-model="assignmentTwo"
          label="2"
          :error="errors.assignmentTwo"
        />
        <BaseCheckBox
          v-model="assignmentThree"
          label="3"
          :error="errors.assignmentThree"
        />
        <BaseCheckBox
          v-model="assignmentFour"
          label="4"
          :error="errors.assignmentFour"
        />
      </fieldset>

      <fieldset>
        <legend>Type</legend>

        <BaseRadioGroup
          v-model="type"
          name="type"
          :options="typeOptions"
          :error="errors.type"
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
import { useField, useForm } from "vee-validate";
import { boolean, number, object, string } from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      subjectQueue: {
        campus: "",
        building: "",
        room: "",
        table: "",
        assignments: {
          assignmentOne: false,
          assignmentTwo: false,
          assignmentThree: false,
          assignmentFour: false,
        },
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

  setup() {
    const store = useStore();
    const router = useRouter();

    function submit() {
      const subjectQueueRequest = {
        ...this.subjectQueue,
        userId: store.state.userInfo.userID,
        subjectId: store.state.currentSubjectId,
        campus: this.campus,
        building: this.building,
        room: this.room,
        table: this.table,
        assignments: this.assignments,
        type: this.type,
      };
      console.log(subjectQueueRequest);

      store
        .dispatch("createSubjectQueue", subjectQueueRequest)
        .then(() => {
          store.dispatch("getSubjectQueueUser", subjectQueueRequest.subjectId);
          store.dispatch("getAllSubjectQueues");
        })
        .then(() => {
          router.push({
            name: "QueueList",
          });
        });
    }
    const validationSchema = object({
      campus: string().required("A campus is required"),
      building: string().required("A building is required"),
      room: string().required("A room is required"),
      table: string().required("A table is required"),
      type: number(),
      assignmentOne: boolean().required("This is required"),
      assignmentTwo: boolean(),
      assignmentThree: boolean(),
      assignmentFour: boolean(),
    });

    const { errors } = useForm({
      validationSchema,
      initialValues: {
        type: 1,
        assignmentOne: false,
        assignmentTwo: false,
        assignmentThree: false,
        assignmentFour: false,
      },
    });

    const { value: campus } = useField("campus");
    const { value: building } = useField("building");
    const { value: room } = useField("room");
    const { value: table } = useField("table");
    const { value: type } = useField("type");
    const { value: assignmentOne } = useField("assignmentOne");
    const { value: assignmentTwo } = useField("assignmentTwo");
    const { value: assignmentThree } = useField("assignmentThree");
    const { value: assignmentFour } = useField("assignmentFour");

    return {
      campus,
      building,
      room,
      table,
      type,
      assignmentOne,
      assignmentTwo,
      assignmentThree,
      assignmentFour,
      submit,
      errors,
    };
  },
  computed: {
    isError() {
      if (
        this.errors.campus ||
        this.errors.building ||
        this.errors.room ||
        this.errors.table
      ) {
        return true;
      } else {
        return false;
      }
    },
    assignments() {
      if (this.subjectQueue.assignments === true) {
        let assignments = "";
        for (let i = 0; i < this.subjectQueue.assignments; i++) {
          assignments += this.subjectQueue.assignments + ",";
        }
        return assignments;
      } else {
        return null;
      }
    },
  },
};
</script>
<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
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
