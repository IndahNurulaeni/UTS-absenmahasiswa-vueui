<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createsemesters"
      >Add Semester</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Semester</th>
           <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(semester, index) in semesters" :key="index">
          <td>{{ semester.semester }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editsemesters', params: { id: semester.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="semesterDelete(semester.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: {
    Slider,
  },
  setup() {
    let semesters = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/semesters')
        .then((Response) => {
          semesters.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    function semesterDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/semesters/${id}`)
        .then(() => {
          let z = this.semesters.map((semesters) => semesters.id).index(id);
          this.semesters.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      semesters,
      semesterDelete,
    };
  },
};
</script>