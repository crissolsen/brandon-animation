<template>
<div>
    <TheNav />
  <div id="form-wrapper" v-if= "!submitted">
    <h1 class="form-title">
      Contact
    </h1>
    <div class="content">
      <form name="contact"  @submit.stop.prevent= "submit" >     
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" v-model= "name"/>
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="_replyto" id="email" v-model= "email" />
        <label class="form-label" for="message">
          How can I help?
        </label>
        <textarea class="form-field" name="message" id="message" v-model= "message"></textarea>
        <button class="form-button" type="submit" value="send" >Send Message</button>
      </form>
    </div>
  </div>
  <div v-else id="submitted">
    <h1>Thank you for filling out that form. I look forward to chatting with you further.</h1>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submitted: false
    }
  },
  methods: {
    async submit() {
      try {
        const res = await this.$axios.request({
          url: "https://formspree.io/f/xvovqopk",
          method: 'post',
          data: this.$data
        })
        this.submitted = true
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
    #form-wrapper {
      width: 80%;
      margin: 0.5em auto;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em;
      font-family: 'Exo', sans-serif;
    }
    h1 {
      text-align: center;
      color: black;
      margin-bottom: 0.5em;
      font-family: 'Exo', sans-serif;
    }
    #form-wrapper label {
      display: block;
      font-size: 1.2em;
      line-height: 1.4em;
      margin-bottom: 0.5em;
      margin-top: 0.5em;
    }
    .content {
      display: flex;
      justify-content: center;
      box-shadow: 1em 1em 2em gray;
      padding: 0.5em;
      border-radius: 2em;
      padding-bottom: 2em;
    }
    .content form {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .content input {
      height: 2em;
      border: 0.2em solid gray;
      border-radius: 0.5em;
    }

    .content textarea {
      height: 10em;
      border: 0.2em solid gray;
      border-radius: 0.5em;
      margin-bottom: 1em;
    }

    .form-button {
      font-family: inherit;
      height: 1.5em;
      background: rgb(0,207,255,0.6);
      color: black;
      font-size: 1.5em;
      cursor: pointer;
      font-family: 'Exo', sans-serif;
    }

    .hpot {
      display: none;
    }

    #submitted {
      text-align: center;
    }
</style>

