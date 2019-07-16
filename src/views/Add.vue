<template>
  <v-container>
    <form @submit.prevent="addChord">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md5 lg5>
          <v-text-field label="Name" v-model="name" required></v-text-field>
          <v-text-field label="Author" v-model="author" required></v-text-field>
          <v-text-field label="YouTube link" v-model="link" required></v-text-field>
        </v-flex>
        <v-flex xs12 md5 lg5>
          <iframe v-if="ytLink" width="300" height="185" :src="ytLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block;"></iframe>
        </v-flex>
      </v-layout>
      <v-btn depressed color="yellow darken-3" type="submit" class="my-5">
        <v-icon left>add</v-icon>
        <span>Add Chords</span>
      </v-btn>
      <v-btn depressed color="grey darken-2" @click="clear" class="my-5">
        <span class="white--text">Clear</span>
      </v-btn>
    </form>
  </v-container>
</template>

<script>
  import { db } from '@/firebase'

  export default {
    name: 'Add',
    data () {
      return {
        name: null,
        author: null,
        link: null
      }
    },
    methods: {
      addChord () {
        db.collection('chords').add({
          name: this.name,
          author: this.author,
          link: this.ytLink
        }).then((docRef) => {
          console.log('Written, ID: ' + docRef.id)
          this.clear()
        })
      },
      clear () {
        this.name = null
        this.author = null
        this.link = null
      }
    },
    computed: {
      ytLink () {
        if (this.link && this.link.includes('https://www.youtube.com/watch?v=')) {
          let vidID = this.link.split('=')
          return `https://www.youtube.com/embed/${vidID[1]}`
        } else
          return null
      }
    }
  }
</script>