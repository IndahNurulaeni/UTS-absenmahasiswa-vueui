<template>
  <div class="home">
    <!--img alt="Vue logo" src="../assets/logo.png">-->
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createstudents"
      >Add Mahasiswa</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama Mahasiswa</th>
          <th scope="col">Alamat</th>
          <th scope="col">No Tlp</th>
          <th scope="col">Email</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.nama_mahasiswa }}</td>
          <td>{{ student.alamat }}</td>
          <td>{{ student.no_tlp }}</td>
          <td>{{ student.email }}</td>
          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editstudents', params: { id: student.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="studentDelete(student.id)"
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
    let students = ref([]);
    onMounted(() => {
      axios
        .get('http://127.0.0.1:8000/api/students')
        .then((Response) => {
          students.value = Response.data.data;
        })
        .catch((error) => {
          console.log(error);
        })
    })
    function studentDelete(id){
      axios
        .delete(`http://127.0.0.1:8000/api/students/${id}`)
        .then(()=>{
          let z = this.students.map(students => students.id).indexOf(id);
          this.students.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      students,
      studentDelete,
    };
  },
};
</script>